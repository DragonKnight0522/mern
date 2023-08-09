import {
  blockchain,
  frontend,
  backend,
  ethereum,
  ethers,
  solidity,
  hardhat,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  mySQL,
  mongoDB,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experiences',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongoDB,
  },
  {
    name: 'MySQL',
    icon: mySQL,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'Docker',
  //   icon: docker,
  // },
  // {
  //   name: 'Ruby on Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'Blockchain',
  //   icon: blockchain,
  // },
  // {
  //   name: 'Ethereum',
  //   icon: ethereum,
  // },
  // {
  //   name: 'Solidity',
  //   icon: solidity,
  // },
  {
    name: 'hardhat',
    icon: hardhat,
  },
  {
    name: 'Ethers JS',
    icon: ethers,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Collabera',
    icon: coverhunt,
    iconBg: '#333333',
    date: '09 / 21 - 07 / 2023',
  },
  {
    title: 'Back-End Developer',
    company_name: 'KickFin',
    icon: microverse,
    iconBg: '#333333',
    date: '08 / 2019 - 08 / 2021',
  },
  {
    title: 'Front End Developer',
    company_name: 'KickFin',
    icon: kelhel,
    iconBg: '#333333',
    date: '07 / 2017 - 09 / 2018',
  },
  {
    title: 'Java Developer',
    company_name: 'Germany Trade & Invest',
    icon: dcc,
    iconBg: '#333333',
    date: '07 / 2015 - 06 / 2017',
  },
  {
    title: 'Software Test Engineer (Internship)',
    company_name: 'Germany Trade & Invest',
    icon: dcc,
    iconBg: '#333333',
    date: '07 / 2014 - 06 / 2015',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'AT&T',
    description: 'AT&T is leading the charge with our nationwide fast, reliable and secure 5G coupled with our growing, multi-gig fiber internet service.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'green-text-gradient',
      }
    ],
    image: komikult,
    repo: 'https://github.com/att/rcloud',
    demo: 'https://www.att.com/',
  },
  {
    id: 'project-2',
    name: 'ticketswap',
    description:
      'TicketSwap is a safe, convenient and fair place to buy and sell e-tickets for concerts, festivals, sports events, theatre and days out. Fraud is prevented by strict checks and collaborations with organisations and partners.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/TicketSwap/solar',
    demo: 'https://www.ticketswap.com/',
  },
  {
    id: 'project-3',
    name: 'RGC',
    description: 'Robert Geans Corporation has been family owned and operated since 1959. You don’t last this long without doing something right, and we’ve mastered what sets us apart. ',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'React.js',
        color: 'green-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/robertgeans/rgc',
    demo: 'https://www.robertgeanscorp.com/',
  },
  {
    id: 'project-4',
    name: 'Healthcare',
    description: `The Swedish health system performs well in general, life expectancy in the country is high and the general health among the population is good. `,
    tags: [
      {
        name: 'ethereum',
        color: 'blue-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'green-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/aidotse/decaihealth',
    demo: 'https://sweden.se/life/society/healthcare-in-sweden',
  },
  {
    id: 'project-5',
    name: 'Recurring Payments',
    description:
      'Recurring payments on the blockchain have been a topic of discussion for some time. First introduced in EIP-1337 in 2018, the proposal never really caught on. My approach to recurring payments on Ethereum takes a simpler approach than EIP-1337 did, which may help it have a larger impact on the community.',
    tags: [
      {
        name: 'ethereum',
        color: 'blue-text-gradient',
      },
      {
        name: 'Blockchain',
        color: 'green-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/Jon-Becker/ethereum-recurring-payments',
    demo: 'https://jbecker.dev/research/ethereum-recurring-payments/',
  },
];

export { services, technologies, experiences, projects };
