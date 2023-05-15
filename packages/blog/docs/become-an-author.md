# Become an author

Thank you for showing willingness to become a FRSPACE author ✌️

FRSPACE is a blogging platform where Github repository is a main source of data, so if you're reading this message - you already know where you will create your posts 😊

## Getting started

Github account is required, but there are also few additional steps needed to start writing content:

1. In your first pull request you need to make an update to `packages/blog/.vitepress/composables/members.ts` file:
    1. Add a new array entry with all of the necessary data included (id must me unique!).
    2. (optional) For those willing to use the automated medium integration:
        1. In termial, go to `packages/blog` directory, run command `pnpm medium:getAuthorId` and follow its steps.
        2. Add `MEDIUM_TOKEN_<memberId>`.
2. Start writing your content!

## Guidelines about copywriting

1. Use images in `.webp` format. You can use tools like [convertIO](https://convertio.co/jpg-webp/) to convert your jpeg/png images to webp. Blog will handle conversion to any other relevant formats.
2. For article-related assets that apply to more than one locale version: place them in the directory of the `en` version of an article. E.g. `.vitepress/post/my-article/en`.
3. For article-related assets that apply to only one locale version: place them in the locale directory of an article. E.g. `.vitepress/post/my-article/pl`.
4. Always link images using absolute path and starting with `/`, e.g. `/post/my-article/assets/demo.webp`.
