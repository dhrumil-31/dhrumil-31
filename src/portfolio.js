/* Change this file to get your personal Porfolio */

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhrumil's Portfolio",
  description:
    "A highly motivated and curious individual with a passion for data exploration and technological innovation, this person thrives on uncovering hidden insights in complex datasets and designing cutting-edge solutions that push the boundaries of what's possible in the digital realm..",
  og: {
    title: "Dhrumil Shah Portfolio",
    type: "website",
    //url: "http://dhrumilshah.com/",
  },
};

//Home Page
const greeting = {
  title: "Dhrumil Shah",
  logo_name: "DhrumilShah",
  nickname: "Danny",
  subTitle:
    "A highly motivated and curious individual with a passion for data exploration and technological innovation, this person thrives on uncovering hidden insights in complex datasets and designing cutting-edge solutions that push the boundaries of what's possible in the digital realm.",
  resumeLink:
    "https://drive.google.com/file/d/1O-VLoGjbETE1HuChdzbW1PE0rF0D31P1/view?usp=drive_link",
  githubProfile: "https://github.com/dhrumil-31",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dhrumil-31",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhrumil-shah031/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dhrumilshah.dss@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_dhrumil.31/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analyst",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing interactive dashboards that visualizes the trends.",
        "⚡ Experience in developing data pipelines using tools like apache kafka, spark, python and hive to automate data extraction, transforming, and loading (ETL) processes.",
        "⚡ Conducted extensive data cleaning and preprocessing to eliminate inconsistencies, duplicates, and errors.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Hive",
          fontAwesomeClassname: "simple-icons:apachehive",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website for client using PHP-Javascript.",
        "⚡ Developing console-based applications using C#, Oracle Database.",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Conestoga College",
      subtitle: "Post Graduation in Big Data Solution Architecture",
      logo_path: "cclogo.png",
      alt_name: "Conestoga College",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I was fortunate to learn R programming language, PowerBI, MongoDB, Apache Kafka, Hadoop, Spark, Scala, RDBMS, Software Engineering.",
        "⚡ Apart from this, I have achieved certificate for Google advanced Data Analytics.",
        "⚡ I worked on a project to design and implement ETL pipeline for processing data.",
      ],
    },
    {
      title: "Northern College",
      subtitle: "Post Graduation in Information Systems Business Analysis",
      logo_path: "nclogo.png",
      alt_name: "Northern College",
      duration: "2023 - 2023",
      descriptions: [
        "⚡ I have studied basic of Ethics, Business Development process, DBMS, and hands-on practice in Java programming.",
        "⚡ I also worked on MS Project 2016 to create end-to-end project timeline chart.",
        "⚡ I received scolarship based on the Merit.",
      ],
    },
    {
      title: "Sardar Vallabhbhai Patel Institute of Technology",
      subtitle: "B.Tech in Computer Engineering",
      logo_path: "svitlogo.png",
      alt_name: "Sardar Vallabhbhai Patel Institute of Technology",
      duration: "2010 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DSA, DBMS, OS, Programming languages like C++, Advanced JAVA, Android, PHP, VB .NET, Python etc.",
        "⚡ Apart from this, I have also earned certificate for completing courses like Web Development 2.0, MS Office, Advanced Excel, Oracle Database.",
        "⚡ The final term project was selected as one of the top 10 projects in the state.",
        "⚡ Based on the Merit received 50% scolarship from the goverment.",
      ],
    },
    {
      title: "Parul University",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "pulogo.png",
      alt_name: "Parul University",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like C, C++, DSA, DBMS, Computer Networks, JAVA etc.",
        "⚡ During my time at university, I was also associated with cultural club.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Advanced Data Analytics",
      subtitle: "-",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/62219721c568561757aff1993b7686ea",
      alt_name: "Goolge",
      color_code: "#0C9D5899",
    },
    {
      title: "Essential Power BI Training",
      subtitle: "- Gini von Courter",
      logo_path: "ll_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1f7OL0Tttuh8iq5kjMp7t-P_rlPt1hnjU/view?usp=drive_link",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Restful APIs",
      subtitle: "- Morten Rand-Hendriksen",
      logo_path: "ll_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1B4MNn0UiablGM4H_OGnocSDacEYDyeTV/view?usp=drive_link",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "The Complete Web Development 2.0",
      subtitle: "- Rob Percival",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1FR1c0oWPWw9voGByyATQ8MVdTW6p2pZc/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#252F40",
    },
    {
      title: "Advanced Excel",
      subtitle: "- Tata Steel",
      logo_path: "ts_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1EJp_j89bHgdfYu3TNk35Z7G6YaOHXuX1/view?usp=drive_link",
      alt_name: "Tata Steel",
      color_code: "#00000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  // Add Description
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Linde Engineering India Pvt. Ltd.",
          company_url: "https://www.linde-engineering.com/",
          logo_path: "linde_logo.png",
          duration: "Feb 2022 - May 2022",
          location: "Vadodara, Gujarat, India",
          description:
            "I worked on developing a console-based application in C#. I also worked on Oracle Server to create triggers and procedures. I also lead the communication on project updates and technical solutions to the team with accurate documentation.",
          color: "#000000",
        },
        {
          title: "Web Developer",
          company: "Freelancer",
          logo_path: "freelancer_logo.png",
          duration: "May 2021 - Jul 2021",
          location: "Vadodara, Gujarat, India",
          description:
            "I worked on creating and hosting a fully functional e-commerce website for the client using PHP, JavaScript, HTML, CSS, and SQL. Incorporated features such as order tracking, cart management, safe payment processing, and product browsing, enhanced user experience. Achieved a 42% increase in sales and a 36% expansion of the client’s customer base, demonstrating the effectiveness of delivering impactful solutions and driving business growth.",
          color: "#0879bf",
        },
        // {
        //   title: "",
        //   company: "",
        //   company_url: "",
        //   logo_path: "",
        //   duration: "",
        //   location: "",
        //   description:
        //     "",
        //   color: "#9b1578",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have created few projects using different technologies. The best one is creating an ETL pipeline for analyzing data..",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_dhrumil.png",
    description:
      "I'm available on LinkedIn. You can always pin a message. I usually reply them within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kitchener, Ontario, Canada",
    locality: "Kitchener",
    country: "Canada",
    region: "Ontario",
    postalCode: "N2R 0J4",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/155+W+Oak+Trl,+Kitchener,+ON+N2R+1R4/@43.3833352,-80.5720667,13z/",
  },
  phoneSection: {
    title: "Contact No.",
    subtitle: "705-406-4275",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
