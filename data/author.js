// Tools Expertise
import StrapiIcon from "assets/devicon/strapi.svg?component";
import AsanaIcon from "assets/devicon/asana.svg?component";
import PhpstormIcon from "assets/devicon/phpstorm.svg?component";
import AlgoliaIcon from "assets/devicon/algolia.svg?component";
import WordpressIcon from "assets/devicon/wordpress.svg?component";
import GitIcon from "assets/devicon/git.svg?component";
import GithubIcon from "assets/devicon/github.svg?component";
import FigmaIcon from "assets/devicon/figma.svg?component";
// Infrastructure Expertise
import DockerIcon from "assets/devicon/docker.svg?component";
import KubernetesIcon from "assets/devicon/kubernetes.svg?component";
// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
import SymfonyIcon from "assets/devicon/symfony.svg?component";
import LaravelIcon from "assets/devicon/laravel.svg?component";
import PhpIcon from "assets/devicon/php.svg?component";
import MongodbIcon from "assets/devicon/mongodb.svg?component";
// Frontend Expertise
import HtmlIcon from "assets/devicon/html.svg?component";
import CypressIcon from "assets/devicon/cypress.svg?component";
import CssIcon from "assets/devicon/css.svg?component";
import SassIcon from "assets/devicon/sass.svg?component";
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import TailwindCssIcon from "assets/devicon/tailwindcss.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";
import Briefcase from "assets/icons/briefcase.svg?component";

const author = {
    author_image: "/Gary Deshayes Développeur web FullStack dans l'Oise.webp",
    name: "Gary DESHAYES",
    position: "Développeur full stack Vue.js/Symfony",
    email: "deshayesgary@hotmail.fr",
    location: "Oise, France",
    github: "https://github.com/gary-deshayes",
    socials: {
        twitter: "MDRT83716131",
        stackoverflow: "#",
        youtube: "#",
        linkedin: "https://fr.linkedin.com/in/gary-deshayes-368279145",
        facebook: "#",
        github: "https://github.com/gary-deshayes",
    },
    expertises: {
        "Frontend": [
            {
                name: "HTML",
                icon: HtmlIcon,
                description: "HTML",
            },
            {
                name: "CSS",
                icon: CssIcon,
                description: "CSS",
            },
            {
                name: "SASS",
                icon: SassIcon,
                description: "SASS",
            },
            {
                name: "Cypress",
                icon: CypressIcon,
                description: "Cypress",
            },
            {
                name: "Bootstrap",
                icon: BootstrapIcon,
                description: "Bootstrap",
            },
            {
                name: "Tailwind",
                icon: TailwindCssIcon,
                description: "Tailwind",
            },
            {
                name: "Javascript",
                icon: JavascriptIcon,
                description: "Javascript",
            },
            {
                name: "VueJS",
                icon: VueIcon,
                description: "Vue.js",
            },
            {
                name: "Nuxt 3",
                icon: NuxtIcon,
                description: "Nuxt 3",
            }
        ],
        "Backend": [
            {
                name: "Laravel",
                icon: LaravelIcon,
                description: "Laravel",
            },
            {
                name: "Symfony",
                icon: SymfonyIcon,
                description: "Symfony",
            },
            {
                name: "NodeJs",
                icon: NodeIcon,
                description: "Node.js",
            },
            {
                name: "MongoDB",
                icon: MongodbIcon,
                description: "MongoDB",
            },
            {
                name: "PHP",
                icon: PhpIcon,
                description: "PHP",
            }
        ],
        "Infrastructure": [
            {
                name: "Docker",
                icon: DockerIcon,
                description: "Docker",
            },
            {
                name: "Kubernetes",
                icon: KubernetesIcon,
                description: "Kubernetes",
            },
        ],
        "Tools": [
            {
                name: "Strapi",
                icon: StrapiIcon,
                description: "Strapi",
            },
            {
                name: "Asana",
                icon: AsanaIcon,
                description: "Asana",
            },
            {
                name: "Phpstorm",
                icon: PhpstormIcon,
                description: "Phpstorm",
            },
            {
                name: "Algolia",
                icon: AlgoliaIcon,
                description: "Algolia",
            },
            {
                name: "Wordpress",
                icon: WordpressIcon,
                description: "Wordpress",
            },
            {
                name: "GIT",
                icon: GitIcon,
                description: "GIT",
            },
            {
                name: "Github",
                icon: GithubIcon,
                description: "Github",
            },
            {
                name: "Figma",
                icon: FigmaIcon,
                description: "Figma",
            },
        ]
    },
    timeline: [
        {
            icon: Briefcase,
            currently: true,
            title: "Développeur web fullstack chez Ubiq",
            subtitle: "Février 2023 - Maintenant",
            description: "Développement de la plateforme ubiq.fr, plateforme de mise en relation pour trouver vos bureaux.",
        },
        {
            icon: Briefcase,
            title: "Développeur web fullstack freelance",
            subtitle: "Juin 2022 - Avril 2023",
            description: "Je me suis lancé dans l'aventure du freelancing avec quelques clients à mon actif pendant ces 11 mois.",
        },
        {
            icon: Briefcase,
            title: "Développeur web fullstack chez GTP-Conseil",
            subtitle: "Septembre 2020 - Juin 2022",
            description: "Travaux en équipe sur un projet de migration php 5 vers environnements Symfony 5 PHP 7, migration des anciennes bases de donnés vers doctrine de façon propre via des commandes Symfony",
        },
        {
            icon: Briefcase,
            title: "Développeur web fullstack chez Maxinfoweb",
            subtitle: "Septembre 2019 - Septembre 2020",
            description: "Réalisations de plusieurs sites vitrine et intranet de A à Z avec Symfony 4 et Bootstrap.",
        },
        {
            icon: Academy,
            title: "Alternant développeur web chez Maxinfoweb",
            subtitle: "Novembre 2018 - Août 2019",
            description: "Développement sous Symfony 4 de sites vitrines et intranet.",
        },
        {
            icon: Academy,
            title: "Licence web et mobile",
            subtitle: "2018 - 2019",
            description: "Diplôme de licence en alternance, apprentissage de Symfony, Angular, et autres bonnes pratiques/technologies",
        },
        {
            icon: Academy,
            title: "Développeur logiciels en stage chez Noteo SAS",
            subtitle: "Janvier 2018 - Mars 2018",
            description: "Développement d'une application Android connecté à Microsoft Dynamics.",
        },
        {
            icon: Academy,
            title: "Stage développeur web chez Maxinfoweb",
            subtitle: "Juin 2017",
            description: "Maintenance de site PHP pure existant.",
        },
        {
            icon: Academy,
            title: "BTS SIO",
            subtitle: "2016 - 2018",
            description: "Premier pas dans le développement web, apprentissage du HTML, CSS, PHP, C#.",
        },
        {
            icon: Briefcase,
            title: "Travaux de vacances en usine de cartonnerie",
            subtitle: "2013 - 2016",
        },
        {
            icon: Academy,
            title: "BAC PRO SEN (Systèmes éléctroniques et numériques)",
            subtitle: "2013 - 2016",
        },
        {
            icon: Home,
            title: "Né le 30 août 1994",
            subtitle: "Senlis, France",
            description: "Je ne me souviens d'aucun travail productif pendant cette période. ",
        }
    ],
};

export default author;
