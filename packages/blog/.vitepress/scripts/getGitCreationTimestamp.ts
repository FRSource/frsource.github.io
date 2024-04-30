import { SpawnOptionsWithoutStdio } from 'child_process';
import { spawn } from 'cross-spawn';

export function getGitCreationTimestamp(
    file: string,
    options?: SpawnOptionsWithoutStdio,
) {
    return new Promise<number>((resolve, reject) => {
        const child = spawn(
            'git',
            ['log', '--diff-filter=A', '--follow', '--pretty="%ci"', file],
            options,
        );
        let output = '';
        child.stdout.on('data', (d: unknown) => (output += String(d)));
        child.on('close', () => {
            const dates = output.split('\n');
            let lastDate: string;
            do {
                lastDate = dates.pop()?.trim() || '';
            } while (!lastDate && dates.length);
            resolve(+new Date(lastDate));
        });
        child.on('error', reject);
    });
}
