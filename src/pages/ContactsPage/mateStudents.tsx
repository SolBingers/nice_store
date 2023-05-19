import BogdanMaliuta from '../../images/photos/photo_2023-04-25_16-00-32.jpg';
import dog from '../../images/smileFace/photo_2023-05-13_14-52-58 (2).jpg';
import Olecsiy from '../../images/Olecsiy.jpeg';
import Anastasiya from '../../images/Anastasiya.jpeg';
import Kateryna from '../../images/Kateryna.jpeg';
import Oleksandr from '../../images/Oleksandr.jpeg';
import Mykyta from '../../images/Mykyta.jpeg';
import Maks from '../../images/Maks.jpeg';
import memNastya from '../../images/memNastya.jpeg';
import memMaks from '../../images/memMaks.jpeg';
import memBogdan from '../../images/memBogdan.jpeg';
import memOlecsiy from '../../images/memOlecsiy.jpeg';

export const mateStudents = [
  {
    photo: `${Anastasiya}`,
    memePhoto: `${memNastya}`,
    fullName: 'Anastasia Kuznetsova',
    Tl: true,
    linkedInLink: 'https://www.linkedin.com/in/anastasiia-kuznetsova-fullstack/',
    gitHubLink: 'https://github.com/kuznetsova-anastasiia',
    cvLink: '',
    responsibilities: [
      'Created the design for the project',
      'Managing all work processes',
      'Setup both Front-end and Back-end',
      'Created RESTfull API server',
      'Implemented authentication',
      'Code review',
      'Fixing bugs'
    ],
  },
  {
    photo: `${BogdanMaliuta}`,
    memePhoto: `${memBogdan}`,
    fullName: 'Bogdan Maliuta',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/bogdan-maliuta-217048274/',
    gitHubLink: 'https://github.com/Lilu580',
    cvLink: 'https://drive.google.com/file/d/1V9Ih8d6TOZYksXOC7-9MMWy-yHDm5IEO/view?usp=share_link',
    responsibilities: [
      'Created cart',
      'Created List component',
      'Added search on website',
      'Added contacts page with meme mode',
      'Implemented footer & loader',
      'Implemented sale banner',
      'Code review & Fixing bugs',
    ],
  },
  {
    photo: `${Olecsiy}`,
    memePhoto: `${memOlecsiy}`,
    fullName: 'Olecsiy Gavrilyuk',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/olecsiy-havrilyuk-a41b18273/',
    gitHubLink: 'https://github.com/olecsiy-gavrilyuk',
    cvLink: '',
    responsibilities: [
      'Categories list',
      'Burger-menu',
      'Favorites page layout',
      'Add & delete favorites functionality',
      'Save and get data in localstorage',
      'Searching by name',
      'Fixing bugs'
    ],
  },
  {
    photo: `${Maks}`,
    memePhoto: `${memMaks}`,
    fullName: 'Maksym Maliuk',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/maksym-maliuk-451b18273/',
    gitHubLink: 'https://github.com/MaksymMaliuk',
    cvLink: '',
    responsibilities: [
      'Data fetching',
      'Product Card',
      'Notifications',
      'Home & Checkout pages',
      'Code review & Fixing bugs',
      'Created Contacts Page'
    ],
  },
  {
    photo: `${Mykyta}`,
    memePhoto: `${dog}`,
    fullName: 'Mykyta Stambul',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/mykyta-stambul-4b317b274/',
    gitHubLink: 'https://github.com/NikitaStambul',
    cvLink: '',
    responsibilities: [
      'Routing',
      'Dark / Light themes',
      'Category & Orders Page',
      'Fix Visual/Layout bugs',
      'Pagination & Inputs & Selectors & ScrollToTop Button',
    ],
  },
  {
    photo: `${Oleksandr}`,
    memePhoto: `${dog}`,
    fullName: 'Oleksandr Kononenko',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/oleksandr-kononenko-a04839273/',
    gitHubLink: 'https://github.com/Ambulence',
    cvLink: '',
    responsibilities: [
      'Creating banner component',
      'Creating slider for banner',
      'Fetch data for  product items component',
      'Creating checkout form',
    ],
  },
  {
    photo: `${Kateryna}`,
    memePhoto: `${dog}`,
    fullName: 'Babina Kateryna',
    Tl: false,
    linkedInLink: 'https://www.linkedin.com/in/katerina-babina-947659273/',
    gitHubLink: 'https://github.com/kateryna-babina',
    cvLink: '',
    responsibilities: [
      'Created button component',
      'Created slider for products items',
      'Created gallery for item page',
      'Created Not found page',
      'Created breadcrumbs',
      'Fixed bugs'
    ],
  }
];