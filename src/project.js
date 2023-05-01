import Calculator from './assest/calculator.jpeg';
import PrimeTable from './assest/primeTable.jpeg'
import Citrone from './assest/citrone.jpeg'
import WebImage from './assest/site-image.jpeg'
import FetchUsers from './assest/fetch-users.jpeg';

const projectList = [
    {title:'Personal Website',  image: WebImage, id: '1', backgroundColor: '#CEFFE2', borderRadius: '#CEFFE2',
    details : 'This is my personal website which contains my resume and portfolio. i buit it with React many react feactures such as hooks, and alo typewriter effect ',
    link: 'https://portfolio-blue-seven-98.vercel.app/'
    },
    {title:'Finsweet', image: Citrone, id:'6', backgroundColor: '#EFF1F7', borderRadius: '#EFF1F7',
    details: 'I built this web page while learning HTML and CSS.The webpage different route has different. It was built with HTML and vanilla CSS',
   link: 'https://fin-sweet-rouge.vercel.app/contact.html'
   },
    {title:'Simple Calulator', image: Calculator, id: '2',  backgroundColor: '#FFFFB8', borderRadius: '#FFFFB8',
    details : ' This project was part of the javascript basic module. I built this project for performing basic arithemetic. It was built with HTML , CSS and JavaScript ',
    link: 'https://javascript-calculator-app-nu.vercel.app/'
    },
    {title:'Fetch User', image: FetchUsers, id:'3',  backgroundColor: '#E6F0FF', borderRadius: '#E6F0FF',
    details : 'I built this project as part of the React basic module for the Frontend Development Track at Stutern. It is a simple design for search of fetching users. It was built with React js',
    link: 'https://async-react-wine.vercel.app/'
    },
    {title:'Prime Table', image: PrimeTable, id:'4',  backgroundColor: '#FFD6FF', borderRadius: '#FFD6FF',
    details : 'I built this project as part of the React js basic module. It is a dynamic prime number multiplication table It was built with React js ',
    link: 'https://prime-number-table.vercel.app/'
    },
    {title:'Citrone', image: Citrone, id:'5',  backgroundColor: '#FFDBCC', borderRadius: '#FFDBCC',
    details : 'I led a team of three frontend developer to build a website,a learning experience platform for seamlessly access learning material. It was built with Reactjs and Redux toolkit.  ',
    link: 'https://citrone-redesign-crater.vercel.app/'
    },
  
];

export default projectList;