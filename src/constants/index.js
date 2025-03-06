import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import school from "../assets/school.png"
import college from "../assets/college.jpg"
import gssoc from "../assets/gssoc.png"
export const HERO_CONTENT = `I am an aspiring full-stack developer passionate about building dynamic and user-friendly web applications. Currently in my 3rd year of BE, I specialize in the MERN stack, crafting seamless experiences from front-end to back-end.`;  

export const ABOUT_TEXT = `My journey into web development started with curiosity and has grown into a deep enthusiasm for solving real-world problems through technology. I am constantly learning and improving my skills in MERN stack, while also exploring new technologies to expand my expertise.`;  

export const OPENSOURCE = [
  {
    year: "June 2024 - Aug 2024",
    image: gssoc,
    role: "Developer",
    company: "Girl Script Summer of Code-2024",
    description: `I had the incredible opportunity to be a contributor in GSSoC 2024, where I collaborated on open-source projects, enhanced my problem-solving skills, and gained hands-on experience in real-world development. 
    I actively engaged with maintainers and fellow contributors, learning best practices in version control, code reviews, fixing bugs, optimizing performance,  and scalable development.`,
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Tune Tutor",
    image: project1,
    github: `https://github.com/swetha5157/Tune__Tutor`,
    description:
      "A fully functional e-commerce website to buy an instrument and learn the same with course playing features,along with admin management",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Talent Link",
    image: project2,
    github: `https://github.com/swetha5157/TalentLink`,
    description:
      "An application for managing jobs by listing, updating and deleting jobs in real time with user authentication and data security",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "EquiLedger",
    image: project3,
    github: `https://github.com/swetha5157/EquiLedger`,
    description:
      "A Java-based console application to track the assets and liabilities for a startup and generate a balnce sheet",
    technologies: ["Java, Object Oriented Programming"],
  },
];
export const EDUCATION = [
  {
    degree:
      "Bachelor of Engineering (B.E.) in Computer Communication Engineering",
    institution: "Sri Eshwar College of Engineering",
    image:college,
    year: "2022 - 2026",
    percentage: "8.85 (Upto 5th sem)",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Venkatalakshmi Matriculation Higher Secondary School",
    image: school,
    year: "2020 - 2022",
    percentage: "96.67%",
  },
  {
    degree: "Secondary School Education (SSLC)",
    institution: "Venkatalakshmi Matriculation Higher Secondary School",
    image: school,
    year: "2019 - 2020",
    percentage: "98.82%",
  },
];
export const CONTACT = {
  address: "14/11,Swami Illam,Sulur,Coimbatore",
  phoneNo: "6374687045",
  email: "swethasuresh799@gmail.com",
};
