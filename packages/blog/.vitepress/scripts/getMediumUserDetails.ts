import fetch from 'node-fetch';

const mediumAuthToken = process.argv[2];

if (!mediumAuthToken) {
    console.log(
        'Error :: You need to provide medium authorization token as an argument, e.g.:\n\n./getMediumUserDetails.ts "<YOUR_MEDIUM_AUTH_TOKEN>"\n\nTo obtain it, go to:\nhttps://medium.com/me/settings/security -> "Integration tokens" -> "Get token"',
    );
    throw process.exit(1);
}

fetch('https://api.medium.com/v1/me', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mediumAuthToken}`,
    },
})
    .then((res) => res.json() as Promise<{ data: { id: string } }>)
    .then((res) => console.log(`Your Medium author id is: ${res.data.id}`));
