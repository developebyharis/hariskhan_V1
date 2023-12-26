const appData = {
  about: [
    {
      status: "work",
      image: "/assets/images/haris.jpg",
      name: "Haris Khan",
      live: "Peshawar Pakistan",
      profession: "Software Enginner",
      desc: "Haris Khan, a Peshawar-based software engineer, excels in crafting sophisticated solutions, demonstrating advanced technical skills, and pushing the boundaries of innovation in software development.",

      experience: [
        {
          starting_date: "2022",
          ending_date: "Current",
          link: "#",
          position: "Frontend Developer",
          company: "Upwork & Fiver",
          city: "Peshawar",
          country: "PK",
        },
      ],
      awards: [
        {
          name: "Solving JavaScript Intermediate question at HackerRank",
          link: "https://www.hackerrank.com/certificates/0471797d54c6",
          year: "2023",
          purpose: "JavaScript (Intermediate)",
        },
        {
          name: "Solving JavaScript Basic question at HackerRank",
          link: "https://www.hackerrank.com/certificates/ac190b1c4a3e",
          year: "2023",
          purpose: "JavaScript (Basic)",
        },
      ],
      education: [
        {
          school: "Isamia College peshawar (ICP)",
          degree: "Pre-Engineering",
          starting_year: "2022",
          ending_year: "2024",
          link: "https://www.icp.edu.pk/",
          location: "Peshawar, Pakistan",
        },
        {
          school: "Army Public School & College Boys Peshawar (APS&C) ",
          degree: "Sciences",
          starting_year: "2016",
          ending_year: "2022",
          link: "https://www.facebook.com/p/Army-Public-School-and-College-Boys-Peshawar-100057055226544/",
          location: "Peshawar, Pakistan",
        },
      ],
    },
  ],
  socials: [
    {
      name: "Linkedin",
      username: "muhammadhariskhan",
      link: "https://www.linkedin.com/in/muhammad-haris-khan-4aba42229/",
    },
    {
      name: "Github",
      username: "developebyharis",
      link: "https://github.com/developebyharis",
    },
    {
      name: "Twitter",
      username: "CodeByHaris",
      link: "https://twitter.com/CodeByHaris",
    },
    {
      name: "CV",
      username: "Haris Khan",
      download_link: "/Muhammad Haris Khan (6).pdf",
      link: "/cv.html",
    },
    {
      name: "Email",
      username: "Haris Khan",
      link: "mailto:mhariskhan129@gmail.com",
    },
  ],
  projects: [
    {
      cv_desc:
        "TaskLoom is a CRUD todo web app that allows users to create, edit, delete, and update tasks. The tasks are stored in the local storage of the user, enabling them to access their tasks anytime, anywhere in the world.",
      status: "completed",
      completedYear: "2023",
      name: "TaskLoom",
      image: "./assets/images/projects/taskLoom/taskoom.png",
      desc: "A To Do List app which can create edit delete and save the todo's.",
      link: "https://taskloom.vercel.app/",
      detail: {
        images: [
          "/assets/images/projects/taskLoom/maindesktop.png",
          "/assets/images/projects/taskLoom/mobile.png",
        ],
        documentation: {
          features: [
            "The best thing about this todo list app is that it alow user to store their task in their local storage which help them to see the task after closing the app and by saving the task in the local storage it also not use any storage of user device ",
            "The second best thing about this todo app is that it allow user to edit their task and it will repalce the edit task with the actual task created before",
            "This most important thing about this webapp is that it is responsive on all type of devices it mean you can use the app in mobile or desktop or tablet it will work fantastic",
          ],
          problems: [
            "One of the problem about this app was saving the task as a beginner i don't know about storage in browser so it take so much time to learn the local storage and use it in the app",
            "The second problem was about it's responsive design to make a website responve on all type of devices it need alot of knowlege about media queries and it need strong knowloge of CSS",
          ],
        },
        techStack: {
          frontend: [
            {
              tech: "HTML",
              color: "bg-orange-200 border-orange-600",
            },
            {
              tech: "TailwindCSS",
              color: "bg-blue-200 border-blue-600",
            },
            {
              tech: "JavaScript",
              color: "bg-yellow-100 border-yellow-400",
            },
          ],
          backend: [],
          database: [],
        },
      },
    },
  ],
};

export default appData;
