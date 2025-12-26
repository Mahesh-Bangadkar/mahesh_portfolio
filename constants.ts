import { ExperienceItem, Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Mahesh Bangadkar",
  role: "Core Developer | B.Tech E&C Student",
  phone: "9370594161",
  email: "mahesh18bangadkar@gmail.com",
  location: "Ramtek, Nagpur, MH. 441106",
  about: "I am Mahesh Bangadkar, a final-year Electronics and Communication Engineering tudent with a strong interest in building meaningful learning solutions at the intersection of technology, design, and education. I have hands-on experience in IoT, embedded systems, and web development, having developed projects such as Arduino-based alert systems, GSM communication modules, and responsive financial web applications, while also contributing to UI/UX design and clear technical documentation. Alongside my engineering background, I bring over two years of experience teaching Mathematics and Science, which has strengthened my ability to simplify complex concepts into clear, visual, and engaging explanations—an approach I extend to content creation, manuals, and learning materials. I actively use AI tools for creating educational videos, illustrations, and structured content, and I enjoy designing solutions that are inclusive, intuitive, and impact-driven. Through leadership roles in technical forums and current work with a student-led startup, I have developed strong collaboration, execution, and communication skills, and I am motivated to contribute to projects that combine innovation, accessibility, and real-world impact.",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript","React","Tailwind",],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C", "C++"],
  },
  {
    title: "Tools & Software",
    skills: ["Canva", "MATLAB","Figma", "VS Code","MS Office"],
  },
  {
    title: "Embedded & IoT",
    skills: ["Arduino", "FPGA","Raspberry pi","ESP32"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Self-motivated",
      "Quick Learner",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
   {
    role: "Programming Intern",
    company: "COJAG - Somalwada, Nagpur",
    duration: "November 2025 - Present",
    description: "Currently working with the various tech stack, mainly focused on the FAST API and React ",
  },
  {
    role: "Programmer",
    company: "Qwik Tech (Startup)",
    duration: "March 2025 - Present",
    description: "Designed and developed custom websites using HTML, CSS, JavaScript. Collaborated on user-friendly, responsive websites for local business clients.",
  },
  {
    role: "Maths Teacher",
    company: "Master Tutorial",
    duration: "July 2024 - March 2025",
    description: "Delivered exceptional mathematics instruction and was appreciated for clarity and engaging teaching methods.",
  },
  

  {
    role: "Intern - Control and Instrumentation",
    company: "MAHAGENCO - KTPS, KORADI",
    duration: "January 2024",
    description: "Got hands-on experience on the control and instrumentation and applied my knowledge of Measurement and instrumentation subject learned in 3rd semester.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Visual Assistance & Rehabilitation System",
    technologies: ["IoT", "Embedded Systems"],
    description: "Final-Year Project (Ongoing). Development of a system to assist visually impaired individuals, focusing on rehabilitation and navigation assistance.",
  },
  {
    title: "GSM Call/Message Alert System",
    technologies: ["GSM", "Microcontrollers"],
    description: "Mini Project (3rd Year). Created a system to send SMS or call alerts based on sensor triggers.",
  },
  {
    title: "Arduino-Based Door Alert System",
    technologies: ["Arduino", "Sensors"],
    description: "Mini Project (2nd Year). Built a security alert system using Arduino and sensors for door monitoring.",
  },
  {
    title: "Pothole Detection system using Drone footage",
    technologies: ["Pyhon","React","FAST API"],
    description: "Industry Project,built during the internship in COJAG. Using this tecnology the pothole dection done using the drone footage of the area, the road contracter can figureout the exact latlog of the pothole",
  },
  
];

export const EDUCATION = [
  {
    degree: "B.Tech (Electronics and Communication)",
    institution: "RTM Nagpur University",
    year: "2022 - 2026 (Pursuing)",
  },
];

export const ACHIEVEMENTS = [
  "President - Electromatix forum (2025-26 KITS, RAMTEK)",
  "Winner - Paper Presentation TEKNO2023 (2022-23 KITS, RAMTEK)",
];

export const LANGUAGES = ["English", "Hindi", "Marathi"];

// Constructing a context string for the AI
export const RESUME_CONTEXT = `
You are an AI assistant representing Mahesh Bangadkar. Answer questions about him based ONLY on the following resume data. Be polite, professional, and concise.

Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}, ${PERSONAL_INFO.location}
About: ${PERSONAL_INFO.about}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.year})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.title}: ${s.skills.join(', ')}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.technologies.join(', ')}): ${p.description}`).join('\n')}

Achievements:
${ACHIEVEMENTS.join('\n')}

Languages: ${LANGUAGES.join(', ')}

If asked about something not in this list, say you don't have that information but suggest contacting Mahesh directly.
`;