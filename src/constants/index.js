import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/portfolioimg.jpg";
import project6 from '../assets/projects/trading.jpg';

export const HERO_CONTENT = `Skilled Front-End Developer with 3+ years of experience in designing and building scalable, responsive, and high-performance web applications. Proficient in React.js, Next.js, TypeScript, Redux, and modern UI libraries. Strong expertise in component-based architecture, responsive design, accessibility, and performance optimization. Proven track record in delivering enterprise applications, trading dashboards, and internal tools with clean, maintainable code.`;

export const ABOUT_TEXT = `I have 3 years of experience in building responsive, scalable, and high-performance web applications
using React.js, Next.js, TypeScript, and modern UI libraries, I bring a strong blend of technical expertise,
design thinking, and fast-paced execution.
Currently, I serve as a Senior Front-End Developer at Mindorigin Technologies, where I’ve led the
development of a full-fledged trading platform with modules like strategy builders, fund flows, and
real-time dashboards — resulting in a 40% increase in user engagement. In addition to building
client-facing tools, I’ve contributed to internal admin systems and notification workflows that improved
operational efficiency and compliance.
What sets me apart is my ability to deliver high-quality work under intense timelines. I’ve frequently
taken ownership of features that would typically span 8–10 days and successfully delivered them within
a single day — handling pressure with professionalism, putting in the extra hours when needed, and
maintaining a strong focus on performance and code quality.
Previously at MResult Technologies, I contributed to enterprise web applications and led UI revamps that
significantly boosted user retention. Throughout my career, I’ve remained committed to building
accessible, component-driven architecture, collaborating with cross-functional teams in Agile
environments, and delivering intuitive digital experiences that solve real user problems.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Senior Frontend Developer",
    company: "Mindorigin Technologies Private Limited",
    description: `Developed a full-fledged trading platform in Next.js with modules like Login/Auth, Funds, Orders, Positions, and P&L Reporting; implemented charts, custom strategy builder, fund flows, dark mode, and performance enhancements — led to 40% higher user engagement and 30% performance gain.
Contributed to two distinct web platforms for SMS and Email notifications — E-Notifiers (client-side) and Admin (internal panel) — by implementing approval workflows, integrating the Unlayer editor, and enabling telecom validation to ensure secure and compliant communication.
Contributed to the Fund Manager (Client, Trading, Charts) and Back Office platforms for managing user logs, client data, plans, and transactions — reducing manual operations and enabling real-time insights.
Delivered the P R Sundar Strategy Builder — a secure trading strategy platform — with end-to-end functionality equivalent to 10 days of work accomplished in a single day, demonstrating exceptional commitment, rapid execution, and deep technical skill under pressure.
Performed unit testing, collaborated with UI/UX designers and backend engineers to create scalable, testable codebases, and implemented reusable components for optimized rendering.
`,
    technologies: [ "React.js", "Next.js", "TypeScript", "Redux", "SASS", "HTML", "CSS", "JavaScript", "Material-UI" ],
  },
  {
    year: "Sep 2022 - July 2024",
    role: "Software Development Engineer",
    company: "MResult Technologies Pvt Ltd",
    description: `Developed enterprise-grade web apps, improving UX and retention; contributed to 25% boost in user engagement through UI redesigns.
Created dynamic, standards-compliant UIs using React, JavaScript, and Bootstrap, ensuring cross-browser compatibility and responsiveness.
Collaborated with cross-functional teams to plan and implement new features, actively participating in sprint planning, requirement analysis, and user testing.
`,
    technologies: ["React.js","HTML","CSS","JavaScript","Bootstrap","Adobe xd", "Java", "Springboot"
    ],
  },
  {
    year: "Mar 2022 - Aug 2022",
    role: "Intern",
    company: "MResult Technologies Pvt Ltd",
    description: `Built a full-stack Java Spring Boot project to manage employee contact details and records.
Contributed to scalable front-end architectures and modern UI/UX implementations using React, HTML,CSS,JavaScript and Bootstrap.
`,
    technologies: ["React.js","HTML","CSS","JavaScript","Bootstrap","Adobe xd", "Java", "Springboot"],
  },
  {
    year: "Aug 2021 - Sep 2021",
    role: "Web Development Intern",
    company: "VA Websites",
    description: `Designed and delivered reusable UI components and client-specific features for custom websites.
Collaborated with clients to gather requirements and ensure successful project delivery.
`,
    technologies: ["HTML", "CSS", "JavaScript", "Wordpress"],
  },
];

export const PROJECTS = [
  {
    title: "Trading Application",
    image: project6,
    description:
      `Developed a full-fledged trading platform in Next.js with modules like Login/Auth, Funds, Orders, Positions, and P&L Reporting; implemented charts, custom strategy builder, fund flows, dark mode, and performance enhancements — led to 40% higher user engagement and 30% performance gain.
`,
    technologies: ["Next.js", "TypeScript", "JavaScript", "SASS", "Material-UI", "Redux", "Recharts"],
  },
  {
    title: "E-Notifiers",
    image: project2,
    description:
      `Contributed to two distinct web platforms for SMS and Email notifications — E-Notifiers (client-side) and Admin (internal panel) — by implementing approval workflows, integrating the Unlayer editor, and enabling telecom validation to ensure secure and compliant communication.`,
    technologies: ["React", "SASS", "TypeScript", "Unlayer", "Material-UI"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      `A personal portfolio website showcasing projects, skills, and contact information.The website provides a user-friendly interface to display various personal and professional projects. It includes a responsive design, ensuring optimal viewing on mobile, tablet, and desktop devices.`,
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "P R Strategy Builder",
    image: project4,
    description:
     `a secure trading strategy platform — with end-to-end functionality equivalent to 10 days of work accomplished in a single day, demonstrating exceptional commitment, rapid execution, and deep technical skill under pressure.`,
    technologies: ["React", "SASS", "Material-UI"],
  },
  {
    title: "Backoffice",
    image: project3,
    description:
     `Enabled real-time insights by working on the Back Office platform to manage user logs, client data, plans, and transactions.`,
    technologies: ["React", "SASS", "TypeScript", "Material-UI"],
  },
  {
    title: "Fund Manager",
    image: project1,
    description:
      `Contributed to the Fund Manager (Client, Trading, Charts) platform for managing user logs, client data, plans, and transactions — reducing manual operations.`,
    technologies: ["React", "SASS", "TypeScript", "Material-UI"],
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India",
  email: "prathiksha0015@gmail.com",
  linkedIn: "www.linkedin.com/in/prathiksha15"
};
