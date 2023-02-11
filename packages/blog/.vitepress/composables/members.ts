import simpleIcons from "simple-icons";
const { siMedium, siDevdotto, siHashnode, siMinutemailer } = simpleIcons;

export const members = [
    {
        id: "frs",
        avatar: "https://github.com/FRSgit.png",
        name: "Jakub FRS Freisler",
        title: "Tech Lead",
        org: "Vue Storefront",
        orgLink: "https://vuestorefront.io/",
        desc: "FRSOURCE founder, Frontend expert, Typescript geek 💙 Wanna talk about web performance? Write me! 🚀",
        links: [
            { icon: "github", link: "https://github.com/FRSgit" },
            { icon: "twitter", link: "https://twitter.com/frsource1" },
            { icon: siMedium, link: "https://medium.com/@kubafreisler" },
            { icon: siDevdotto, link: "https://dev.to/frsgit" },
            { icon: siHashnode, link: "https://frs.hashnode.dev/" },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/jakub-freisler-03a32138/",
            },
            { icon: siMinutemailer, link: "mailto:jakub+blog@frsource.org" },
        ],
        pl: {
            desc: "Założyciel FRSOURCE, znawca Frontendu, entuzjasta Typescript 💙 Chcesz porozmawiać o wydajności na Webie? Napisz do mnie! 🚀",
        },
    },
];
