import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Pytorch Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTL-Spengergasse",
      company_name: "Higher Informatics",
      icon: "https://th.bing.com/th/id/OIP.RFixRmi5dzFOx0zocV_eGQHaHH?pid=ImgDet&w=1580&h=1517&rs=1",
      iconBg: "#383E56",
      date: "September 2021 - present",
      points: [
        "Junior Member of the High Potential Program",
        "Grade Average of under 1.5",
        "Subjects: Programming, Webdevelopment, Computer Science",
      ],
    },
    {
      "title": "Sommer Intern",
      "company_name": "Pro Saldo.Net, Wien",
      "icon": "https://www.prosaldo.net/wp-content/uploads/2022/09/logoprosaldojuli22web92pxtest.png",
      "iconBg": "#383E56",
      "date": "August 2022",
      "points": [
        "Microsoft-SQL Database administration and further development.",
        "C# programming, including writing mappers, troubleshooting, and implementing enums.",
        "Gained a deep understanding of the entire project and collaborated with various programming languages."
      ]
    },
    {
      "title": "SPŠE(HTL)-Hlavová",
      "company_name": "Bratislava, IT & Netzwerktechnik",
      "icon": "https://spsehalova.sk/wp-content/uploads/2021/09/logo-kruh.png",
      "iconBg": "#383E56",
      "date": "2022 - present",
      "points": [
        "Proficient in hardware computer construction, programming in C++, C#, and Java, open-source programming, data security, network concepts, and integrated ICT solutions.",
        "Skilled in advanced PC and communication network management, diagnosis, and troubleshooting.",
        "Extensive knowledge in network technologies acquired through a comprehensive education program."
      ]
    }, 
    {
      "title": "Gymnasium Neusiedl am See",
      "company_name": "Österreich",
      "icon": "https://th.bing.com/th/id/OIP.VWPj5yhYZSp5Tupmzu6WrAHaHa?pid=ImgDet&rs=1",
      "iconBg": "#383E56",
      "date": "2017 - 2021",
      "points": [
        "Programming robots using C++",
        "Developing a foundational understanding of programming",
        "For more information, visit [Gymnasium Neusiedl](https://www.gymnasium-neusiedl.at/)"
    
    
      ]
    }
    ,{
      "title": "Volksschule Weiden am See",
      "company_name": "Österreich",
      "icon": meta,
      "iconBg": "#383E56",
      "date": "2013 - 2017",
      "points": []
    },
    {
      "title": "Volksschule Bratislava",
      "company_name": "Slowakei",
      "icon": tesla,
      "iconBg": "#383E56",
      "date": "2013 - 2021",
      "points": []
    },
   
   
    
// ,  
//     {
//       title: "Web Developer",
//       company_name: "Shopify",
//       icon: shopify,
//       iconBg: "#383E56",
//       date: "Jan 2022 - Jan 2023",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Full stack Developer",
//       company_name: "Meta",
//       icon: meta,
//       iconBg: "#E6DEDD",
//       date: "Jan 2023 - Present",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      "name": "Feuerwehr-App",
      "description": "Web-based platform created to optimize drink distribution for Feuerwehr Weiden am See. It aims to reduce delivery times and ensure customers receive their orders promptly. The system records all orders taken by a waiter, and while customers make payments, the orders are already executed at the bar and delivered, often before the waiter leaves. Additionally, the waiter and the bar can communicate with each other using the built-in chat feature. The website was programmed using JavaScript, and TingoDB was utilized as the database.",
      "tags": [
        {
          "name": "javascript",
          "color": "blue-text-gradient"
        },
        {
          "name": "tingodb",
          "color": "green-text-gradient"
        }
      ],
      "image": "linkToImg",
      "source_code_link": "https://github.com/LordMojmir/feuerwehr-Kirtag-App"
    }
    ,

    {
      "name": "GenLink Social Network",
      "description": "A user-friendly website fostering social connections, supporting elderly individuals by providing a safe platform for chat, video calls, and community. It prioritizes ease of use, implements safety measures, and aims to reduce loneliness through companionship and support. The project emphasizes accessibility, hosting, advertising, and ethical considerations like data security and content moderation.",
      "tags": [
      {
      "name": "firebase",
      "color": "blue-text-gradient"
      },
      {
      "name": "javascript",
      "color": "green-text-gradient"
      },
      {
      "name": "azure",
      "color": "pink-text-gradient"
      }
      ],
      "image": "genlink",
      "source_code_link": "https://github.com/LordMojmir/GenLink-FireBase"
      },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };