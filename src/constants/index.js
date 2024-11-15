import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    tailwind,
    nodejs,
    mysql} from "../assets";

import britumone from "../assets/pictures/britum 1.jpeg";
import client from "../assets/pictures/client.jpeg";
import roysambu from "../assets/pictures/roysambu 2.jpeg";
import Me from "../assets/pictures/me.jpeg";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experiences"
    },
    {
        id: "work",
        title: "Projects",
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
        title: "API intergration",
        icon: backend,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
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

];

const experiences = [
    {
        title: "IT Support and Record Keeping",
        company_name: "St David Academy- Mombasa",
        icon: "",
        iconBg: "#383E56",
        date: "May 2021 - Sep 2022",
        points: [
            "Technical Support",
            "Record Keeping",
            "Microsoft word and excel",
            "Networking and system management.",
        ],
    },
    {
        title: "Attachment / Apprenticeship",
        company_name: "Herufi Africa",
        icon: "https://media.licdn.com/dms/image/C560BAQH5WDYNq7ck7Q/company-logo_200_200/0/1630592459963/herufi_africa_ltd__logo?e=2147483647&v=beta&t=Gpp1cqZkCpVdOCYZXztS-PYKvAkgJWcw0d3O57RoN6c",
        iconBg: "#383E56",
        date: "January 2022 - Dec 2022",
        points: [
            "Developing and maintaining mobile applications using Flutter",
            "Collaborating with cross-functional teams and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Installing and Maintaining a Point of Sale built on C# using a MSSQL database.",
            "Computer network configuration and set up.",
            "Technical support and Point of sale maintainance"
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
        date: "July 2023 - may 2024",
        points: [
            "Fiber Optic Splicing and Installation",
            "Network extention and configuration",
            "Sales and customer management"
        ],
    },
    {
        title: "Lead Technician",
        company_name: "Plugins Fiber",
        icon: "https://plugins.co.ke/net/logo3.png",
        iconBg: "#383E56",
        date: "May 2024 - present",
        points: [
            "Fiber optic support and installation in Tsavo buildings",
            "Lead technician for roysambu and Fedha branches",
        ],
    }
];

const testimonials = [];

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
        live_link: "",
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
        live_link: "",
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
        live_link: "https://internet-provider-nu.vercel.app/",
        image: "",
        source_code_link: "https://github.com/Bildad0/internet-provider",
    },
];

const gallery = [
    { 
        title: "", 
        imageLink: britumone, 
        desc: "" 
    },
    { 
        title: "", 
        imageLink: client, 
        desc: "" 
    },
    { 
        title: "", 
        imageLink: roysambu, 
        desc: "" 
    },
    { 
        title: "", 
        imageLink: Me, 
        desc: "" 
    },
];

export { services, technologies, experiences, testimonials, projects, gallery };