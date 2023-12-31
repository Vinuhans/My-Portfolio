import yourImage from './img/vinulProfile.jpg';
import safeBuy from './img/SafeBuy.png'
import airLines from './img/Airlines.png'

const logotext = "VINUL";
const meta = {
    title: "Vinul Fernando",
    description: "Hi I'm Vinul Fernando_ I'm a Full stack devloper",
};

const introdata = {
    title: "I’m Vinul Fernando",
    animated: {
        first: "I love coding",
    },
    description: "Hello there! I'm Vinul Fernando, and I'm delighted to welcome you to my digital haven. As a dedicated software engineer and full-stack developer, I am passionate about bringing creativity and innovation to life through my technical expertise. Feel free to explore my portfolio and witness the fusion of code and creativity.",
    your_img_url: yourImage,
};

const dataabout = {
    title: "About Me :)",
    aboutme: "As a fourth-year University of Moratuwa student studying computer science engineering, my motivation comes from a desire to learn new things and take on difficulties that I can overcome in addition to ambition and hard effort. My will to succeed in practical applications is fueled by my aptitude for leadership and my ability to quickly adapt to new situations and technologies. Also, my strong academic foundation is complemented by CIMA qualifications, providing me with a unique blend of technical expertise and business acumen. I'm excited to hone my abilities and broaden my knowledge, while also putting my academic background into practice and making significant contributions.",
};

const workExp = {
    title: "Working Experience",
    description: "Intern Software Engineer (1/2023 - 6/2023)- LSEG Technology"
}

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "Java",
        value: 80,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Express",
        value: 80,
    },
    {
        name: "PHP",
        value: 60,
    },
    {
        name: "MySQL",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 60,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://cdn.allaboutcookies.org/images/2022/04/29/woman-on-phone-1200x1200.jpg",
        description: "Developing a modular application layer infrastructure-less framework to enable ad hoc networking in Android smartphones with Bluetooth, Bluetooth Low Energy, and WiFi Direct as communication methods. Working on progess",
        link: "https://github.com/MANetDroid/meshify2/tree/master",
    },
    {
        img: safeBuy,
        description: "An E-Commerce Platform to aid the customers during the covid pandemic situation",
        link: "https://github.com/HasithaIndrajith/SafeBuy-new",
    },
    {
        img: airLines,
        description: "An Airline Reservation System",
        link: "https://github.com/kasunpavithra/AirlineReservationSystem",
    },
    {
        img: "https://chartexpo.com/blog/wp-content/uploads/2022/09/types-of-charts-and-their-uses.jpg",
        description: "This is a data visualization application with the basic chart types and three advanced network charts",
        link: "https://github.com/shangopi/BetterChartJS",
    },
    {
        img: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
        description: "ML project - Label prediction usin classifiers",
        link: "https://github.com/Vinuhans/ML-project-Lab1",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "vinul.19@cse.mrt.ac.lk",
    YOUR_FONE: "+94714293101",
    description: "Please feel free to contact me 8am - 8pm ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    // YOUR_SERVICE_ID: "service_id",
    // YOUR_TEMPLATE_ID: "template_id",
    // YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Vinuhans",
    linkedin: "https://www.linkedin.com/in/vinul-fernando-1239761a0/",
};
export {
    meta,
    dataabout,
    workExp,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};