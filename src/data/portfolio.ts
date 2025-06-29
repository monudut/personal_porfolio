import { Project, Experience, Skill, Education } from '../types';

export const personalInfo = {
  name: "Kaushik Dutta",
  title: "Front End Developer",
  subtitle: "Passionate about creating innovative web solutions and scalable applications",
  bio: "Dynamic Software Engineer with 3+ years of experience crafting responsive and scalable web applications. Passionate about innovation, clean code, and continuous learning.",
  email: "kaushikdev1995@gmail.com",
  phone: "+91 7273835441",
  location: "New Delhi, India",
  avatar: "/assets/images/Kaushik.jpg",
  resume: "/assets/images/CV_Kaushik_Dutta_2025.pdf"
};

export const socialLinks = {
  github: "https://github.com/monudut",
  linkedin: "https://linkedin.com/in/kaushik-dutta-4789381b9",
  email: "mailto:kaushikdev1995@gmail.com"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Job Platform",
    description: "A comprehensive e-job solution built with React and Node.js, featuring user authentication, payment integration, Manges Jobs, Manage Candidates, and Admin and Recruiter dashboard analytics.",
    images: [
      '/assets/images/job-1.png',
      '/assets/images/job-2.png',
      '/assets/images/job-3.png'
    ],
    technologies: ["React", "Node.js", "MySql", "Express.js", "Talwind CSS", "MUI"],
    githubUrl: "https://github.com/kaushikdutta/ecommerce-platform",
    // liveUrl: "https://ecommerce-demo.kaushikdutta.dev",
    featured: true
  },
  {
    id: "3",
    title: "The Mood Space",
    description: "Designed responsive, mobile-friendly UI components with seamless cross-device experience. Managed state using Redux/Context API.",
    technologies: ["React", "Next.js", "Talwind CSS", "MUI"],
    images: [],
    // githubUrl: "https://github.com/kaushikdutta/weather-dashboard",
    // liveUrl: "https://weather.kaushikdutta.dev",
    featured: false
  },
  {
    id: "4",
    title: "Dealer Management System",
    description: "Led 100% development of dealer management system with dynamic dashboards and role-based modules.",
    technologies: ["Angular", "TypeScript", "Angular Material", "Highcharts", "TinyMCE"],
    images: [],
    // githubUrl: "https://github.com/kaushikdutta/social-analytics",
    featured: false
  },
  {
    id: "5",
    title: "Insurance & Claim Management",
    description: "Built accessible UI components with complete admin/user role-based modules for enhanced system control.",
    technologies: ["Angular", "TypeScript", "Angular Material", "Highcharts"],
    images: [],
    // githubUrl: "https://github.com/kaushikdutta/lms-platform",
    // liveUrl: "https://lms.kaushikdutta.dev",
    featured: false
  },
   {
    id: "6",
    title: "Greenlam CSRP(Customer Service Platform)",
    description: "Contributed to 30% of core functionalities with dashboards for tracking customer concerns.",
    technologies: ["Angular", "TypeScript", "Angular Material", "Highcharts"],
    images: [],
    // githubUrl: "https://github.com/kaushikdutta/lms-platform",
    // liveUrl: "https://lms.kaushikdutta.dev",
    featured: false
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Techfour Engineering Solutions",
    position: "Software Developer Engineer - I",
    duration: "May 2022 - Present",
    description: [
      "Developed dynamic, reusable modules to streamline project setup, reducing setup time by 30%",
      "Mentored junior developers and established coding standards and best practices",
      "Improved application performance by 40% through code optimization and caching strategies",
      "Collaborated with cross-functional teams on product roadmap and technical decisions",
      "Integrated lazy loading of images and components to improve Lighthouse performance scores and reduce page load times"
    ],
    technologies: ['Angular', 'React', 'NextJS', 'Javascript', 'TypeScript', 'Redux', 'Node.js' ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "Angular", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "TypseScript", level: 92, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
  { name: "HTML5/CSS3", level: 98, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 92, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "SQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "REST APIs", level: 95, category: "backend" },
  
  // Tools & DevOps
  { name: "Git", level: 95, category: "tools" },
  { name: "Gitlab", level: 82, category: "tools" },
  { name: "MySQL", level: 88, category: "tools" },
  { name: "MongoDB", level: 78, category: "tools" },
  { name: "Jira", level: 85, category: "tools" },
  
  // Design
  { name: "Angular Material", level: 85, category: "libraries" },
  { name: "Bootstrap", level: 80, category: "libraries" },
  { name: "MUI", level: 78, category: "libraries" },
  { name: "Talwind", level: 92, category: "libraries" }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Calcutta",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2015 - 2019",
    description: "Graduated with First Class Honours. Specialized in Software Engineering, Data Structures, and Web Technologies. Active member of the Computer Science Society."
  },
  {
    id: "2",
    institution: "FreeCodeCamp",
    degree: "Full Stack Web Development Certification",
    duration: "2018",
    description: "Completed comprehensive curriculum covering modern web development technologies including React, Node.js, and database management."
  },
  {
    id: "3",
    institution: "Coursera - Google",
    degree: "Google Cloud Platform Certification",
    duration: "2021",
    description: "Certified in Google Cloud Platform fundamentals, including compute, storage, networking, and deployment strategies."
  }
];