import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Icy(newyear)', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Landing page for my projects.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome, My name is',
  name: 'Icy',
  subtitle: 'I make things',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a poet and artist from wild and wonderful West Virginia.",
  paragraphTwo: 'I live with schizoaffective disorder and make weird things in the woods.',
  paragraphThree: 'I probably like your cat more than I like you.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'oracle.jpg',
    title: 'Personal Oracle Deck',
    info: 'A hand painted deck of cards for my personal cartomancy use.',
    info2: '-In Progress-',
    url: 'https://oracle.justicythings.com/',
    facing: 'right',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'poetry.jpg',
    title: 'Rexploring Poetry',
    info: 'An attempt to bring poetry more fully back into my life. The structure is still forming.',
    info2: '-Theoretical-',
    url: 'https://sky.justicythings.com/',
    facing: 'right',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tarot.jpg',
    title: 'Tarot Readings',
    info: 'Info/price page for tarot readings.',
    info2: '-Service-',
    url: 'https://icytarot.carrd.co/',
    facing: 'right',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wildcrafting.jpg',
    title: 'Twitter Thread Index',
    info: 'Links to twitter threads of exploration and tutorials in cooking, dyeing, and wildcrafting.',
    info2: '-Ongoing-',
    url: 'https://icynewyear.carrd.co/',
    facing: 'right',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mhhlogo.png',
    title: 'Moon Harbor Heroes',
    info: 'An actual play podcast using the Mask: A New Generation system.',
    info2: '-Ongoing-',
    url: 'https://www.icynewyear.com/mhh-info',
    facing: 'right',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: 'Contact Me',
  email: 'icynewyear@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/icynewyear',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/icymakesstuff/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/icynewyear',
    },
    {
      id: nanoid(),
      name: 'paypal',
      url: 'https://www.paypal.com/donate/?hosted_button_id=874VB886ERD4E',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
