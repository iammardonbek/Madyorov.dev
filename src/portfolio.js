const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "MM.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Mardonbek Madyorov",
  role: "Front End Engineer",
  description:
    "Passionate about learning and building delightful and scalable web applications. Web Developer specialized in front end development. Highly dedicated, self- motivated professional with effective leadership and communication skills. Excellent team player committed to delivering on-time high quality results to the company.",
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/mardonbek-madyorov-25361023b/",
    github: "https://github.com/iammardonbek",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Houzing-Project",
    description: "It is a website to sell or buy houses",
    stack: ["CSS", "Styled-Components", "JavaScript", "React"],
    sourceCode: "https://github.com/iammardonbek/Houzing-Project",
    livePreview: "https://vercel.com/iammardonbek/houzing-project",
  },
  {
    name: "Bonik-Commerce",
    description: "Commerce website to sell or buy",
    stack: ["CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/iammardonbek/Bonik-commerce",
    livePreview: "https://bonik-commerce-247aisucj-iammardonbek.vercel.app/",
  },
  {
    name: "Meetups Project",
    description: "I am still working on the mobile version",
    stack: ["CSS", "JavaScript", "React", "Next.js", "Mongo.DB"],
    sourceCode: "https://github.com/iammardonbek/meet_project-next.js-",
    livePreview: "https://meet-project-next-js.vercel.app/",
  },
  {
    name: "Traveling Website",
    description:
      "There, you can look up places to visit. Mobile version is still on the process",
    stack: ["CSS", "JavaScript", "React"],
    sourceCode:
      "https://github.com/iammardonbek/Travel-project/tree/main/src/components",
    livePreview: "https://travelling-website-beta.vercel.app/",
  },
  {
    name: "Dice Game",
    description: "you can play a Dice Game here with your friend",
    stack: ["CSS", "JavaScript"],
    sourceCode: "https://github.com/iammardonbek/Dice-Game",
    livePreview: "https://dice-game-orpin.vercel.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "SASS",
  "SCSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "Redux",
  "Next.js",
  "Mongo.DB",
  "Material UI",
  "Git",
  "Github",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "mardonbek1999@mail.com",
};

export { header, about, projects, skills, contact };
