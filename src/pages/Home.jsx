import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HeroSlider from '../components/Slider';

function Home() {
  const navigate = useNavigate();
  const [detailOverlay, setDetailOverlay] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const testimonialScrollRef = useRef(null);
  const [testimonialModal, setTestimonialModal] = useState(null);
  const whyCardsRef = useRef(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const scrollWhyCards = (direction) => {
    if (whyCardsRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        whyCardsRef.current.scrollLeft -= scrollAmount;
      } else {
        whyCardsRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const scrollTestimonials = (direction) => {
    if (testimonialScrollRef.current) {
      const scrollAmount = 420;
      if (direction === 'left') {
        testimonialScrollRef.current.scrollLeft -= scrollAmount;
      } else {
        testimonialScrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const testimonialData = {
    kamya: {
      name: "Kamya Malhotra",
      role: "Statistical Analyst",
      company: "Tech Analytics Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "BraynupAI's curriculum is the best curriculum available online.",
      fullStory: "My journey with BraynupAI has been absolutely transformative. Coming from a non-tech background, I was skeptical about transitioning into data science and AI. However, the comprehensive curriculum, supportive mentors, and hands-on projects made the learning process incredibly smooth and engaging.",
      highlights: [
        "Completed Advanced AI & Data Science program in 6 months",
        "Built 8+ real-world projects including predictive analytics models",
        "Secured position at Tech Analytics Inc with 180% salary increase",
        "Received Industry-recognized certification in Statistical Analysis",
        "Now leading a team of 5 data analysts"
      ],
      beforeAfter: {
        before: "Marketing Executive with no coding experience",
        after: "Statistical Analyst leading AI-driven projects"
      },
      testimonial: "BraynupAI's program is engaging, comprehensive, and student-centered. The hands-on projects and AI integration sets it apart from other platforms. If you're serious about accelerating your tech career and mastering cutting-edge technologies, you cannot ask for a better platform than BraynupAI. The mentors are always available, the community is supportive, and the curriculum is constantly updated with the latest industry trends."
    },
    manish: {
      name: "Manish Singh",
      role: "DevOps Engineer",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "Exceptional learning experience! The DevOps with AI course taught me cutting-edge automation techniques.",
      fullStory: "I was working as a system administrator when I discovered BraynupAI's DevOps program. The curriculum was exactly what I needed to level up my career. The instructors are industry veterans who bring real-world scenarios into every lesson.",
      highlights: [
        "Transitioned from SysAdmin to DevOps Engineer in 5 months",
        "Learned Kubernetes, Docker, Jenkins, and AI-powered monitoring",
        "Deployed 12+ production-grade CI/CD pipelines",
        "Landed dream job at Netflix with 200% salary hike",
        "Now managing cloud infrastructure for 100M+ users"
      ],
      beforeAfter: {
        before: "System Administrator earning ₹6 LPA",
        after: "DevOps Engineer at Netflix earning ₹18 LPA"
      },
      testimonial: "The DevOps with AI course is a game-changer. I learned automation, containerization, and cloud technologies from scratch. The live projects simulated real production environments perfectly. The placement support was outstanding - they connected me directly with Netflix recruiters. Now I'm working on cutting-edge infrastructure that serves millions of users daily!"
    },
    karan: {
      name: "Karan Mehta",
      role: "Blockchain Developer",
      company: "Coinbase",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The Blockchain Development course was comprehensive and practical.",
      fullStory: "As a software developer interested in Web3 and blockchain, I struggled to find quality learning resources. BraynupAI's blockchain program covered everything from smart contracts to DeFi protocols with hands-on projects.",
      highlights: [
        "Built 5 full-stack blockchain applications",
        "Mastered Solidity, Web3.js, and Ethereum development",
        "Created NFT marketplace and DeFi lending protocol",
        "Secured position at Coinbase in just 4 months",
        "Contributing to cryptocurrency exchange development"
      ],
      beforeAfter: {
        before: "Full Stack Developer with no blockchain knowledge",
        after: "Blockchain Developer at Coinbase"
      },
      testimonial: "BraynupAI's Blockchain course is the most comprehensive program I've found. The instructors are passionate, the community is incredibly supportive, and the projects are real-world ready. I built an NFT marketplace, a DeFi protocol, and even a DAO governance system. The career support helped me land my dream job at Coinbase. Highly recommend to anyone serious about blockchain!"
    },
    divya: {
      name: "Divya Rao",
      role: "Product Manager",
      company: "Salesforce",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "BraynupAI's Product Management with AI course gave me the skills to transition from engineering to product.",
      fullStory: "I was a software engineer for 4 years but always wanted to move into product management. BraynupAI's PM course with AI integration was exactly what I needed. The case studies were from real companies, and we worked on actual product launches.",
      highlights: [
        "Transitioned from Engineering to Product Management",
        "Led 3 product launches during the course",
        "Learned AI-powered analytics and user research",
        "Received job offers from 5 top companies",
        "Now managing $10M+ product portfolio at Salesforce"
      ],
      beforeAfter: {
        before: "Software Engineer seeking career pivot",
        after: "Senior Product Manager at Salesforce"
      },
      testimonial: "The Product Management course transformed my career trajectory. We learned product strategy, roadmapping, user research, and how to leverage AI for data-driven decisions. The case studies from companies like Airbnb, Uber, and Netflix were eye-opening. The career coaches helped me craft a compelling PM narrative. Now I'm managing multi-million dollar products at Salesforce. Worth every penny!"
    },
    priya: {
      name: "Priya Sharma",
      role: "ML Engineer",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The AI & Machine Learning program exceeded all my expectations!",
      fullStory: "After completing my engineering degree, I wanted to specialize in AI but didn't know where to start. BraynupAI's ML program provided a structured path from basics to advanced topics like deep learning and NLP.",
      highlights: [
        "Built 10+ ML models including recommendation systems",
        "Completed capstone project on computer vision",
        "Published 2 research papers during the program",
        "Joined Amazon as ML Engineer with ₹32 LPA package",
        "Working on Alexa's natural language processing"
      ],
      beforeAfter: {
        before: "Fresh graduate with theoretical ML knowledge",
        after: "ML Engineer at Amazon working on Alexa"
      },
      testimonial: "BraynupAI's ML curriculum is world-class. From neural networks to transformer models, everything is taught with practical examples. The mentors are experienced researchers who guided my capstone project to publication. The job preparation included mock interviews with FAANG engineers. Today I'm working on Alexa's brain at Amazon!"
    },
    rahul: {
      name: "Rahul Verma",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "From zero coding knowledge to Microsoft engineer in 8 months!",
      fullStory: "I was working in finance with zero programming experience. BraynupAI's Full Stack program started from absolute basics and gradually built up to advanced concepts. The structured curriculum and patient mentors made all the difference.",
      highlights: [
        "Learned MERN stack from scratch",
        "Built 15+ full-stack applications",
        "Contributed to 5 open-source projects",
        "Landed job at Microsoft Azure team",
        "Now earning 10x my previous salary"
      ],
      beforeAfter: {
        before: "Finance professional with no coding background",
        after: "Full Stack Developer at Microsoft Azure"
      },
      testimonial: "People said it's impossible to break into tech from finance, but BraynupAI proved them wrong. The curriculum is beginner-friendly yet comprehensive. I learned React, Node.js, databases, and cloud technologies. The career services team helped me prepare for Microsoft interviews. Today I'm building Azure cloud solutions!"
    },
    ananya: {
      name: "Ananya Gupta",
      role: "Data Scientist",
      company: "Google",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The Data Science program transformed my career completely!",
      fullStory: "As a mathematics graduate, I wanted to apply my skills in the real world. BraynupAI's Data Science program provided the perfect bridge between theory and practice. The projects were challenging and industry-relevant.",
      highlights: [
        "Mastered Python, SQL, and advanced statistics",
        "Built predictive models for 10+ business use cases",
        "Completed capstone on healthcare analytics",
        "Joined Google's data science team with ₹45 LPA",
        "Published insights featured in tech conferences"
      ],
      beforeAfter: {
        before: "Mathematics graduate with limited programming skills",
        after: "Data Scientist at Google working on search algorithms"
      },
      testimonial: "BraynupAI's Data Science curriculum is comprehensive and cutting-edge. From statistical modeling to deep learning, every concept was taught with real-world applications. The mentors are industry leaders who provided invaluable career guidance. The placement support was exceptional - multiple FAANG offers! Now I'm analyzing petabytes of data at Google!"
    },
    arjun: {
      name: "Arjun Patel",
      role: "Cybersecurity Engineer",
      company: "Cisco",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "Best cybersecurity program I've ever enrolled in!",
      fullStory: "After 3 years in IT support, I wanted to specialize in cybersecurity. BraynupAI's Ethical Hacking & Security program covered everything from network security to penetration testing with hands-on labs.",
      highlights: [
        "Earned CEH and OSCP certifications",
        "Conducted 20+ penetration testing projects",
        "Built security automation tools using Python",
        "Secured position at Cisco with 250% salary increase",
        "Now protecting enterprise networks worldwide"
      ],
      beforeAfter: {
        before: "IT Support Technician earning ₹4 LPA",
        after: "Cybersecurity Engineer at Cisco earning ₹14 LPA"
      },
      testimonial: "The Cybersecurity program is incredibly thorough. We learned penetration testing, threat analysis, incident response, and security architecture. The lab environment simulated real-world attacks perfectly. The instructors are certified experts with decades of experience. The career support helped me land at Cisco. If you're serious about cybersecurity, this is the program!"
    },
    sneha: {
      name: "Sneha Reddy",
      role: "UI/UX Designer",
      company: "Adobe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The UI/UX with AI course elevated my design career to new heights!",
      fullStory: "I was a freelance graphic designer struggling to break into UX. BraynupAI's UI/UX program with AI-powered design tools taught me user research, prototyping, and how to create data-driven designs.",
      highlights: [
        "Redesigned 8 complete applications from scratch",
        "Learned Figma, Adobe XD, and AI design tools",
        "Built portfolio that got 15+ interview calls",
        "Joined Adobe's Creative Cloud team",
        "Designing for millions of creative professionals"
      ],
      beforeAfter: {
        before: "Freelance graphic designer with inconsistent income",
        after: "Senior UI/UX Designer at Adobe Creative Cloud"
      },
      testimonial: "This UI/UX program is world-class! We learned user psychology, interaction design, prototyping, and usability testing. The AI tools for design automation were game-changing. The portfolio review sessions were incredibly valuable. The instructors are experienced designers from top companies. Now I'm designing tools used by millions at Adobe!"
    },
    vikram: {
      name: "Vikram Singh",
      role: "Cloud Architect",
      company: "AWS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The Cloud Computing program prepared me perfectly for AWS Solutions Architect role!",
      fullStory: "I had basic server management experience but wanted to master cloud technologies. BraynupAI's Cloud program covered AWS, Azure, GCP, and enterprise architecture patterns with extensive hands-on projects.",
      highlights: [
        "Earned AWS Solutions Architect Professional certification",
        "Designed and deployed 12+ cloud infrastructure projects",
        "Mastered Terraform, CloudFormation, and Kubernetes",
        "Joined Amazon Web Services with ₹38 LPA package",
        "Architecting solutions for Fortune 500 clients"
      ],
      beforeAfter: {
        before: "System Administrator with basic cloud knowledge",
        after: "Cloud Architect at AWS serving enterprise clients"
      },
      testimonial: "BraynupAI's Cloud Computing program is incredibly comprehensive. We built multi-region deployments, implemented disaster recovery, and designed scalable architectures. The instructors are AWS certified professionals who teach best practices. The hands-on labs were production-grade. The career coaching helped me ace the AWS interviews. Highly recommended for cloud aspirants!"
    },
    neha: {
      name: "Neha Kapoor",
      role: "Software Engineer",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "From complete beginner to Meta engineer - BraynupAI made it possible!",
      fullStory: "I was a biology teacher who always wanted to learn coding. At 32, I decided to take the leap. BraynupAI's Software Engineering program started from absolute basics and took me to advanced system design.",
      highlights: [
        "Learned Python, Java, and JavaScript from scratch",
        "Built 20+ projects including social media clone",
        "Mastered data structures and algorithms",
        "Cracked Meta interviews on first attempt",
        "Now working on Instagram backend with ₹42 LPA"
      ],
      beforeAfter: {
        before: "Biology Teacher with zero programming experience",
        after: "Software Engineer at Meta working on Instagram"
      },
      testimonial: "Age is just a number when you have the right guidance! BraynupAI's curriculum is perfectly structured for beginners. The DSA course, system design sessions, and mock interviews were game-changers. The instructors believed in me when I doubted myself. Today I'm building features used by billions at Meta!"
    },
    aditya: {
      name: "Aditya Sharma",
      role: "AI Research Engineer",
      company: "OpenAI",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The Deep Learning specialization helped me join OpenAI's research team!",
      fullStory: "As a PhD dropout, I was struggling to break into AI research. BraynupAI's advanced Deep Learning course with research methodology gave me the skills and confidence I needed.",
      highlights: [
        "Mastered Transformers, GANs, and Reinforcement Learning",
        "Published 3 papers in top AI conferences",
        "Built custom LLM from scratch as capstone",
        "Received offers from DeepMind, OpenAI, and Anthropic",
        "Now researching next-gen AI models at OpenAI with $180k package"
      ],
      beforeAfter: {
        before: "PhD dropout struggling with career direction",
        after: "AI Research Engineer at OpenAI"
      },
      testimonial: "This program is at the cutting edge of AI research. We implemented papers from scratch, conducted novel experiments, and learned from researchers who've actually published at NeurIPS and ICML. The research mentorship was invaluable. Now I'm working alongside the best minds in AI at OpenAI!"
    },
    pooja: {
      name: "Pooja Desai",
      role: "Mobile App Developer",
      company: "Uber",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The React Native course transformed me into a professional mobile developer!",
      fullStory: "I was building small freelance websites when I discovered mobile development through BraynupAI. The course covered iOS, Android, and cross-platform development comprehensively.",
      highlights: [
        "Built 12 mobile apps from scratch",
        "Learned React Native, Flutter, and Swift",
        "Published 3 apps on App Store with 50k+ downloads",
        "Joined Uber's mobile team with ₹28 LPA",
        "Now developing features for 100M+ riders"
      ],
      beforeAfter: {
        before: "Freelance web developer earning ₹3 LPA",
        after: "Mobile App Developer at Uber earning ₹28 LPA"
      },
      testimonial: "The Mobile Development course covers everything - UI/UX, state management, API integration, testing, and deployment. The projects were production-ready apps that impressed interviewers. The career support helped me negotiate a great package at Uber. Now I'm shipping features to millions of users daily!"
    },
    rohit: {
      name: "Rohit Kumar",
      role: "Game Developer",
      company: "Unity Technologies",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "Turned my passion for gaming into a career at Unity!",
      fullStory: "I was obsessed with games but didn't know how to build them. BraynupAI's Game Development program taught me Unity, Unreal Engine, and game design principles from industry veterans.",
      highlights: [
        "Created 8 complete games including 3D multiplayer",
        "Mastered Unity, C#, and game physics",
        "Published indie game with 100k+ downloads",
        "Won game development competition sponsored by Unity",
        "Now building game engine tools at Unity with $95k salary"
      ],
      beforeAfter: {
        before: "Gamer with no development skills",
        after: "Game Developer at Unity Technologies"
      },
      testimonial: "This course is a dream come true for gamers! We learned everything - graphics programming, physics engines, AI behaviors, multiplayer networking. The instructors are professional game developers who shared industry secrets. My portfolio game got me into Unity. Now I'm working on tools used by millions of game developers!"
    },
    ishita: {
      name: "Ishita Agarwal",
      role: "Quantum Computing Researcher",
      company: "IBM Quantum",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The Quantum Computing course opened doors to cutting-edge research at IBM!",
      fullStory: "As a physics graduate, I was fascinated by quantum computing but couldn't find quality resources. BraynupAI's quantum program bridged theory and practice perfectly.",
      highlights: [
        "Learned Qiskit, quantum algorithms, and error correction",
        "Implemented Shor's and Grover's algorithms",
        "Completed research internship at IBM Quantum",
        "Published paper on quantum machine learning",
        "Joined IBM Quantum team with ₹35 LPA package"
      ],
      beforeAfter: {
        before: "Physics graduate with only theoretical knowledge",
        after: "Quantum Computing Researcher at IBM Quantum"
      },
      testimonial: "Quantum computing is the future, and BraynupAI is preparing students for it! The course covers quantum mechanics, gate operations, quantum algorithms, and real hardware access. The instructors are quantum researchers who explain complex concepts beautifully. Now I'm working on actual quantum computers at IBM!"
    },
    sameer: {
      name: "Sameer Joshi",
      role: "IoT Solutions Architect",
      company: "Siemens",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      rating: 5,
      shortReview: "The IoT & Embedded Systems course prepared me for Industry 4.0!",
      fullStory: "I was an electrical engineer wanting to transition into smart systems. BraynupAI's IoT program covered hardware, embedded programming, cloud integration, and industrial applications.",
      highlights: [
        "Built 15+ IoT projects from smart home to industrial monitoring",
        "Mastered Arduino, Raspberry Pi, MQTT, and AWS IoT",
        "Designed predictive maintenance system for factories",
        "Earned IoT certifications from AWS and Microsoft",
        "Joined Siemens as IoT Architect with ₹32 LPA"
      ],
      beforeAfter: {
        before: "Electrical Engineer with hardware-only skills",
        after: "IoT Solutions Architect at Siemens"
      },
      testimonial: "This course is perfect for engineers entering Industry 4.0! We learned sensor integration, data pipelines, edge computing, and industrial protocols. The capstone project on predictive maintenance impressed Siemens recruiters. Now I'm architecting smart factory solutions for global manufacturers!"
    }
  };

  const openPersonModal = (person) => {
    setTestimonialModal(person);
  };

  const closeTestimonialModal = () => {
    setTestimonialModal(null);
  };

  const phaseDetails = {
    foundation: {
      title: "Week 1-2: Foundation & Onboarding",
      icon: "🎓",
      description: "Start your journey with a comprehensive orientation program designed to set you up for success.",
      highlights: [
        "Welcome orientation with program overview and expectations",
        "Meet your dedicated mentors and join your learning cohort",
        "Set up complete development environment and tools",
        "Introduction to version control (Git & GitHub)",
        "Basic programming fundamentals refresher",
        "Time management and study strategies",
        "Access to learning resources and community platforms",
        "First coding assignment to assess baseline skills",
        "Weekly check-ins and progress tracking setup"
      ],
      tools: ["VS Code", "Git", "GitHub", "Slack", "Zoom"],
      outcomes: "By the end of Week 2, you'll have a fully configured development environment, understand the program structure, and be ready to dive into intensive skill development with a supportive community behind you.",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      ]
    },
    core: {
      title: "Week 3-8: Core Skills Development",
      icon: "💻",
      description: "Dive deep into your chosen specialization with intensive hands-on training and real-world projects.",
      highlights: [
        "50+ live interactive coding sessions with expert instructors",
        "Master frontend (React, Vue) or backend (Node.js, Python, Django) technologies",
        "In-depth data structures and algorithms training",
        "Build 7 progressive mini-projects from scratch",
        "Code reviews and peer programming sessions",
        "Weekly assessments to track your progress",
        "Debug and problem-solving workshops",
        "Introduction to testing and quality assurance",
        "Agile development methodologies"
      ],
      tools: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"],
      outcomes: "Complete this phase with strong foundational skills in your chosen tech stack, a portfolio of 7 working projects, and the confidence to tackle complex programming challenges independently.",
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
      ]
    },
    advanced: {
      title: "Week 9-16: Advanced Concepts & Specialization",
      icon: "🚀",
      description: "Master cutting-edge technologies and advanced architectural patterns used by industry leaders.",
      highlights: [
        "AI/ML integration with TensorFlow and PyTorch basics",
        "Cloud architecture on AWS, Azure, or Google Cloud",
        "Microservices architecture and containerization",
        "Advanced React patterns and state management (Redux, Context)",
        "RESTful API design and GraphQL",
        "WebSockets and real-time applications",
        "Security best practices and authentication (OAuth, JWT)",
        "Performance optimization and scalability",
        "CI/CD pipelines and DevOps fundamentals"
      ],
      tools: ["AWS", "Kubernetes", "Redis", "GraphQL", "TensorFlow", "Jenkins"],
      outcomes: "Emerge as an advanced developer capable of designing scalable systems, implementing modern architectural patterns, and working with enterprise-level technologies.",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ]
    },
    capstone: {
      title: "Week 17-20: Capstone & Portfolio Development",
      icon: "📁",
      description: "Build your flagship project that showcases all your skills and creates a stunning professional portfolio.",
      highlights: [
        "Design and develop a complete full-stack application from scratch",
        "Implement all modern best practices and design patterns",
        "Create comprehensive project documentation",
        "Build a professional portfolio website showcasing your work",
        "Write compelling project descriptions and case studies",
        "Resume building with ATS optimization",
        "LinkedIn profile optimization for recruiters",
        "GitHub profile enhancement and README best practices",
        "Present your capstone project to peers and mentors"
      ],
      tools: ["React", "Node.js", "AWS", "MongoDB", "Git", "Figma"],
      outcomes: "Graduate with a production-ready capstone project deployed live, a professional portfolio that stands out to employers, and all materials needed to land interviews at top companies.",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
      ]
    },
    interview: {
      title: "Week 21-24: Interview Prep & Job Placement",
      icon: "🎯",
      description: "Master the interview process with intensive preparation, mock interviews, and direct company connections.",
      highlights: [
        "Data structures & algorithms interview training (150+ problems)",
        "System design interviews for senior positions",
        "Behavioral interview preparation with STAR method",
        "15+ mock interviews with experienced interviewers",
        "Company-specific interview preparation guides",
        "Salary negotiation strategies and techniques",
        "Direct referrals to 50+ partner companies",
        "Resume reviews and cover letter optimization",
        "Post-offer negotiation support and guidance"
      ],
      tools: ["LeetCode", "HackerRank", "Pramp", "interviewing.io"],
      outcomes: "Walk into interviews with confidence, having practiced with real interview scenarios. Our alumni report 3-5 job offers on average, with salary increases of 50-150% compared to their previous roles.",
      images: [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
      ]
    },
    career: {
      title: "Week 25+: Career Launch & Ongoing Support",
      icon: "🏆",
      description: "Celebrate your success and continue growing with lifetime career support, networking, and continuous learning.",
      highlights: [
        "Job offer acceptance guidance and contract review",
        "First 90 days on-the-job support and mentorship",
        "Access to exclusive alumni network of 10,000+ professionals",
        "Monthly alumni events, webinars, and workshops",
        "Advanced upskilling courses and certifications",
        "Career transitions and promotions guidance",
        "Startup founding support and resources",
        "Freelancing and consulting opportunities",
        "Lifetime access to all course updates and new content"
      ],
      tools: ["LinkedIn", "Blind", "Levels.fyi", "Company Slack Channels"],
      outcomes: "Join a thriving community of successful alumni, continue learning and growing throughout your career, and give back by mentoring the next generation of developers. Our community is your competitive advantage for life.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
      ]
    }
  };

  return (
    <div className="home">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Quick Features Icons */}
      <section className="quick-features">
        <div className="container">
          <div className="features-row">
            <div className="feature-box">
              <div className="feature-icon-circle">📖</div>
              <div className="feature-text">300+ Online Courses</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">🎯</div>
              <div className="feature-text">Lifetime Access</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">💰</div>
              <div className="feature-text">Value For Money</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">🤝</div>
              <div className="feature-text">Lifetime Support</div>
            </div>
            <div className="feature-box">
              <div className="feature-icon-circle">👥</div>
              <div className="feature-text">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-left">
              <div className="mission-image-wrapper">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" alt="Students learning together" className="mission-image" />
              </div>
            </div>
            <div className="mission-right">
              <div className="section-label">GET TO KNOW ABOUT US</div>
              <h2 className="section-title">Dive into our Online Courses<br />and Ignite Your Learning!</h2>
              <p className="section-description">
                BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
                future-ready education.We specialize in cutting-edge programs that transform careers.
              </p>
              <ul className="mission-features">
                <li>
                  <span className="check-mark">✓</span>
                  Community support to engineer your skills successfully
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  Expert faculty from IIT 30+ years for best guidance
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  Learn the language from top notch programs every week
                </li>
              </ul>
              <button className="cta-btn cta-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="learning-journey-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">YOUR PATH TO SUCCESS</div>
            <h2 className="section-title">Complete Learning <span className="highlight-text">Journey</span></h2>
            <p className="section-description">
              From basics to advanced concepts - follow our structured 24-week program
            </p>
          </div>
          
          <div className="journey-grid">
            {/* Foundation Card */}
            <div className="journey-card" data-phase="foundation">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" 
                    alt="Foundation & Onboarding" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🎓</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 1-2: Foundation & Onboarding</h3>
                  <p className="journey-description">
                    Start with a comprehensive orientation where you'll meet your mentors, join your cohort,
                    and set up your development environment.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Welcome Kit</span>
                    <span className="journey-tag">✓ Mentor Assignment</span>
                    <span className="journey-tag">✓ Dev Environment Setup</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('foundation')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Core Skills Card */}
            <div className="journey-card" data-phase="core">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" 
                    alt="Core Skills Development" 
                    className="journey-image"
                  />
                  <div className="journey-icon">💻</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 3-8: Core Skills Development</h3>
                  <p className="journey-description">
                    Dive deep into your chosen specialization. Master frontend or backend technologies, 
                    data structures, and algorithms.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ 50+ Live Sessions</span>
                    <span className="journey-tag">✓ 7 Mini Projects</span>
                    <span className="journey-tag">✓ Weekly Assessments</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('core')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Card */}
            <div className="journey-card" data-phase="advanced">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                    alt="Advanced Concepts" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🚀</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 9-16: Advanced Concepts & Specialization</h3>
                  <p className="journey-description">
                    Master advanced topics including AI/ML integration, cloud architecture, and microservices.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Advanced Projects</span>
                    <span className="journey-tag">✓ Cloud Deployment</span>
                    <span className="journey-tag">✓ Industry Best Practices</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('advanced')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Capstone Card */}
            <div className="journey-card" data-phase="capstone">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                    alt="Capstone Project" 
                    className="journey-image"
                  />
                  <div className="journey-icon">📁</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 17-20: Capstone & Portfolio Development</h3>
                  <p className="journey-description">
                    Build your flagship capstone project showcasing all your skills. Create professional portfolio.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Capstone Project</span>
                    <span className="journey-tag">✓ Portfolio Website</span>
                    <span className="journey-tag">✓ Resume Building</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('capstone')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Interview Card */}
            <div className="journey-card" data-phase="interview">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" 
                    alt="Interview Preparation" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🎯</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 21-24: Interview Prep & Job Placement</h3>
                  <p className="journey-description">
                    Master the preparation process with mock interviews and coding challenges.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ DSA Interview</span>
                    <span className="journey-tag">✓ Company Referrals</span>
                    <span className="journey-tag">✓ Offer Negotiations</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('interview')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Career Card */}
            <div className="journey-card" data-phase="career">
              <div className="journey-card-inner">
                <div className="journey-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Career Launch" 
                    className="journey-image"
                  />
                  <div className="journey-icon">🏆</div>
                </div>
                <div className="journey-content">
                  <h3 className="journey-title">Week 25+: Career Launch & Ongoing Support</h3>
                  <p className="journey-description">
                    Land your dream job and continue growing with lifetime career support and resources.
                  </p>
                  <div className="journey-tags">
                    <span className="journey-tag">✓ Job Offers</span>
                    <span className="journey-tag">✓ Alumni Network</span>
                    <span className="journey-tag">✓ Lifetime Updates</span>
                  </div>
                  <button className="journey-expand-btn" onClick={() => setDetailOverlay('career')}>
                    ▼ View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">POPULAR COURSES</div>
            <h2 className="section-title">Our Popular Online Courses</h2>
            <p className="section-description">
              Explore our industry-leading courses designed by experts. Master in-demand skills with hands-on projects, 
              personalized mentorship, and lifetime access to course materials.
            </p>
          </div>
          
          <div className="course-categories">
            <button className="category-btn active">
              <span className="category-icon">💻</span>
              <span>AI & Machine Learning</span>
            </button>
            <button className="category-btn">
              <span className="category-icon">🎨</span>
              <span>UI/UX Design</span>
            </button>
            <button className="category-btn">
              <span className="category-icon">⚙️</span>
              <span>DevOps & Cloud</span>
            </button>
            <button className="category-btn">
              <span className="category-icon">🌐</span>
              <span>Web Development</span>
            </button>
            <button className="category-btn">
              <span className="category-icon">📊</span>
              <span>Data Science</span>
            </button>
          </div>
          
          <div className="courses-grid-compact">
            {/* Course 1 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="/src/img.jpg" alt="AI Engineering" />
                <div className="course-badge-compact bestseller">BESTSELLER</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(5.0)</span>
                </div>
                <h3 className="compact-course-title">Complete AI & Machine Learning Bootcamp</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 45 Hours</span>
                  <span className="meta-item">👥 3.5K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹49,999</span>
                  <span className="price-now">₹19,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/ai-ml-bootcamp')}>Enroll Now</button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" alt="Full Stack" />
                <div className="course-badge-compact hot">HOT 🔥</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.9)</span>
                </div>
                <h3 className="compact-course-title">Full Stack Development - MERN Stack</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 60 Hours</span>
                  <span className="meta-item">👥 5.2K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹39,999</span>
                  <span className="price-now">₹14,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/full-stack-mern')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Full Stack Web Development - MERN Stack</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Learn MongoDB, Express, React, Node.js from scratch. Build production-ready web applications.</p>
                <div className="hover-features">
                  <div className="feature">✓ 20+ Web Apps</div>
                  <div className="feature">✓ GitHub Portfolio</div>
                  <div className="feature">✓ Live Projects</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Priya Patel</div>
                    <div className="instructor-role">Senior Developer, Microsoft</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/full-stack-mern')}>Enroll Now - ₹14,999</button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" alt="Data Science" />
                <div className="course-badge-compact new">NEW</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(5.0)</span>
                </div>
                <h3 className="compact-course-title">Data Science & Analytics Masterclass</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 50 Hours</span>
                  <span className="meta-item">👥 2.1K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹44,999</span>
                  <span className="price-now">₹17,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/data-science-masterclass')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Data Science & Analytics Masterclass 2026</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Learn Python, SQL, Statistics, Machine Learning. Transform raw data into actionable insights.</p>
                <div className="hover-features">
                  <div className="feature">✓ 12+ Projects</div>
                  <div className="feature">✓ Real Datasets</div>
                  <div className="feature">✓ Job Support</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Anjali Verma</div>
                    <div className="instructor-role">Data Scientist, Amazon</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/data-science-masterclass')}>Enroll Now - ₹17,999</button>
              </div>
            </div>

            {/* Course 4 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop" alt="DevOps" />
                <div className="course-badge-compact trending">TRENDING</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.8)</span>
                </div>
                <h3 className="compact-course-title">Complete DevOps & Cloud Engineering</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 55 Hours</span>
                  <span className="meta-item">👥 4.3K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹54,999</span>
                  <span className="price-now">₹21,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/devops-cloud')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Complete DevOps & Cloud Engineering Bootcamp</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Master Docker, Kubernetes, AWS, CI/CD, Terraform. Build scalable cloud infrastructure.</p>
                <div className="hover-features">
                  <div className="feature">✓ AWS Certified</div>
                  <div className="feature">✓ CI/CD Pipelines</div>
                  <div className="feature">✓ Real Infrastructure</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Arjun Singh</div>
                    <div className="instructor-role">DevOps Lead, Netflix</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/devops-cloud')}>Enroll Now - ₹21,999</button>
              </div>
            </div>

            {/* Course 5 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="UI/UX Design" />
                <div className="course-badge-compact new">NEW</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.9)</span>
                </div>
                <h3 className="compact-course-title">UI/UX Design - Complete Figma Course</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 40 Hours</span>
                  <span className="meta-item">👥 2.8K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹34,999</span>
                  <span className="price-now">₹12,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/ui-ux-figma')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>UI/UX Design - Complete Figma Course 2026</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Master Figma, design systems, prototyping. Create stunning user interfaces and experiences.</p>
                <div className="hover-features">
                  <div className="feature">✓ 10+ Design Projects</div>
                  <div className="feature">✓ Portfolio Building</div>
                  <div className="feature">✓ Design Systems</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Neha Gupta</div>
                    <div className="instructor-role">Lead Designer, Adobe</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/ui-ux-figma')}>Enroll Now - ₹12,999</button>
              </div>
            </div>

            {/* Course 6 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop" alt="Blockchain" />
                <div className="course-badge-compact hot">HOT 🔥</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.7)</span>
                </div>
                <h3 className="compact-course-title">Blockchain Development & Web3</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 48 Hours</span>
                  <span className="meta-item">👥 1.9K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹59,999</span>
                  <span className="price-now">₹24,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/blockchain-web3')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Blockchain Development & Web3 Masterclass</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Learn Solidity, Smart Contracts, DeFi, NFTs. Build decentralized applications on Ethereum.</p>
                <div className="hover-features">
                  <div className="feature">✓ 5+ DApps</div>
                  <div className="feature">✓ Smart Contracts</div>
                  <div className="feature">✓ NFT Projects</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Karan Mehta</div>
                    <div className="instructor-role">Blockchain Dev, Coinbase</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/blockchain-web3')}>Enroll Now - ₹24,999</button>
              </div>
            </div>

            {/* Course 7 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Digital Marketing" />
                <div className="course-badge-compact bestseller">BESTSELLER</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.8)</span>
                </div>
                <h3 className="compact-course-title">Digital Marketing & SEO Mastery</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 35 Hours</span>
                  <span className="meta-item">👥 6.1K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹29,999</span>
                  <span className="price-now">₹9,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/digital-marketing-seo')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Digital Marketing & SEO Mastery 2026</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Master SEO, Social Media, Google Ads, Email Marketing. Grow businesses online effectively.</p>
                <div className="hover-features">
                  <div className="feature">✓ Campaign Projects</div>
                  <div className="feature">✓ Google Certified</div>
                  <div className="feature">✓ Real Campaigns</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Divya Rao</div>
                    <div className="instructor-role">Marketing Lead, HubSpot</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/digital-marketing-seo')}>Enroll Now - ₹9,999</button>
              </div>
            </div>

            {/* Course 8 */}
            <div className="compact-course-card">
              <div className="compact-course-image">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop" alt="Cybersecurity" />
                <div className="course-badge-compact trending">TRENDING</div>
              </div>
              <div className="compact-course-info">
                <div className="course-rating-compact">
                  <span className="stars-compact">⭐⭐⭐⭐⭐</span>
                  <span className="rating-num">(4.9)</span>
                </div>
                <h3 className="compact-course-title">Cybersecurity & Ethical Hacking</h3>
                <div className="compact-course-meta">
                  <span className="meta-item">📚 52 Hours</span>
                  <span className="meta-item">👥 3.2K</span>
                </div>
                <div className="compact-course-price">
                  <span className="price-original">₹49,999</span>
                  <span className="price-now">₹19,999</span>
                </div>
                <button className="compact-enroll-btn" onClick={() => navigate('/course/cybersecurity-ethical-hacking')}>Enroll Now</button>
              </div>
              
              <div className="hover-detail-card">
                <div className="hover-header">
                  <h3>Cybersecurity & Ethical Hacking Complete Course</h3>
                  <span className="close-hover">✕</span>
                </div>
                <p className="hover-desc">Learn penetration testing, network security, ethical hacking. Become a certified security expert.</p>
                <div className="hover-features">
                  <div className="feature">✓ Penetration Testing</div>
                  <div className="feature">✓ CEH Certified</div>
                  <div className="feature">✓ Real Lab Access</div>
                  <div className="feature">✓ Certificate</div>
                </div>
                <div className="hover-instructor">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop" alt="Instructor" />
                  <div>
                    <div className="instructor-name-hover">Vikram Reddy</div>
                    <div className="instructor-role">Security Expert, Cisco</div>
                  </div>
                </div>
                <button className="hover-enroll-btn" onClick={() => navigate('/course/cybersecurity-ethical-hacking')}>Enroll Now - ₹19,999</button>
              </div>
            </div>
          </div>
          
          <div className="courses-stats-banner">
            <div className="stat-box">
              <div className="stat-number">16,500+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">95%</div>
              <div className="stat-label">Placement Rate</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">150+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
          
          <div className="view-all-section">
            <button className="cta-btn cta-primary large">View All 150+ Courses →</button>
            <p className="courses-note">🎉 New courses added every month • 30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <div className="section-label">ABOUT US</div>
              <h2 className="section-title">
                Empowering <span className="highlight-text">50,000+ Learners</span><br />
                Across 120+ Countries
              </h2>
              <p className="about-description">
                BraynupAI is a revolutionary AI-based IT training platform designed to deliver 
                future-ready education. We specialize in cutting-edge programs that transform careers 
                through innovative AI-powered learning experiences.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Active Students</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Placement Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">120+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">150%</div>
                  <div className="stat-label">Avg. Salary Hike</div>
                </div>
              </div>
            </div>
            <div className="about-video">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/JMUxmLyrhSk"
                  title="BraynupAI Education"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label-bold">WHY CHOOSE US</div>
            <p className="section-subtitle">Discover what makes BraynupAI the perfect choice for your learning journey</p>
            <h2 className="section-title">10 Reasons to Start Your <span className="highlight-text">AI Journey</span> With Us</h2>
          </div>
          
          <div className="why-choose-wrapper" ref={whyCardsRef}>
            <div className="why-grid-animated"> 
            {/* Card 5: Flexible Learning - Most Popular */}
            <div 
              className={`why-card most-popular slide-in ${hoveredCard === 5 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(5)}
              onMouseLeave={handleCardLeave}
            >
              <div className="popular-badge">⭐ Most Popular</div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Flexible Learning" />
              </div>
              <div className="why-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
              <div className="card-hover-details">
                <p className="hover-description">Connect with a diverse community of AI enthusiasts, professionals, and thought leaders. Collaborate on projects, share knowledge, and build lasting professional relationships.</p>
                <ul>
                  <li>50,000+ active learners worldwide</li>
                  <li>24/7 community support and discussions</li>
                  <li>Monthly networking events and webinars</li>
                  <li>Exclusive access to alumni network</li>
                </ul>
                <button className="join-community-btn">Join Community →</button>
              </div>
            </div>
            
            {/* Card 6: Certifications */}
            <div 
              className={`why-card slide-in ${hoveredCard === 6 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(6)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=200&fit=crop" alt="Certifications" />
              </div>
              <div className="why-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain</p>
              <div className="card-hover-details">
                <p className="hover-description">Earn globally recognized certifications that validate your skills and boost your career prospects with blockchain-verified credentials.</p>
                <ul>
                  <li>Blockchain verified certificates</li>
                  <li>Industry-recognized credentials</li>
                  <li>Shareable on LinkedIn & platforms</li>
                  <li>Enhance your professional portfolio</li>
                </ul>
                <button className="join-community-btn">Get Certified →</button>
              </div>
            </div>
            
            {/* Card 7: Cutting-Edge Curriculum */}
            <div 
              className={`why-card slide-in ${hoveredCard === 7 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(7)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" alt="Cutting-Edge Curriculum" />
              </div>
              <div className="why-icon">�</div>
              <h3>Cutting-Edge Curriculum</h3>
              <p>Stay ahead with latest AI trends, tools, and technologies</p>
              <div className="card-hover-details">
                <p className="hover-description">Master the latest AI technologies and industry-relevant tools with our continuously updated curriculum designed by experts.</p>
                <ul>
                  <li>Latest AI technologies & frameworks</li>
                  <li>Industry-relevant tools & practices</li>
                  <li>Regularly updated content</li>
                  <li>Future-proof your career skills</li>
                </ul>
                <button className="join-community-btn">Explore Curriculum →</button>
              </div>
            </div>
            
            {/* Card 8: Personalized Mentorship */}
            <div 
              className={`why-card slide-in ${hoveredCard === 8 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(8)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Personalized Mentorship" />
              </div>
              <div className="why-icon">👨‍�</div>
              <h3>Personalized Mentorship</h3>
              <p>One-on-one guidance from dedicated mentors throughout your journey</p>
              <div className="card-hover-details">
                <p className="hover-description">Receive personalized guidance from experienced AI professionals who provide dedicated support throughout your learning journey.</p>
                <ul>
                  <li>1-on-1 mentoring sessions with experts</li>
                  <li>Personalized career guidance & roadmaps</li>
                  <li>Regular feedback on projects & assignments</li>
                  <li>Direct access to industry professionals</li>
                </ul>
                <button className="join-community-btn">Get Mentorship →</button>
              </div>
            </div>
            
            {/* Card 9: Affordable Pricing */}
            <div 
              className={`why-card slide-in ${hoveredCard === 9 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(9)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop" alt="Affordable Pricing" />
              </div>
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Premium education at competitive prices with flexible payment options</p>
              <div className="card-hover-details">
                <p className="hover-description">Access world-class AI education without breaking the bank. We offer competitive pricing with flexible payment plans designed for every budget.</p>
                <ul>
                  <li>Competitive pricing for premium quality</li>
                  <li>Flexible EMI options available</li>
                  <li>No hidden charges or extra fees</li>
                  <li>100% money-back guarantee</li>
                </ul>
                <button className="join-community-btn">View Pricing →</button>
              </div>
            </div>
            
            {/* Card 10: Continuous Updates */}
            <div 
              className={`why-card slide-in ${hoveredCard === 10 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(10)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop" alt="Continuous Updates" />
              </div>
              <div className="why-icon">🔄</div>
              <h3>Continuous Updates</h3>
              <p>Access to new content and features added regularly at no extra cost</p>
              <div className="card-hover-details">
                <p className="hover-description">Stay current with AI's rapid evolution. Get lifetime access to new content, features, and updates added regularly at no additional cost.</p>
                <ul>
                  <li>Regular content updates & new courses</li>
                  <li>New features added continuously</li>
                  <li>Lifetime access with no extra fees</li>
                  <li>Always stay ahead of industry trends</li>
                </ul>
                <button className="join-community-btn">Learn More →</button>
              </div>
            </div>
            
            {/* Card 1: Expert Faculty */}
            <div 
              className={`why-card slide-in ${hoveredCard === 1 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" alt="Expert Faculty" />
              </div>
              <div className="why-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
              <div className="card-hover-details">
                <p className="hover-description">Learn directly from seasoned AI professionals with extensive industry experience and a passion for teaching the next generation of AI experts.</p>
                <ul>
                  <li>10+ years of real-world AI experience</li>
                  <li>Industry veterans from top companies</li>
                  <li>Live doubt-clearing sessions available</li>
                  <li>Practical insights from the field</li>
                </ul>
                <button className="join-community-btn">Meet Faculty →</button>
              </div>
            </div>
            
            {/* Card 2: Job Guarantee */}
            <div 
              className={`why-card slide-in ${hoveredCard === 2 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" alt="Job Guarantee" />
              </div>
              <div className="why-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
              <div className="card-hover-details">
                <p className="hover-description">Launch your AI career with confidence. Our proven placement program connects you with top companies and prepares you for success.</p>
                <ul>
                  <li>95% placement rate with leading firms</li>
                  <li>Partnerships with Google, Microsoft, Amazon</li>
                  <li>Comprehensive interview preparation</li>
                  <li>Professional resume building & review</li>
                </ul>
                <button className="join-community-btn">View Placements →</button>
              </div>
            </div>
            
            {/* Card 3: Hands-On Projects */}
            <div 
              className={`why-card slide-in ${hoveredCard === 3 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(3)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop" alt="Hands-On Projects" />
              </div>
              <div className="why-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build real-world AI projects and deploy to production</p>
              <div className="card-hover-details">
                <p className="hover-description">Gain practical experience by building and deploying real-world AI projects. Create an impressive portfolio that showcases your skills to employers.</p>
                <ul>
                  <li>Build 15+ real-world AI projects</li>
                  <li>Deploy to production environments</li>
                  <li>Professional portfolio development</li>
                  <li>GitHub integration & version control</li>
                </ul>
                <button className="join-community-btn">View Projects →</button>
              </div>
            </div>
            
            {/* Card 4: Global Network */}
            <div 
              className={`why-card slide-in ${hoveredCard === 4 ? 'card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(4)}
              onMouseLeave={handleCardLeave}
            >
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" alt="Global Network" />
              </div>
              <div className="why-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
              <div className="card-hover-details">
                <p className="hover-description">Connect with a diverse community of AI enthusiasts and professionals from around the globe. Build relationships that last beyond your course completion.</p>
                <ul>
                  <li>50,000+ active learners worldwide</li>
                  <li>24/7 community support and discussions</li>
                  <li>Monthly networking events and webinars</li>
                  <li>Exclusive access to alumni network</li>
                </ul>
                <button className="join-community-btn">Join Community →</button>
              </div>
            </div>
            
            {/* Duplicate cards for seamless infinite loop */}
            {/* Card 5 Duplicate */}
            <div className={`why-card most-popular slide-in ${hoveredCard === 5 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(5)} onMouseLeave={handleCardLeave}>
              <div className="popular-badge">⭐ Most Popular</div>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Flexible Learning" /></div>
              <div className="why-icon">⏰</div>
              <h3>Flexible Learning</h3>
              <p>Self-paced courses with lifetime access and 24/7 support</p>
              <div className="card-hover-details">
                <p className="hover-description">Connect with a diverse community of AI enthusiasts, professionals, and thought leaders. Collaborate on projects, share knowledge, and build lasting professional relationships.</p>
                <ul>
                  <li>50,000+ active learners worldwide</li>
                  <li>24/7 community support and discussions</li>
                  <li>Monthly networking events and webinars</li>
                  <li>Exclusive access to alumni network</li>
                </ul>
                <button className="join-community-btn">Join Community →</button>
              </div>
            </div>
            
            {/* Card 6 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 6 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(6)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=200&fit=crop" alt="Certifications" /></div>
              <div className="why-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Industry-recognized certificates verified by blockchain</p>
              <div className="card-hover-details">
                <p className="hover-description">Earn globally recognized certifications that validate your skills and boost your career prospects with blockchain-verified credentials.</p>
                <ul>
                  <li>Blockchain verified certificates</li>
                  <li>Industry-recognized credentials</li>
                  <li>Shareable on LinkedIn & platforms</li>
                  <li>Enhance your professional portfolio</li>
                </ul>
                <button className="join-community-btn">Get Certified →</button>
              </div>
            </div>
            
            {/* Card 7 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 7 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(7)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" alt="Cutting-Edge Curriculum" /></div>
              <div className="why-icon">🚀</div>
              <h3>Cutting-Edge Curriculum</h3>
              <p>Stay ahead with latest AI trends, tools, and technologies</p>
              <div className="card-hover-details">
                <p className="hover-description">Master the latest AI technologies and industry-relevant tools with our continuously updated curriculum designed by experts.</p>
                <ul>
                  <li>Latest AI technologies & frameworks</li>
                  <li>Industry-relevant tools & practices</li>
                  <li>Regularly updated content</li>
                  <li>Future-proof your career skills</li>
                </ul>
                <button className="join-community-btn">Explore Curriculum →</button>
              </div>
            </div>
            
            {/* Card 8 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 8 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(8)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Personalized Mentorship" /></div>
              <div className="why-icon">👨‍🏫</div>
              <h3>Personalized Mentorship</h3>
              <p>One-on-one guidance from dedicated mentors throughout your journey</p>
              <div className="card-hover-details">
                <p className="hover-description">Receive personalized guidance from experienced AI professionals who provide dedicated support throughout your learning journey.</p>
                <ul>
                  <li>1-on-1 mentoring sessions with experts</li>
                  <li>Personalized learning roadmap & goals</li>
                  <li>Career guidance and interview prep</li>
                  <li>Direct access to industry professionals</li>
                </ul>
                <button className="join-community-btn">Meet Mentors →</button>
              </div>
            </div>
            
            {/* Card 9 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 9 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(9)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop" alt="Affordable Pricing" /></div>
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Premium education at competitive prices with flexible payment options</p>
              <div className="card-hover-details">
                <p className="hover-description">Get access to world-class AI education without breaking the bank. Flexible payment plans and scholarships available.</p>
                <ul>
                  <li>Competitive pricing with high value</li>
                  <li>EMI options & flexible payments</li>
                  <li>Scholarships for deserving candidates</li>
                  <li>Money-back guarantee available</li>
                </ul>
                <button className="join-community-btn">View Pricing →</button>
              </div>
            </div>
            
            {/* Card 10 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 10 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(10)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop" alt="Continuous Updates" /></div>
              <div className="why-icon">🔄</div>
              <h3>Continuous Updates</h3>
              <p>Access to new content and features added regularly at no extra cost</p>
              <div className="card-hover-details">
                <p className="hover-description">Stay current with the ever-evolving AI landscape. Get free lifetime updates with new modules and content additions.</p>
                <ul>
                  <li>Regular content updates & additions</li>
                  <li>Access to new courses & modules</li>
                  <li>Lifetime access to all updates</li>
                  <li>No additional charges for new content</li>
                </ul>
                <button className="join-community-btn">Learn More →</button>
              </div>
            </div>
            
            {/* Card 1 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 1 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(1)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" alt="Expert Faculty" /></div>
              <div className="why-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry professionals with 10+ years of AI experience</p>
              <div className="card-hover-details">
                <p className="hover-description">Our instructors are seasoned AI professionals from top tech companies with extensive real-world experience.</p>
                <ul>
                  <li>Faculty from Google, Microsoft, Amazon</li>
                  <li>10+ years of industry experience</li>
                  <li>PhD holders & research scientists</li>
                  <li>Active contributors to AI community</li>
                </ul>
                <button className="join-community-btn">Meet Faculty →</button>
              </div>
            </div>
            
            {/* Card 2 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 2 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(2)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" alt="Job Guarantee" /></div>
              <div className="why-icon">💼</div>
              <h3>Job Guarantee</h3>
              <p>95% placement rate with top companies like Google, Microsoft, Amazon</p>
              <div className="card-hover-details">
                <p className="hover-description">Our proven placement record speaks for itself. Join thousands of alumni working at leading tech companies worldwide.</p>
                <ul>
                  <li>95% placement success rate</li>
                  <li>Average salary: ₹12-18 LPA</li>
                  <li>Hiring partners: 500+ companies</li>
                  <li>Dedicated career support team</li>
                </ul>
                <button className="join-community-btn">View Placements →</button>
              </div>
            </div>
            
            {/* Card 3 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 3 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(3)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop" alt="Hands-On Projects" /></div>
              <div className="why-icon">🚀</div>
              <h3>Hands-On Projects</h3>
              <p>Build real-world AI projects and deploy to production</p>
              <div className="card-hover-details">
                <p className="hover-description">Gain practical experience by building and deploying production-ready AI applications and models from day one.</p>
                <ul>
                  <li>15+ real-world AI projects</li>
                  <li>Deploy models to cloud platforms</li>
                  <li>Build impressive portfolio</li>
                  <li>Work on live industry problems</li>
                </ul>
                <button className="join-community-btn">View Projects →</button>
              </div>
            </div>
            
            {/* Card 4 Duplicate */}
            <div className={`why-card slide-in ${hoveredCard === 4 ? 'card-hovered' : ''}`} onMouseEnter={() => handleCardHover(4)} onMouseLeave={handleCardLeave}>
              <div className="card-image"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" alt="Global Network" /></div>
              <div className="why-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Join 50,000+ learners from 120+ countries worldwide</p>
              <div className="card-hover-details">
                <p className="hover-description">Connect with a diverse community of AI enthusiasts and professionals from around the globe. Build relationships that last beyond your course completion.</p>
                <ul>
                  <li>50,000+ active learners worldwide</li>
                  <li>24/7 community support and discussions</li>
                  <li>Monthly networking events and webinars</li>
                  <li>Exclusive access to alumni network</li>
                </ul>
                <button className="join-community-btn">Join Community →</button>
              </div>
            </div>
          </div>
          </div>
          
          {/* Navigation Buttons for Why Choose Cards */}
          <div className="why-cards-nav">
            <button className="why-nav-btn why-nav-prev" onClick={() => scrollWhyCards('left')} aria-label="Previous cards">
              ←
            </button>
            <button className="why-nav-btn why-nav-next" onClick={() => scrollWhyCards('right')} aria-label="Next cards">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Highlighted Programs */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">OUR PROGRAMS</div>
            <h2 className="section-title">Our <span className="highlight-text">Flagship Programs</span></h2>
            <p className="section-description">Transform Your Career with Industry-Leading AI Courses</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-badge">🔥 Trending</div>
              <div className="program-icon">🎯</div>
              <h3>Digital Marketing with AI</h3>
              <p>Master AI-powered marketing strategies and analytics</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ 50+ Live Projects</li>
                <li>✓ Job Guarantee</li>
              </ul>
              <button className="program-btn">Learn More →</button>
            </div>

            <div className="program-card featured">
              <div className="program-badge special">⭐ Most Popular</div>
              <div className="program-icon">💻</div>
              <h3>Full Stack Engineering with AI</h3>
              <p>Build intelligent web applications with AI integration</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ MERN + AI Stack</li>
                <li>✓ 95% Placement</li>
              </ul>
              <button className="program-btn primary">Enroll Now →</button>
            </div>

            <div className="program-card">
              <div className="program-badge">🚀 New</div>
              <div className="program-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Deep dive into artificial intelligence and ML algorithms</p>
              <ul className="program-features">
                <li>✓ 6 Months Duration</li>
                <li>✓ Advanced AI Projects</li>
                <li>✓ Industry Certification</li>
              </ul>
              <button className="program-btn">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">TESTIMONIALS</div>
            <h2 className="section-title">Student <span className="highlight-text">Success Stories</span></h2>
            <p className="section-description">Hear from our amazing alumni who transformed their careers</p>
          </div>
          
          {/* Featured Large Testimonial */}
          <div className="featured-testimonial-large" onClick={() => openPersonModal('kamya')} style={{cursor: 'pointer'}}>
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text-large">
              "BraynupAI's curriculum is the best curriculum available online. <span style={{color: '#999'}}>BraynupAI's program is engaging, comprehensive, and student-centered. The hands-on projects and AI integration sets it apart from other platforms. If you're serious about accelerating your tech career and mastering cutting-edge technologies,</span> <strong>you cannot ask for a better platform than BraynupAI.</strong>"
            </p>
            <div className="testimonial-author-large">
              <div className="author-avatar-large">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Kamya Malhotra" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <div className="author-details-large">
                <h4>Kamya Malhotra</h4>
                <p>Statistical Analyst</p>
              </div>
            </div>
            <div className="click-hint">Click to read full story →</div>
          </div>
          
          {/* Testimonials Navigation */}
          <div className="testimonials-navigation">
            <button 
              className="testimonial-nav-btn testimonial-nav-left"
              onClick={() => scrollTestimonials('left')}
              aria-label="Previous testimonials"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="testimonials-scroll-container" ref={testimonialScrollRef}>
              <div className="testimonials-grid">
                <div className="testimonial-card" onClick={() => openPersonModal('manish')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "Exceptional learning experience! The DevOps with AI course taught me cutting-edge automation techniques. The live projects and real-world scenarios prepared me perfectly for the industry. Now working at Netflix with a fantastic team!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Manish Singh" />
                    </div>
                    <div className="author-details">
                      <h4>Manish Singh</h4>
                      <p>DevOps Engineer at Netflix</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('karan')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The Blockchain Development course was comprehensive and practical. I built 5 real-world projects that helped me secure a position at Coinbase. The instructors are passionate and the community is incredibly supportive. Highly recommend!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop" alt="Karan Mehta" />
                    </div>
                    <div className="author-details">
                      <h4>Karan Mehta</h4>
                      <p>Blockchain Developer at Coinbase</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('divya')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "BraynupAI's Product Management with AI course gave me the skills to transition from engineering to product. The case studies and real product launches we worked on prepared me for my role at Salesforce. Worth every penny!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="Divya Rao" />
                    </div>
                    <div className="author-details">
                      <h4>Divya Rao</h4>
                      <p>Product Manager at Salesforce</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('priya')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The AI & Machine Learning program exceeded all my expectations! Built 10+ ML models and published 2 research papers. The mentors guided me from basics to advanced topics. Now working on Alexa at Amazon!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Priya Sharma" />
                    </div>
                    <div className="author-details">
                      <h4>Priya Sharma</h4>
                      <p>ML Engineer at Amazon</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('rahul')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "From zero coding knowledge to Microsoft engineer in 8 months! The structured curriculum and patient mentors made all the difference. Built 15+ full-stack apps and now earning 10x my previous salary!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Rahul Verma" />
                    </div>
                    <div className="author-details">
                      <h4>Rahul Verma</h4>
                      <p>Full Stack Developer at Microsoft</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('ananya')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The Data Science program transformed my career completely! Mastered Python, SQL, and ML algorithms. Built predictive models that impressed Google recruiters. Now analyzing petabytes of data at Google with ₹45 LPA package!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Ananya Gupta" />
                    </div>
                    <div className="author-details">
                      <h4>Ananya Gupta</h4>
                      <p>Data Scientist at Google</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('arjun')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "Best cybersecurity program I've ever enrolled in! Earned CEH and OSCP certifications. Conducted 20+ penetration testing projects. Now protecting enterprise networks at Cisco with 250% salary increase!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Arjun Patel" />
                    </div>
                    <div className="author-details">
                      <h4>Arjun Patel</h4>
                      <p>Cybersecurity Engineer at Cisco</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('sneha')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The UI/UX with AI course elevated my design career to new heights! Redesigned 8 complete applications. Learned Figma, Adobe XD, and AI design tools. Now designing for millions at Adobe Creative Cloud!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sneha Reddy" />
                    </div>
                    <div className="author-details">
                      <h4>Sneha Reddy</h4>
                      <p>UI/UX Designer at Adobe</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('vikram')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The Cloud Computing program prepared me perfectly for AWS! Earned Solutions Architect Professional cert. Designed 12+ cloud infrastructures. Now architecting solutions for Fortune 500 clients at AWS with ₹38 LPA!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Vikram Singh" />
                    </div>
                    <div className="author-details">
                      <h4>Vikram Singh</h4>
                      <p>Cloud Architect at AWS</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('neha')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "From complete beginner to Meta engineer - BraynupAI made it possible! Started at 32 as a biology teacher, learned coding from scratch. Now working on Instagram backend with ₹42 LPA. Age is just a number!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Neha Kapoor" />
                    </div>
                    <div className="author-details">
                      <h4>Neha Kapoor</h4>
                      <p>Software Engineer at Meta</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('aditya')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The Deep Learning specialization helped me join OpenAI's research team! Mastered Transformers, GANs, and RL. Published 3 papers in top AI conferences. Now researching next-gen AI models with $180k package!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="Aditya Sharma" />
                    </div>
                    <div className="author-details">
                      <h4>Aditya Sharma</h4>
                      <p>AI Research Engineer at OpenAI</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('pooja')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The React Native course transformed me into a professional mobile developer! Built 12 apps, published 3 on App Store with 50k+ downloads. Now developing features for 100M+ Uber riders with ₹28 LPA!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop" alt="Pooja Desai" />
                    </div>
                    <div className="author-details">
                      <h4>Pooja Desai</h4>
                      <p>Mobile App Developer at Uber</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('rohit')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "Turned my passion for gaming into a career at Unity! Created 8 complete games including 3D multiplayer. Won game dev competition. Now building game engine tools used by millions of developers with $95k salary!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Rohit Kumar" />
                    </div>
                    <div className="author-details">
                      <h4>Rohit Kumar</h4>
                      <p>Game Developer at Unity Technologies</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('ishita')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The Quantum Computing course opened doors to cutting-edge research at IBM! Learned Qiskit, implemented quantum algorithms. Published paper on quantum ML. Now working on actual quantum computers with ₹35 LPA!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop" alt="Ishita Agarwal" />
                    </div>
                    <div className="author-details">
                      <h4>Ishita Agarwal</h4>
                      <p>Quantum Computing Researcher at IBM</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>

                <div className="testimonial-card" onClick={() => openPersonModal('sameer')} style={{cursor: 'pointer'}}>
                  <p className="testimonial-text">
                    "The IoT & Embedded Systems course prepared me for Industry 4.0! Built 15+ IoT projects, designed predictive maintenance systems. Earned AWS and Microsoft IoT certs. Now architecting smart factories at Siemens with ₹32 LPA!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop" alt="Sameer Joshi" />
                    </div>
                    <div className="author-details">
                      <h4>Sameer Joshi</h4>
                      <p>IoT Solutions Architect at Siemens</p>
                    </div>
                  </div>
                  <div className="click-hint-small">Click for full story →</div>
                </div>
              </div>
            </div>

            <button 
              className="testimonial-nav-btn testimonial-nav-right"
              onClick={() => scrollTestimonials('right')}
              aria-label="Next testimonials"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h3 className="partners-title">Trusted by Industry Leaders</h3>
          <div className="partners-grid">
            <div className="partner-item">
              <div className="partner-logo">Google</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Microsoft</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Amazon</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Meta</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Netflix</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Tesla</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked <span className="highlight-text">Questions</span></h2>
            <p className="section-description">Everything you need to know about BraynupAI</p>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>❓ Who can join these courses?</h3>
              <p>UG & PG students, working professionals, entrepreneurs, and anyone interested in AI-powered IT skills. No prior experience required for beginner tracks.</p>
            </div>
            <div className="faq-item">
              <h3>❓ What's included in the course?</h3>
              <p>Live sessions, recorded lectures, hands-on projects, 24/7 mentor support, industry certifications, and lifetime access to all materials.</p>
            </div>
            <div className="faq-item">
              <h3>❓ Is job placement guaranteed?</h3>
              <p>Yes! We have 95% placement rate with our Job Guarantee Program. Average salary hike is 150% for our graduates.</p>
            </div>
            <div className="faq-item">
              <h3>❓ What payment options are available?</h3>
              <p>We offer flexible EMI options, one-time payment discounts, and early bird offers. Multiple payment gateways supported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join 50,000+ students who are building their AI-powered future</p>
            <div className="cta-buttons">
              <button className="cta-btn cta-primary">
                Enroll Now - Get 50% Off
              </button>
              <button className="cta-btn cta-secondary">
                Schedule Free Counseling
              </button>
            </div>
            <p className="cta-urgency">⏰ Limited seats available - Batch starts in 3 days!</p>
          </div>
        </div>
      </section>

      {/* Detail Overlay Modal */}
      {detailOverlay && (
        <div className="detail-overlay" onClick={() => setDetailOverlay(null)}>
          <div className="detail-overlay-container" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={() => setDetailOverlay(null)}>
              ×
            </button>
            
            <div className="detail-split-screen">
              {/* Left Side - Content */}
              <div className="detail-left-content">
                <div className="detail-header">
                  <div className="detail-icon">{phaseDetails[detailOverlay].icon}</div>
                  <h2 className="detail-title">{phaseDetails[detailOverlay].title}</h2>
                </div>
                
                <p className="detail-description">{phaseDetails[detailOverlay].description}</p>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">📚 Key Highlights</h3>
                  <ul className="detail-highlights-list">
                    {phaseDetails[detailOverlay].highlights.map((highlight, index) => (
                      <li key={index} className="detail-highlight-item">{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">🛠️ Technologies & Tools</h3>
                  <div className="detail-tools-grid">
                    {phaseDetails[detailOverlay].tools.map((tool, index) => (
                      <span key={index} className="detail-tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3 className="detail-section-title">🎯 Learning Outcomes</h3>
                  <p className="detail-outcomes">{phaseDetails[detailOverlay].outcomes}</p>
                </div>
              </div>
              
              {/* Right Side - Image Slideshow */}
              <div className="detail-right-images">
                <div className="detail-slideshow">
                  {phaseDetails[detailOverlay].images.map((image, index) => (
                    <div key={index} className="detail-slide" style={{ animationDelay: `${index * 4}s` }}>
                      <img src={image} alt={`${phaseDetails[detailOverlay].title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Detail Modal */}
      {testimonialModal && testimonialData[testimonialModal] && (
        <div className="testimonial-modal-overlay" onClick={closeTestimonialModal}>
          <div className="testimonial-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-modal-close" onClick={closeTestimonialModal}>×</button>
            
            <div className="testimonial-modal-content">
              {/* Left Side - Person Info & Story */}
              <div className="testimonial-modal-left">
                <div className="testimonial-modal-header">
                  <div className="testimonial-modal-avatar">
                    <img src={testimonialData[testimonialModal].image} alt={testimonialData[testimonialModal].name} />
                  </div>
                  <div className="testimonial-modal-info">
                    <h2>{testimonialData[testimonialModal].name}</h2>
                    <p className="testimonial-modal-role">{testimonialData[testimonialModal].role}</p>
                    <p className="testimonial-modal-company">📍 {testimonialData[testimonialModal].company}</p>
                    <div className="testimonial-modal-stars">
                      {'⭐'.repeat(testimonialData[testimonialModal].rating)}
                    </div>
                  </div>
                </div>

                <div className="testimonial-modal-section">
                  <h3>📖 My Story</h3>
                  <p className="testimonial-modal-story">{testimonialData[testimonialModal].fullStory}</p>
                </div>

                <div className="testimonial-modal-section">
                  <h3>🎯 Key Highlights</h3>
                  <ul className="testimonial-modal-highlights">
                    {testimonialData[testimonialModal].highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="testimonial-modal-section">
                  <h3>🚀 Before & After</h3>
                  <div className="testimonial-before-after">
                    <div className="before-box">
                      <span className="ba-label">Before</span>
                      <p>{testimonialData[testimonialModal].beforeAfter.before}</p>
                    </div>
                    <div className="arrow-box">→</div>
                    <div className="after-box">
                      <span className="ba-label">After</span>
                      <p>{testimonialData[testimonialModal].beforeAfter.after}</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-modal-section">
                  <h3>💬 Full Testimonial</h3>
                  <blockquote className="testimonial-modal-quote">
                    "{testimonialData[testimonialModal].testimonial}"
                  </blockquote>
                </div>
              </div>

              {/* Right Side - Video/Image */}
              <div className="testimonial-modal-right">
                <div className="testimonial-modal-image-wrapper">
                  <img src={testimonialData[testimonialModal].image} alt={testimonialData[testimonialModal].name} />
                  <div className="testimonial-modal-badge">
                    <span className="badge-icon">🏆</span>
                    <span className="badge-text">Success Story</span>
                  </div>
                </div>
                
                <div className="testimonial-cta-box">
                  <h4>Start Your Journey Today!</h4>
                  <p>Join thousands of successful students who transformed their careers with BraynupAI</p>
                  <button className="testimonial-cta-btn">Enroll Now →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
