import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Ammar",
  initials: "MA",
  location: "Erlangen, Bavaria, Germany",
  locationLink: "https://www.google.com/maps/place/Erlangen",
  about:
    "Data Analytics Researcher @ Siemens | MSc Electromobility-ACES @ FAU | Agentic AI & Graph Analytics",
  summary:
    "Pursuing an MSc in Electromobility-ACES at Friedrich-Alexander-Universität Erlangen-Nürnberg while working as a Data Analytics Researcher at Siemens. My work focuses on GenAI-enabled software ecosystem health monitoring, graph analytics, Text-to-Cypher pipelines, prompt-to-visualization workflows, and agentic AI systems research.",
  avatarUrl: "https://avatars.githubusercontent.com/Ammar2k",
  personalWebsiteUrl: "ammar2k.github.io",
  contact: {
    email: "muhammad.ammar@fau.de",
    tel: "+49 1577 3856534",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ammar2k",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad2000ammar/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
      degree: "MSc Electromobility-ACES, current grade: 1.4",
      start: "2024",
      end: "Present",
    },
    {
      school: "Scuola Superiore Sant'Anna (SSSA)",
      degree: "AI & Robotics in Extended Reality Seasonal School",
      start: "2025",
      end: "2025",
    },
    {
      school: "National University of Sciences and Technology (NUST)",
      degree: "B.Sc. Mechanical Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Siemens AG + FAPS FAU",
      link: "https://www.siemens.com/",
      badges: ["Erlangen", "Research"],
      title: "Master's Thesis",
      // logo: ParabolLogo,
      start: "May 2026",
      end: "Present",
      description: (
        <>
        <li>
          Beyond the Agent: A Workflow-Level Review of Agentic AI Systems.
        </li>
        <li>
          Research objective: How are agentic AI systems structured, controlled, and evaluated as end-to-end workflows, and where do current approaches lack system-level rigor?
        </li>
        </>
      ),
    },
    {
      company: "Siemens AG",
      link: "https://siemens.com/",
      badges: ["Erlangen", "Hybrid"],
      title: "Data Analytics Researcher - Working Student",
      // logo: ParabolLogo,
      start: "Oct 2024",
      end: "Present",
      description: (
        <>
        <li>
          Conducted systematic literature review of software ecosystem health analysis. Surveyed 61 research articles and analyzed 416 health metrics to present a unified graph of metrics to measure ecosystem health in a hierarchical way.
        </li>
        <li>
          Developed an LLM-based Text-to-Cypher pipeline for analyzing software ecosystem health using a health metric KPI tree.
        </li>
        <li>
          Created a metric graph to oversee real-time visualization of the underlying Neo4j database.
        </li>
        <li>
          Developed an LLM-powered Prompt-to-Visualization pipeline to display the most relevant dashboard for a user query, lowering TTI from 2 minutes to 5 seconds.
        </li>
        <li>
          Submitted 6 invention disclosures and authored 4 research papers.
        </li>
        </>
      ),
    },
    {
      company: "FAPS FAU",
      link: "https://www.faps.fau.de/",
      badges: ["Erlangen", "Research"],
      title: "Project Thesis",
      // logo: ParabolLogo,
      start: "Oct 2025",
      end: "Mar 2026",
      description: (
        <>
        <li>
          Architectural Paradigms of Multi-Agent Systems and Agentic AI in Intelligent Manufacturing Systems, A Systematic Literature Review.
        </li>
        <li>
          Research objective: How have agent architectures evolved in manufacturing systems, and what architectural design principles emerge from this evolution that are relevant for manufacturing control?
        </li>
        </>
      ),
    },
    {
      company: "NeuroOceans AI",
      link: "https://neurooceans.ai/",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      // logo: ParabolLogo,
      start: "Jan 2024",
      end: "Mar 2024",
      description: (
        <>
        <li>
          Finetuned multiple audiovisual deepfake detection models and evaluated them on performance metrics.
        </li>
        <li>
          Led the entire pipeline development, from dataset collection and preprocessing to model training and evaluation.
        </li>
        </>
      ),
    },
    {
      company: "Learners.ai",
      link: "https://www.learners.ai/",
      badges: ["Remote"],
      title: "Solution Analyst",
      // logo: ParabolLogo,
      start: "Jul 2023",
      end: "Dec 2023",
      description: (
        <>
        <li>
          Used LangChain and Pinecone to create a GPT-powered RAG chatbot that takes a sales call transcript and generates a sales proposal.
        </li>
        <li>
          Developed a copywriter chatbot using LangChain Agents, tool calling, and a curated knowledge base.
        </li>
        <li>
          Conducted Data Import Analysis for data transfer across CRMs, using excel, SQL and Python.
        </li>
        <li>
          Created Ad campaign effectiveness dashboards in HubSpot and Databox.
        </li>
        </>
      ),
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    {
      company: "Robotics and Intelligent Systems Engineering (RISE) Laboratory",
      link: "https://smme.nust.edu.pk/department-page/lab-facilities-4/",
      badges: [],
      title: "Undergraduate Researcher",
      // logo: NSNLogo,
      start: "2021",
      end: "2022",
      description: (
        <>
        <li>
          Engaged in a senior year research project, providing bi-weekly presentations to a supervisory panel.
        </li>
        <li>
          Developed a control algorithm for a mobile robot using Arduino, ultrasonic sensors, IR sensors, and encoders.
        </li>
        <li>
          Successfully secured funding through IGNITE National Grassroots Research Initiative 2022 and obtained funding for AHFE Conference registration fees under the Pakistan and European Unions Horizon 2020 ENHANCE project.
        </li>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "LLMs",
    "Agentic AI",
    "Multi-Agent Systems",
    "Prompt Engineering",
    "Natural Language Processing",
    "Graph Analytics",
    "Neo4j",
    "Cypher",
    "LangChain",
    "Computer Vision",
    "Machine Learning",
    "Data Science",
    "ROS2",
    "English (C2, IELTS 8.5)",
  ],
  projects: [
    {
      title: "Autonomous Mobile Robot",
      techStack: [
        "Robotics",
        "Arduino Programming",
        "Controls",
        "Design"
      ],
      description: "A Chain-Driven Live Roller Mechanism for Loading and Unloading Packages on Autonomous Mobile Robots in Warehouses",
      // logo: ConsultlyLogo,
      link: {
        label: "research paper link",
        href: "http://doi.org/10.54941/ahfe1001600",
      },
    },
    {
      title: "Image2Audio app",
      techStack: ["OpenAI API", "HuggingFace", "LangChain", "Streamlit", "TTS"],
      description: "Users upload an image, the app generates a caption for the image, creates a short story based on the caption, and then converts the story into audio format.",
      // logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Ammar2k/image_to_audio-story",
      },
    },
    {
      title: "Q&A Chatbot on private data",
      techStack: ["OpenAI API", "LangChain", "Vector Database", "Blogpost"],
      description:
        "Blogpost on Retrieval Augmented Generation (RAG) using ChromaDB, GPT wrapped around LangChain, and private data.",
      // logo: JarockiMeLogo,
      link: {
        label: "medium.com",
        href: "https://medium.com/@muhammad2000ammar/building-a-q-a-chatbot-on-private-data-ba1af4a9a4dc",
      },
    },
    {
      title: "Scene Classification",
      techStack: ["PyTorch", "Computer Vision", "Gradio"],
      description:
        "Finetuned ViT pre-trained on ImageNet for Kaggle Intel Classification Challenge.",
      // logo: Minimal,
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/spaces/Ammar2k/scene_recognition/",
      },
    },
    {
      title: "Podcast Summarizer",
      techStack: ["OpenAI API", "Whisper", "Audio2Text", "Streamlit"],
      description:
        "Converts podcast audio to text using whisper, uses GPT-3.5 to generate a summary, and uses wikipedia API to display additional information.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Ammar2k/podcast_chatbot",
      },
    },
    {
      title: "Transfer Learning with PyTorch",
      techStack: ["PyTorch", "Vision Transformer", "Blogpost"],
      description:
        "Scene classification by fine-tuning pre-trained Vision Transformers (ViT) guide.",
      // logo: JarockiMeLogo,
      link: {
        label: "medium.com",
        href: "https://medium.com/@muhammad2000ammar/mastering-transfer-learning-with-pytorch-d1521f3a6a6e",
      },
    },
  //   {
  //     title: "Year progress",
  //     techStack: ["Side Project", "TypeScript", "Next.js"],
  //     description: "Tracks current year progress and displays a countdown",
  //     logo: YearProgressLogo,
  //     link: {
  //       label: "getyearprogress.com",
  //       href: "https://getyearprogress.com/",
  //     },
  //   },
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  //   {
  //     title: "Evercast",
  //     techStack: [
  //       "Lead Frontend Developer",

  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Creative collaboration platform that combines video conferencing and HD media streaming",
  //     logo: EvercastLogo,
  //     link: {
  //       label: "evercast.us",
  //       href: "https://www.evercast.us/",
  //     },
  //   },
  //   {
  //     title: "Mobile Vikings",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for leading virtual mobile operator in Poland",
  //     logo: MobileVikingsLogo,
  //     link: {
  //       label: "mobilevikings.pl",
  //       href: "https://mobilevikings.pl/",
  //     },
  //   },
  //   {
  //     title: "Howdy",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Howdy is a place for you to join communities you care about",
  //     logo: Howdy,
  //     link: {
  //       label: "play.google.com",
  //       href: "https://howdy.co/",
  //     },
  //   },
  //   {
  //     title: "Tastycloud",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //     // logo: TastyCloudLogo,
  //     link: {
  //       label: "tastycloud.fr",
  //       href: "https://www.tastycloud.fr/",
  //     },
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     // logo: AmbitLogo,
  //   },
  //   {
  //     title: "Bim",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with booking a table in a restaurants",
  //     logo: BimLogo,
  //   },
  //   {
  //     title: "Canal Digital GO",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Video streaming mobile application for Canal Digital subscribers",
  //     logo: CDGOLogo,
  //   },
  ],
  publications: [
    {
      title:
        "A Chain-Driven Live Roller Mechanism for Loading and Unloading Packages on Autonomous Mobile Robots in Warehouses.",
      description:
        "Applied Human Factors and Ergonomics (AHFE) Conference, 2022.",
      tags: ["Conference Paper"],
      link: "http://doi.org/10.54941/ahfe1001600",
    },
    {
      title:
        "Prompt-to-Metric: LLMs and Graph Algorithms for Platform Ecosystem Health Monitoring.",
      description:
        "Explores combining LLMs with graph analytics to monitor platform ecosystems.",
      tags: ["Research Paper", "LLMs"],
      link: "https://doi.org/10.64552/wipiec.v11i1.97",
    },
    {
      title:
        "Towards Data-Driven Real-Time Performance Monitoring of Platform Ecosystems.",
      description:
        "APSEC 2025 Software Engineering in Practice track.",
      tags: ["Conference Paper"],
      link: "http://doi.org/10.1109/APSEC66846.2025.00113",
    },
    {
      title:
        "Health and Performance Indicators of Platform Ecosystems: a systematic literature review.",
      description:
        "Systematic literature review outlining health and performance indicators for platform ecosystems.",
      tags: ["Systematic Review"],
      link: "http://doi.org/10.1109/SDS68531.2025.11409729",
    },
    {
      title:
        "Schema Injection Strategies for LLM-Based Text-to-Cypher Query Translation: An Empirical Study.",
      description:
        "Studies schema injection strategies for LLM-based Text-to-Cypher query translation. Won Best Paper Award.",
      tags: ["LLMs", "Best Paper Award"],
    },
  ],
  courses: [
    {
      title: "Machine Learning Specialization by DeepLearning.AI",
      techStack: ["ML", "numpy", "pandas", "matplotlib"],
      description:
        "Introduces foundational ML concepts. Covers everything from data analytics using pandas to classification using Neural Nets.",
      link: {
        label: "Certificate Link",
        href: "https://www.coursera.org/account/accomplishments/specialization/F7QDWR9FL7Q5",
      },
    },
    {
      title: "Natural Language Processing Specialization by DeepLearning.AI",
      techStack: ["NLP", "LSTMs", "GRUs", "Transformers"],
      description:
        "Deep Dive into NLP. Starts from Classification and Vector spaces, coverts probabilistic models, and eventually moves on to Deep Neural Nets.",
      link: {
        label: "Certificate Link",
        href: "https://www.coursera.org/account/accomplishments/specialization/JT69WWC2QX8U",
      },
    },
    {
      title: "PyTorch for Deep Learning by Zero-to-Mastery",
      techStack: ["PyTorch", "Computer Vision"],
      description:
        "Complete guide to PyTorch from the fundamentals. Covers everything from the basics to building a Vision Transformer from scratch.",
      link: {
        label: "Certificate Link",
        href: "https://ude.my/UC-848efdab-fe67-45c4-87b3-afdfa21a235b/",
      },
    },
    {
      title: "Generative AI with Large Language Models by DeepLearning.AI",
      techStack: ["Generative AI", "LLMs"],
      description:
        "Covers LLMs for text generation, from pre-training to instruction fine-tuning to RLHF.",
      link: {
        label: "Certificate Link",
        href: "https://www.coursera.org/account/accomplishments/verify/D3L539HPAWU8",
      },
    },
    {
      title: "Robotics: Aerial Robotics by UPenn",
      techStack: ["Motion Planning", "Robotics", "Quadcopter"],
      description:
        "Mechanics of flight and design of quadrotors flying robots. Control and Planning for three dimensional flights.",
      link: {
        label: "Certificate Link",
        href: "https://www.coursera.org/account/accomplishments/verify/K6HM3M6EF44F",
      },
    },
    {
      title: "ROS2 For Beginners (ROS Foxy, Humble - 2024)",
      techStack: ["ROS2", "Robotics", "Linux", "Python"],
      description:
        "Programming fundamentals of Robot Operating System 2 (ROS2) in Python.",
      link: {
        label: "Certificate Link",
        href: "https://www.udemy.com/certificate/UC-b3c56674-3a0f-46a7-b94a-0648b477e856/",
      },
    },
  ],
} as const;
