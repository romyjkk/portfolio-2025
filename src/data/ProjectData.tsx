export const projectData = [
  {
    id: "escape-manager-project",
    slug: "escape-manager",
    title: "Escape Manager",
    runtime: "2024 - ongoing",
    client: "Ruby Escaperooms",
    roles: ["Front-end", "Concept", "UX/UI", "Back-end"],
    description: (
      <>
        A web application designed & developed to improve the communication
        between staff at escaperooms. The most important features include
        reporting issues and managing inventory.
      </>
    ),
    mockup: "/mockups/mockup1.png",
    projectImage: "/projImages/proj1/projImg1.png",
    introParagraphs: [
      <>
        In the graduation phase of my study, the goal was to pick a real problem
        and create a solution. I work at an escaperoom and chose a problem we
        often face: <strong className="red">bad communication.</strong>
      </>,
      <>
        During these six months, I extensively researched this topic,
        interviewed staff and other escaperooms, designed an application and
        tested this with the staff. The result is a product where issues can be
        reported and inventory can be managed, creating a neat overview that’s
        easy to navigate.
      </>,
    ],
    processParagraphs: [
      <>
        After graduating, my boyfriend (who’s a software engineer) and I
        developed the product into a working web application for my workplace.
        We recently finished developing the first MVP and it’s currently being
        tested.,
      </>,
      <>
        During the project, I was responsible for the
        <strong className="red">front-end,</strong> but in addition to that I
        spent many hours in the JavaScript files after expressing my interest in
        improving my <strong className="red">JavaScript (and back-end)</strong>{" "}
        skills. I worked on:,
      </>,
    ],
    myWork: [
      <>Filtering and sorting issues;</>,
      <>
        Fetching data from <strong className="red">JSON</strong> and displaying
        this all over the application using more{" "}
        <strong className="red">if-statements and loops</strong> than I can
        count;
      </>,
      <>
        Managing the <strong className="red">visibility</strong> of many
        components and popups while taking user rights into account;
      </>,
      <>
        <strong className="red">Template inheritance</strong> with Jinja.
      </>,
    ],
    challenges: [
      <>
        One of the biggest challenges for me was finding my way around multiple
        files with <strong className="red">1000+</strong> lines of code and
        creating/editing components using JavaScript with{" "}
        <strong className="red">dynamic data</strong>, while still applying{" "}
        <strong className="red">semantics</strong>.
      </>,
    ],
    conclusionParagraphs: [
      <>
        There’s still a lot of work to do, we’d like to implement more{" "}
        <strong className="red">Classes</strong>
        and use an actual <strong className="red">database</strong>, instead of
        using JSON. In addition to that we wanna make the application{" "}
        <strong className="red">scale-proof</strong> and hopefully develop it as
        an app for <strong className="red">iOs and Android</strong> one day, for
        other escaperooms to use.
      </>,
    ],
    images: [
      {
        emSketches: [
          "/projImages/proj1/details/dashboardV1.png",
          "/projImages/proj1/details/dashboardV2.png",
          "/projImages/proj1/details/dashboardV3.png",
          "/projImages/proj1/details/dashboardV4.png",
        ],
      },
      {
        emResults: [
          "/projImages/proj1/details/dashboard.png",
          "/projImages/proj1/details/existingIssue.png",
          "/projImages/proj1/details/addingInventory.png",
          "/projImages/proj1/details/existingObject.png",
          "/projImages/proj1/details/folderOverview.png",
          "/projImages/proj1/details/issueOverview.png",
          "/projImages/proj1/details/profile.png",
        ],
      },
    ],
    imageDescriptions: [
      {
        emSketches: ["Dashboard sketch to final result"],
        emResults: ["The current application in use"],
      },
    ],
    demonstrationVideo: "/projImages/proj1/details/dashboard.png",
  },
  {
    id: "our-solar-system-project",
    slug: "our-solar-system",
    title: "Our Solar System",
    runtime: "2025",
    client: "Personal project",
    roles: ["Front-end", "UX/UI"],
    description: (
      <>
        A simulation of our solar system (not to scale) containing information
        about stellar objects, using{" "}
        <strong className="red">THREE.js and GSAP.</strong>
      </>
    ),
    mockup: "/mockups/mockup2.png",
    projectImage: "/projImages/proj2/projImg2Flipped.png",
    introParagraphs: [
      <>
        Inspired by all the amazing THREE.js and GSAP projects I’ve come across
        online, I decided to try my hand at it, wanting to gain more experience
        with these techniques.
      </>,
      <>
        My idea was to create something space related, since I love science
        fiction movies and have an interest in astronomy. Using Sketchfab, I
        searched for models I could use and eventually settled on creating our
        solar system, using <strong className="red">GSAP ScrollTrigger</strong>{" "}
        to zoom in and out.
      </>,
    ],
    processParagraphs: [
      <>
        The first challenge was loading the nine different models into the scene
        and positioning them correctly. To add an extra challenge, I worked with{" "}
        <strong className="red">Classes</strong> and created a ModelLoader
        Class, which I could use for each model. This made it much more
        efficient to load each model in. I got some help from my boyfriend,
        who’s a software engineer, with this. He’s better than AI!,
      </>,
      <>
        Next up, GSAP ScrollTrigger for the camera position and information
        blocks. With a <strong className="red">loop</strong>, I iterated over
        all the planets and the camera positions, which I had put in a{" "}
        <strong className="red">JSON</strong> file. This way, I had to write the
        animation for all the planets only once.,
      </>,
    ],
    // challenges: [],
    conclusionParagraphs: [
      <>
        When I was happy with all the positions, I added a loader, music and
        some animations as a finishing touch. The result is a pretty clean
        little website which I’m proud of. In the future, I will definitely be
        creating more with GSAP and THREE.js. The possibilities are endless!
      </>,
    ],
    images: [
      {
        scrollTrigger: "/projImages/proj2/details/scrollTrigger.png",
      },
      {
        ossResults: [
          "/projImages/proj2/details/loader.png",
          "/projImages/proj2/details/sun.png",
          "/projImages/proj2/details/uranus.png",
          "/projImages/proj2/details/fullScene.png",
        ],
      },
    ],
    imageDescriptions: [
      {
        scrollTrigger: "GSAP ScrollTrigger",
        ossResults: "The final product",
      },
    ],
    demonstrationVideo: "/projImages/proj2/details/sun.png",
    githubLink: "https://github.com/romyjkk/our-solar-system",
    liveDemo: "https://our-solar-system-five.vercel.app/",
  },
  {
    id: "bac-sac-project",
    slug: "bac-sac",
    title: "BAC/SAC",
    runtime: "2024",
    client: "Baseball/Softball against Cancer",
    roles: ["WordPress", "Front-end"],
    description: `A WordPress website made for the non-profit Baseball/Software against Cancer, a beautiful project I got the opportunity to work on during my internship at Kobalt Digital.`,
    mockup: "/mockups/mockup3.png",
    projectImage: "/projImages/proj3/projImg3.png",
  },
  {
    id: "horrorflix-project",
    slug: "horrorflix",
    title: "Horrorflix",
    runtime: "2023",
    client: "Go2People",
    roles: ["Front-end", "Back-end"],
    description: `A sign up form I made during my internship at Go2People, built using PHP, utilizing the Fetch API and sending an email using the mailto PHP function.`,
    mockup: "/mockups/mockup4.png",
    projectImage: "/projImages/proj4/projImg4Flipped.png",
  },
];

export default projectData;
