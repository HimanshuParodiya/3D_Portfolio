import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    netflix,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },


];

export const aboutMe = [

]

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Calculator',
        description: 'Developed a web calculator that do simple calculations. ',
        link: 'https://himanshu-webcalculator.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SunnySide Landing Page',
        description: 'Created a landing page took challenge frontend mentor.',
        link: 'https://himanshu-sunnyside.netlify.app/',
    },

    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Weather App',
        description: 'This is my very first app where I work with the API of OpenWeather. Where I created this responsive weather using HTML, CSS & JS as a means to explore new concepts in javascript. It allowed me to understand the basic of fetching data and showing it on our page.',
        link: 'https://himanshu-weather.netlify.app/',
    },
    {
        iconUrl: tesla,
        theme: 'btn-back-black',
        name: 'Tesla Clone',
        description: "Created this responsive clone of Tesla's landing page using Reactjs and Styled-Components I choose using styled-component because I found it very new because, in my previous projects, I use a lot of plain CSS3 so this time I think while trying new technology like Reactjs I should also choose Styled-Components for CSS as a means to explore new technologies and their working.",
        link: 'https://himanshu-react-tesla.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Space Tourism',
        description: 'I took this challenge from the frontend Mentor. Where I had to create this responsive Space Tourism multipage React application which some smooth animation using Reactjs. It helps me a lot to understand the basics like how the react-router-dom and more .',
        link: 'https://himanshu-react-space.netlify.app/',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-red',
        name: 'Netflix Clone',
        description: "Created a Netflix clone with login logout functionality using Firebase authentication. Here I explore React js, Redux js, and Firebase. How these technologies work together and how to integrate them. I took help here from Sony Sangha's youtube tutorial.",
        link: 'https://himanshu-react-netflix.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'EasyFind',
        description: 'Create my first own E-commerce Store. This responsive E-commerce webApp. Where I work with handling API, infinite Scroll how to work on large-scale projects, and more',
        link: 'https://himanshu-react-easyfind.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Movix',
        description: 'The Movix. With Movix you can find any movie details, their trailers, and their Casts and you can also save them in your Favorite Movies section. I have used the TMDB database here to get the movies and their data. To create this responsive Movix app I use Reactjs, ReduxToolkit & Sass. This was the best practice to understand how to handle complex API and their response in real-world projects.',
        link: 'https://himanshu-react-movix.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];