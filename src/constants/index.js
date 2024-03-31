import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mysql,
    mssql
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Database Administration",
        icon: creator,
    },
    {
        title:"API intergration",
        icon:backend,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "mssql",
        icon: mssql,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Attachment / Apprenticeship",
        company_name: "Herufi Africa",
        icon:"https://media.licdn.com/dms/image/C560BAQH5WDYNq7ck7Q/company-logo_200_200/0/1630592459963/herufi_africa_ltd__logo?e=2147483647&v=beta&t=Gpp1cqZkCpVdOCYZXztS-PYKvAkgJWcw0d3O57RoN6c",
        iconBg: "#383E56",
        date: "January 2022 - Dec 2022",
        points: [
            "Developing and maintaining mobile applications using Flutter",
            "Collaborating with cross-functional teams and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Installing and Maintaining a Point of Sale built on C# using a MSSQL database.",
            "Network configuration and set up."
        ],
    },
    {
        title: "Web Developer - contract",
        company_name: "Siafu Social",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#E6DEDD",
        date: "April 2023 - May 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Fiber Optic Sales and Technical Support",
        company_name: "Plugins Fiber",
        icon: "https://plugins.co.ke/net/logo3.png",
        iconBg: "#383E56",
        date: "July 2023 - present",
        points: [
         ""
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "HangMan",
        description:
            "A console game built on C# for letters and word gausing.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Game Development",
                color: "green-text-gradient",
            },

        ],
        live_link:"",
        image: "",
        source_code_link: "https://github.com/Bildad0/Hang-Man-Game",
    },
    {
        name: "Delivery App",
        description:
            "A mobile App built in flutter for food ordering and delivery tracking",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "Google maps",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        live_link:"",
        image: "https://github.com/Bildad0/Delivery-App/blob/master/designs/Food-Delivery-App-Ui-Kit-Graphics-21717883-1.jpg",
        source_code_link: "https://github.com/Bildad0/Delivery-App",
    },
    {
        name: "Internet provider website",
        description:
            "Internet Provider website built on vanilla javascript, html, css and tailwind css.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        live_link:"https://internet-provider-nu.vercel.app/",
        image: "",
        source_code_link: "https://github.com/Bildad0/internet-provider",
    },
];

export { services, technologies, experiences, testimonials, projects };