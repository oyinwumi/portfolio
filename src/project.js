import Calculator from './assest/calculator.jpeg';
import PrimeTable from './assest/primeTable.jpeg'
import Citrone from './assest/citrone.jpeg'
import WebImage from './assest/site-image.jpeg'
import FetchUsers from './assest/fetch-users.jpeg';

const projectList = [
    {title:'Personal Website',  image: WebImage,
    details : 'This is my personal website which contains my resume and portfolio. i buit it with React many react feactures such as hooks, and alo typewriter effect ',
    link: 'https://portfolio-blue-seven-98.vercel.app/'
    },
    {title:'Simple Calulator', image: Calculator,
    details : 'I built this project as part of the javascript basic module from the Frontend Development Track at Stutern. It is a simple calculator for performing  basic arithmetic. It was built with HTML , CSS and JavaScript ',
    link: 'https://javascript-calculator-app-nu.vercel.app/'
    },
    {title:'Fetch User', image: FetchUsers,
    details : 'I built this project as part of the React basic module from the Frontend Development Track at Stutern. It is a simple design for search of fetching users. It was built with React js',
    link: 'https://async-react-wine.vercel.app/'
    },
    {title:'Prime Table', image: PrimeTable,
    details : 'I built this project as part of the React js basic module from the Frontend Development Track at Stutern. It is a dynamic mprime number multiplication table It was built with React js ',
    link: 'https://prime-number-table.vercel.app/'
    },
    {title:'Citrone', image: Citrone,
    details : 'I am leading a team of three frontend developer to build a website which is a learning experience platform for seamlessly access learning material at Stutern. It was built with Reactjs and Redux toolkit. The project is still on going. ',
    link: 'https://citrone-redesign-crater.vercel.app/'
    },
];

export default projectList;