import { Internship, Project, Achievement, SkillCategory } from './types';

export const PERSONAL_DETAILS = {
  name: "Abhiram Sanjay Dharme",
  tagline: "Pilot of Code | CT Side Defuser | ML Engineer",
  degree: "B.Tech & M.Tech in CS & Engineering",
  institute: "IIT Delhi",
  gpa: "8.08",
  github: "https://www.github.com/abhiramDharme",
  codeforces: "https://codeforces.com/profile/DRYMBIIT",
  linkedin: "#", 
  email: "abhiram.dharme@example.com" // Placeholder
};

export const INTERNSHIPS: Internship[] = [
  {
    company: "Coinbase India",
    team: "CBGPT Team",
    period: "May 2025 - July 2025",
    role: "Software Engineering Intern",
    points: [
      "Engineered Knowledge Gap classification using LLMs to boost customer support efficiency.",
      "Architected a solution inspired by topicGPT, integrating it with CBGPT API for input data modeling.",
      "Implemented a modified ranking algorithm using FAISS IndexFlatL2 for high-performance data retrieval.",
      "Developed asynchronous methods to mitigate latency from recurrent API calls."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Cache Simulator",
    period: "Mar 2024 - Apr 2024",
    mentor: "Prof. Kolin Paul",
    techStack: ["C++", "OOPs", "Python", "Matplotlib"],
    type: "System",
    points: [
      "Simulated Cache 'store' and 'load' operations on Hexadecimal addresses.",
      "Implemented Fully Associative, Set Associative, and Direct Mapped caches with LRU/FIFO.",
      "modeled Write-Through, Write-Back, Write-Allocate policies.",
      "Analyzed performance using Matplotlib visualizations."
    ]
  },
  {
    title: "TCP-like UDP Protocol",
    period: "Oct 2024 - Nov 2025",
    mentor: "Prof. Tarun Mangla",
    techStack: ["Python", "Mininet", "Ryu Controller"],
    type: "System",
    points: [
      "Developed a reliable file transfer protocol over UDP, replicating TCP features.",
      "Implemented Cumulative-ACK, retransmissions, and fast recovery.",
      "Designed congestion control (Slow Start, Congestion Avoidance) mirroring TCP Reno.",
      "Benchmarked against TCP CUBIC under high latency/packet loss scenarios."
    ]
  },
  {
    title: "xv6 OS Kernel Extensions",
    period: "Feb 2025 - Apr 2025",
    mentor: "Prof. Smruti R. Sarangi",
    techStack: ["C", "Assembly", "xv6", "Makefile"],
    type: "Kernel",
    points: [
      "Implemented login-authentication with retry limits.",
      "Added syscall-level access control and history tracking.",
      "Designed a priority-boosted scheduler and custom interrupt handlers.",
      "Engineered a page swapping subsystem with adaptive replacement strategy."
    ]
  },
  {
    title: "Stock Trading Platform",
    period: "Jan 2024 - Feb 2024",
    mentor: "Prof. Huzur Saran",
    techStack: ["Python", "Flask", "HTML/CSS", "Threads"],
    type: "Web",
    points: [
      "Built a scanning tool for stocks based on P/E, EPS, and PEG ratios.",
      "Integrated technical indicators (RSI, VWAP, MACD, ADX) for real-time analysis.",
      "Implemented multi-threaded algorithms like DMA and DMA++.",
      "Enabled comparative charting of multiple indices."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Primary Weapons (Languages)",
    items: ["C++ (Main)", "Python (Scoped)", "Prolog", "OCaml", "Assembly"]
  },
  {
    category: "Tactical Gear (Frameworks)",
    items: ["Tensorflow", "Sci-kit Learn", "Django", "Flask", "Pandas", "Mininet"]
  },
  {
    category: "Field Upgrades (Concepts)",
    items: ["Machine Learning", "Operating Systems", "Distributed Systems", "Computer Networks"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Codeforces Expert",
    rank: "Rating: 1672",
    description: "Ranked among top 10% of coders globally on Codeforces (Handle: DRYMBIIT)."
  },
  {
    title: "JEE Advanced",
    rank: "Rank 1055",
    description: "Secured All India Rank 1055 in one of the toughest engineering entrance exams."
  },
  {
    title: "Tower Research Capital Challenge",
    rank: "Top 50",
    description: "Selected among top 50 teams from IIT Delhi consecutively in 2024 and 2025."
  }
];
