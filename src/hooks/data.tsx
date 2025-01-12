import reactBg from '../assets/bg/react-bg.jpeg';
import fullStack from '../assets/bg/fullstack-bg.jpeg';
import fullStack2 from '../assets/bg/fullstack-bg-2.jpeg';
import fullStack3 from '../assets/bg/fullstack-bg-3.jpeg';
import wordpress from '../assets/bg/wordpress-bg.jpeg';
import frontend from '../assets/servicesBg/frontend-development.jpeg';
import backend from '../assets/servicesBg/backend-development.jpeg';
import fullstackS from '../assets/servicesBg/fullstack-development.jpeg';
import testing from '../assets/servicesBg/testing.jpeg';
import tools from '../assets/servicesBg/tools.jpeg';
import cms from '../assets/servicesBg/e-commerce.jpeg';
import methodologies from '../assets/servicesBg/methodoligy.jpeg';
import languages from '../assets/servicesBg/languages.jpeg';
import consulting from '../assets/servicesBg/problem-solving.jpeg';
import specialProjects from '../assets/servicesBg/special.jpeg';

export const skills = {
  name: 'Kolibabchuk Ruslan',
  title: 'Senior Frontend Developer',
  services: [
    {
      category: 'Frontend Development',
      description:
        'Development of modern, scalable, and responsive user interfaces using the latest frontend technologies. Expertise in creating reusable components, implementing design systems, and ensuring high performance and accessibility.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Vue.js',
        'AngularJS 1.x',
        'Redux',
        'React Query',
        'React Testing Library',
        'Tailwind',
        'Sass',
        'Less',
        'Stylus',
        'Responsive Design',
        'Mobile-First Development',
        'GraphQL',
      ],
      bg: frontend,
    },
    {
      category: 'Backend Development',
      description:
        'Building robust and secure backend solutions, including RESTful APIs and server-side applications, with a strong focus on performance and scalability.',
      skills: ['PHP', 'Laravel', 'CodeIgniter', 'WordPress Development', 'Express.js'],
      bg: backend,
    },
    {
      category: 'Full Stack Development',
      description:
        'Combining frontend and backend expertise to deliver complete end-to-end solutions. Includes creating dynamic web applications, CMS-based solutions, and custom features tailored to client needs.',
      skills: [
        'Building APIs',
        'Creating Full-Stack Applications',
        'Custom Plugin Development',
        'WordPress Themes',
      ],
      bg: fullstackS,
    },
    {
      category: 'Testing and Quality Assurance',
      description:
        'Implementing automated and manual testing strategies to ensure software reliability and robustness. Writing and maintaining comprehensive tests for both UI and backend components.',
      skills: ['Cypress', 'Jest', 'Enzyme', 'Automated Testing'],
      bg: testing,
    },
    {
      category: 'Tools and Workflow',
      description:
        'Streamlining development processes with modern tools and practices, ensuring efficient collaboration and continuous delivery in both small and large teams.',
      skills: ['npm', 'Git', 'Gulp', 'Jira'],
      bg: tools,
    },
    {
      category: 'CMS and E-commerce',
      description:
        'Developing and customizing content management systems and e-commerce platforms to meet specific client requirements, ensuring seamless user experiences and easy manageability.',
      skills: ['WordPress', 'PrestaShop', 'Custom CMS Development'],
      bg: cms,
    },
    {
      category: 'Development Methodologies',
      description:
        'Adopting proven methodologies to ensure maintainable, scalable, and efficient code. Expertise in building modular components, optimizing for performance, and designing clear project architectures.',
      skills: [
        'Reusable UI Component Development',
        'Bug Diagnosis and Resolution',
        'Project Routing and Structure Design',
      ],
      bg: methodologies,
    },
    {
      category: 'Languages and Frameworks',
      description:
        'Proficiency in a variety of languages and frameworks, enabling flexibility in development and the ability to work across diverse project requirements.',
      skills: ['BEM Methodology', 'ES6+', 'jQuery', 'Bootstrap', 'Bulma'],
      bg: languages,
    },
    {
      category: 'Consulting and Problem Solving',
      description:
        'Providing expert advice on technical challenges, system architecture, and best practices. Skilled at identifying bottlenecks, optimizing code, and delivering scalable solutions.',
      skills: [
        'Technical Consulting for Frontend and Full-Stack Development',
        'Debugging and Optimization',
        'Project Analysis and Architecture Design',
      ],
      bg: consulting,
    },
    {
      category: 'Special Projects',
      description:
        'Handling unique and complex projects requiring customized solutions, innovative problem-solving, and close attention to detail. Delivering tailored features and ensuring client satisfaction.',
      skills: [
        'Frontend Application for Leave Management',
        'Advanced Caching Mechanisms for Website Translation',
        'Custom UI Component Libraries',
      ],
      bg: specialProjects,
    },
  ],
  additional: {
    education: "Master's Degree in Information Technology Design",
    languages: ['English (B2)'],
    experience: '12+ years in web development with a focus on frontend technologies',
  },
};

export const experiences = [
  {
    position: 'Senior Frontend Developer',
    company: 'Svitla Systems, Inc.',
    date: 'oct 2022 - ongoing',
    description: [
      'Since October 2022, I have been working with Svitla Systems, Inc., a leading software development company known for delivering top-quality solutions to clients. In my current role, I have been actively involved in creating a new website using the React JS framework.',
      "Working with Svitla Systems has provided me the opportunity to leverage my expertise in React to build a modern, high-performance website that offers an exceptional user experience. I have been collaborating closely with the team to ensure that the site's frontend architecture is robust, scalable, and easy to maintain.",
    ],
    bg: reactBg,
  },
  {
    position: 'Full Stack Engineer',
    company: 'Hero Teams',
    date: 'sep 2018 - oct 2022',
    description: [
      'During my time here, I have primarily focused on harnessing the power of React to create visually appealing and highly functional frontend applications.',
      'In addition to my expertise in React, I have also gained proficiency in writing autotests using the Cypress framework. This experience has allowed me to ensure the reliability and stability of the applications I develop, providing users with seamless and intuitive experiences.',
      'My tenure at the IT Company has provided me with the opportunity to work on a variety of projects, constantly expanding my skill set and delivering top-notch solutions to clients.',
    ],
    bg: fullStack,
  },
  {
    position: 'Full-stack Developer',
    company: 'Loud & Clear',
    date: 'dec 2013 - sep 2018',
    description: [
      'From December 2013 to September 2018, I held the position of a Full-stack Developer at Loud & Clear. During my time there, I was responsible for a wide range of tasks that showcased my versatility and expertise in web development.',
      'One of my primary responsibilities was creating custom WordPress themes and plugins, which allowed clients to have a unique and tailored digital presence. My work in WordPress helped businesses establish their brand identity and create a strong online foundation.',
      'Another area of focus during my tenure at Loud & Clear was backend API development using the Laravel framework. My proficiency in Laravel allowed me to build robust and secure backend systems, streamlining data management and ensuring seamless integration with frontend interfaces.',
      'Overall, my time at Loud & Clear provided me with valuable experience and a diverse skill set that allowed me to excel as a Full-stack Developer, delivering top-notch solutions across various aspects of web development.',
    ],
    bg: fullStack2,
  },
  {
    position: 'Full-stack Developer',
    company: 'PixelTeh',
    date: 'jan 2013 - dec 2013',
    description: [
      'From February 2013 to December 2013, I worked as a Full-stack Developer at PixelTeh, an innovative web development agency. My tenure at the company provided me with a solid foundation in various aspects of web development, allowing me to hone my skills and expertise.',
      'One of my primary responsibilities at PixelTeh was creating custom WordPress themes and plugins. This involved working closely with clients to understand their unique requirements and delivering tailor-made solutions that helped establish their online presence and brand identity.',
      'In addition to my work with WordPress, I also gained valuable experience in building websites from scratch using the CodeIgniter framework. My proficiency in Codeigniter allowed me to create robust and scalable web applications that catered to the specific needs of each project.',
      'My time at PixelTeh served as a crucial stepping stone in my career as a Full-stack Developer, equipping me with the diverse skill set necessary to excel in the ever-evolving world of web development.',
    ],
    bg: fullStack3,
  },
  {
    position: 'Wordpress - developer',
    company: 'BestWebSoft',
    date: 'june 2011 - jan 2013',
    description: [
      'From June 2011 to February 2013, I worked as a WordPress Developer at BestWebSoft. This early stage of my career allowed me to develop a strong foundation in WordPress development, which has since become one of my core areas of expertise.',
      'During my time at BestWebSoft, my primary responsibilities included creating custom WordPress themes and plugins. This involved working closely with clients to understand their specific needs, preferences, and goals. With a keen eye for detail and a deep understanding of WordPress functionality, I was able to design and develop unique solutions that helped businesses establish a strong online presence and effectively communicate their brand values.',
      'My experience at BestWebSoft not only allowed me to refine my skills in WordPress development but also instilled in me a dedication to delivering high-quality and personalized web solutions that cater to the unique requirements of each client. This commitment to excellence has continued to shape my approach to web development throughout my career.',
    ],
    bg: wordpress,
  },
];
