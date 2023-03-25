import {
  mobile,
  backend,
  creator,
  javascript,
  html,
  flask,
  pytorch,
  pandas,
  opencv,
  scikitlearn,
  Python,
  css,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
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
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: Python,

  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "opencv",
    icon: opencv,
  },
  {
    name: "sci-kit learn",
    icon: scikitlearn,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "flask",
    icon: flask,
  },
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
    name: "MongoDB",
    icon: mongodb,
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
    title: "Data Scientist Intern",
    company_name: "ShAI for Artificial Intelligence",
    icon: ShAI,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "• Used a variety of machine learning techniques and implemented them in multiple projects.",
      "• Designed, trained and improved upon cutting-edge models.",
      "• Proficiency in Python with its libraries and ML frameworks.",
    ],
  },
  {
    title: "Data Scientist Freelancer",
    company_name: "Reverb.AI",
    icon: Reverblogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "LipNet",
    description:
      "LipNet is the first end-to-end sentence-level lipreading model that simultaneously learns spatiotemporal visual features and a sequence model.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Basel-anaya/LipNet-End-to-End-Sentence-level-Lipreading",
  },
  {
    name: "EEG Schizophrenia Disorder using CNN",
    description:
      "This Project focuses on using CNN to classify EEG signals and detect Schizophrenia disorder.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Basel-anaya/EEG-Schizophrenia-Disorder-using-CNN",
  },
  {
    name: "Food Vision",
    description:
      "This Project focuses on classify 101 classes of Food images using CNN and Transfer learning.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Basel-anaya/Food-Vision-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
