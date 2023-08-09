import {
  blockchain,
  frontend,
  backend,
  ethereum,
  ethers,
  solidity,
  truffle,
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
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  // {
  //   name: 'MongoDB',
  //   icon: mongoDB,
  // },
  // {
  //   name: 'MySQL',
  //   icon: mySQL,
  // },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Blockchain',
    icon: blockchain,
  },
  {
    name: 'Ethereum',
    icon: ethereum,
  },
  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Truffle',
    icon: truffle,
  },
  {
    name: 'Ethers JS',
    icon: ethers,
  },
];

const experiences = [
  {
    title: 'Blockchain Developer',
    company_name: 'Collabera',
    icon: coverhunt,
    iconBg: '#333333',
    date: '09 / 21 - 07 / 2023',
  },
  {
    title: 'Ethereum Developer',
    company_name: 'Centrys, Inc',
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
    name: 'DefiPrime',
    description: 'DeFiprime.com is the digital media and analytical services provider for the DeFi community. Its mandate is to inform, educate, and connect the community as the definitive source of news dedicated to the decentralized finance space.',
    tags: [
      {
        name: 'DeFi',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ethereum',
        color: 'green-text-gradient',
      }
    ],
    image: komikult,
    repo: 'https://github.com/defiprime/defiprime',
    demo: 'https://defiprime.com/',
  },
  {
    id: 'project-2',
    name: 'Stereum 2.0',
    description:
      'Stereum manages the process of setting up & maintaining an Ethereum node for you with a focus on self sovereignty, privacy and flexibility.',
    tags: [
      {
        name: 'Ethereum',
        color: 'blue-text-gradient',
      },
      {
        name: 'Stacking',
        color: 'green-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/stereum-dev/ethereum-node',
    demo: 'https://stereum.net/',
  },
  {
    id: 'project-3',
    name: 'NFT Suits',
    description: 'This is a Nft game',
    tags: [
      {
        name: 'Ethereum',
        color: 'blue-text-gradient',
      },
      {
        name: 'NFT',
        color: 'green-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/NFTSuits/NFT-Marketplace-DApp',
    demo: 'http://ww25.nftsuits.com/',
  },
  {
    id: 'project-4',
    name: 'BitFact',
    description: `Prove data with this complete toolkit. BitFact fingerprints information and then etches it on the Ethereum Blockchain.`,
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
    repo: 'https://github.com/zachalam/BitFact',
    demo: 'https://docs.bitfact.io/#/',
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
