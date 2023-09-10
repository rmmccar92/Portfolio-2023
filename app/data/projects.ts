const data = {
  projects: [
    {
      title: "Student Tracker",
      alt: "student-tracker-image",
      link: "https://student-sorter-6f8yccr17-rmmccar92.vercel.app/",
      description: "An application used to sort students into groups.",
      repo: "https://github.com/rmmccar92/Student-Sorter",
      image: "/images/ProjectImgs/unc.png",
      technologies: [
        "JavaScript",
        "TypeScript",
        "NextJS",
        "NextAuth",
        "React-Spring",
        "React-Beautiful-DnD",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
      ],
      status: "Halted",
      long_description:
        "This was a quick little app that I created to sort the students in my class into groups. I used the React-beautiful-DnD library with React spring to play around with some animations and drag and drop functionality. Ultimately I have stepped away from this project as the API call I was making to get the student data would need to be constantly refreshed and I couldn't find a way to reauthenticate the call automatically. On top of that I began to worry that I was violating some sort of privacy policy by making the call in the first place. The app's sorting functionality is fully operational and can be demoed upon request. I also used NextAuth to setup user login and authentication but while operational I'm not really doing anything with it currently. If I do revisit this application this would be the first thing I would like to address so that I can create a more secure application. For now progress has halted on this application but I could see myself coming back to it should I find a solution to the API call issue.",
    },
    {
      title: "Character Sheet",
      alt: "character-sheet-image",
      link: "https://character-sheet-rjjz77zy0-rmmccar92.vercel.app/",
      description: "Character Creator for Pathfinder",
      repo: "https://github.com/rmmccar92/Character-Sheet",
      image: "/images/ProjectImgs/quill-2.png",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Remix",
        "Mantine",
        "Prisma",
        "MongoDB",
        "AWS",
        "Bcrypt",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
        { name: "Sean McCarthy", ghLink: "https://github.com/McTastic" },
      ],
      status: "Halted",
      long_description:
        "I admittedly took on way too much for this project. I had some help with the application design from my brother but for the most part I was responsible for the entire project. I wanted to learn more about the Remix framework by building a complex application. I figured building a Character Sheet creation application for table top games like Pathfinder would really test my skills and understanding and it did . . . a lot. At the same time I really wanted to start learning TypeScript in an applicable way. I also decided to throw in Mantine for front end design and Prisma as an ORM for my MongoDB database. Handling the form data and managing TypeScript errors (aka translating TypeScript errors and resisting the urge to set all types as 'any') ended up giving me way more trouble than I expected. That said I was able to successfully implement a rudimentary character creation process. There is still more work to be done such as displaying the data in the appropriate locations but for now I've decided to set this application aside. I think if I were to revisit this project I would recreate it using NextJS. I'm more familiar with that framework and it seems to have overtaken Remix in terms of popularity. Still what I was able to accomplish with this project was a great learning experience and I'm proud of what I was able to accomplish.",
    },
    {
      title: "PodCentral",
      alt: "podcentral-image",
      link: "https://pod-central.onrender.com/",
      description:
        "PodCentral is a full stack web application that allows users to browse their favorite podcasts and to create a podcast of their own and upload episodes.",
      repo: "https://github.com/rmmccar92/PodCentral",
      image: "/images/ProjectImgs/podcast-logo.png",
      technologies: [
        "JavaScript",
        "React",
        "MUI",
        "NodeJS",
        "Express",
        "MongoDB",
        "Mongoose",
        "GraphQL",
        "Heroku",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
        { name: "Brad Rollinson", ghLink: "https://github.com/likearollinson" },
        { name: "Joey Swafford", ghLink: "https://github.com/joeyswafford" },
      ],
      status: "Complete",
      long_description:
        "I completed PodCentral as a keystone project for my time at UNC Chapel Hill's Coding Bootcamp. The application was built using the MERN stack and GraphQL. The application was deployed through Heroku (initially though has since been moved over to the Render platform) and uses MongoDB Atlas for storage. The application was built with a mobile first design and uses MUI for styling. The application also uses the podcast API to allow users to search for their favorite podcasts and allows users to upload their own podcast to the PodCentral platform using Cloudinary as a hosting solution for audio and images. The application also uses the Apollo Client to handle GraphQL queries and mutations. While working on this application we were still learning React and GraphQL so we faced many challenges while we tried to grapple with these still fresh concepts. While I believe I have come a long way since this application's completion I'm still proud of it as my first real FullStack MERN application.",
    },
    {
      title: "PTC Binder",
      alt: "ptc-binder-image",
      link: "https://rmmccar92.github.io/Confused-Gamer/",
      description:
        "A full stack web application used to track and store a personal pokemon card collection. The site uses the full stack functionality of NextJS with MongoDB for storage and MUI for styled components.",
      repo: "https://ptc-binder-v2-4kml8079p-team-mc.vercel.app/",
      image: "/images/ProjectImgs/pokeball.svg",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "NextJS",
        "MUI",
        "MongoDB",
        "Node",
        "JSCookie",
        "Vercel",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
        { name: "Sean McCarthy", ghLink: "https://github.com/McTastic" },
        ,
      ],
      status: "Complete",
      long_description:
        "After completing my Boot Camp at UNC I was eager to continue my learning and spend an extended period of time building something. So I enlisted the help of my brother and we both set out to learn the NextJS framework (pre Next 13). This was a great experience and really made me love working with Next JS. We utilized the Pokemon TCG API to pull in card data and then allowed users to search for and save those cards to their collection. In terms of design we utilized the MUI framework but quickly realized that a lot of what we wanted to do required us to overwrite MUI's default styling. I was particularly proud of the type specific styling we gave to each card. We learned a lot about design work and NextJS in the process of creating this application and I think the end result demonstrates a fully functional MERN (MENN?) application.",
    },
    {
      title: "Next E-Commerce",
      alt: "next-e-commerce-image",
      link: "https://next-e-commerce-2-1ebnfmukg-rmmccar92.vercel.app/",
      description:
        "A Demo E-Commerce site built with NextJS, MongoDB, amd GraphQL that I made to get more comfortable with NextJS. MUI was used for styling and Paypal was used for payment processing. Additionally the live application was deployed through Vercel.",
      repo: "https://github.com/rmmccar92/Next_E_Commerce",
      image: "/images/ProjectImgs/next-e-commerce.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "NextJS",
        "MUI",
        "MongoDB",
        "GraphQL",
        "Node",
        "JSCookie",
        "Axios",
        "Vercel",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
      ],
      status: "Complete",
      long_description:
        "I followed along with some tutorials for this project. My goal here was to get started with NextJS (pre Next 13). I also wanted to get more comfortable with GraphQL and MongoDB. I used MUI for frontend styling which allowed for an easy grid design. I also integrated the PapPal API into this project which allowed potential users to 'purchase' the products on the site. Following along with a tutorial made this project a lot easier to complete but there were still some outdated things that I had to manually fix. This was a great introduction to NextJS and I'm excited to continue working with it in the future.",
    },
    {
      title: "Confused Gamer",
      alt: "confused-gamer-image",
      link: "https://rmmccar92.github.io/Confused-Gamer/",
      description:
        "An application designed to recommend and provide information about video games.",
      repo: "https://github.com/rmmccar92/Confused-Gamer",
      image: "/images/ProjectImgs/CGImage.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Materialize"],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
        { name: "Aubrey Henley", ghLink: "https://github.com/aubrihenley" },
        { name: "Daniel Bradley", ghLink: "https://github.com/WebDeverDan" },
        { name: "Joey Swafford", ghLink: "https://github.com/joeyswafford" },
      ],
      status: "Complete",
      long_description:
        "This was the first real application that I worked on with a team. I was responsible for the API calls and some of the front end design. I also was responsible for the implementation of the logic for the search functionality. We utilized the Giant Bomb API to pull from their database of video game information. Additionally the front end design utilizes the Materialize framework to create consistent visual design throughout the site. This was a great learning experience for me as it was my first time working with a team and I learned a lot about git and github during this project. I also learned a lot about working with other developers and how to work through problems as a team. We did struggle with the initial API call at first as we ran into CORS issues but we were able to work through it and get the application working as intended. The design was also a difficult challenge as none of us had much experience with front end design at the time. We ended up landing on a design that we were all happy with and I think it turned out well.",
    },
    {
      title: "Farmer's Market Search",
      alt: "farmers-market-search-image",
      link: "https://still-tor-25996.herokuapp.com/",
      description:
        "A full stack application that allows local farmers and customers to congregate and provide information about nearby farmer's markets.",

      repo: "https://github.com/rmmccar92/Farmers-Market-Search",
      image: "/images/ProjectImgs/fmsearchimg2.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "HandleBars",
        "NodeJS",
        "Express",
        "Bootstrap",
        "MySql",
        "GSAP",
        "Heroku",
      ],
      contributors: [
        { name: "Ryan McCarthy", ghLink: "https://github.com/rmmccar92" },
        { name: "Casey Twine", ghLink: "https://github.com/ElusiveSkies" },
      ],
      status: "Complete",
      long_description:
        "This application utilized the handlebars library in addition to an express server to deliver a full-stack application. The application's back-end uses a MySQL database to store user and market information. Users can create their own market as well as search for other markets by zip code. I implemented the GSAP library as well to create some animations for the site which I was pretty happy with (there's still one animation that was pretty buggy in a specific circumstance but I had to move on). I had help with the design of the site but all other functionality fell on me. I was able to successfully implement proper CRUD functionality and deliver a full stack application in a fairly short amount of time. Unfortunately because of the change in Heroku's free tier policy the application is no longer live. I may go back and redeploy this application to another platform at some point but I will still need to research my options. That said this application can be demoed locally upon request.",
    },
  ],
};

export default data.projects;
