export const PERSONAL_INFO = {
  name: "Krishank Shah",
  role: "Full-Stack Developer & Designer",
  email: "your.email@example.com", // Update with your email
  github: "https://github.com/krishankshh",
  linkedin: "https://www.linkedin.com/in/krishank-shah-546989230/",
  twitter: "https://x.com/ShahKrisha20763",
  instagram: "https://www.instagram.com/krishankshh/",
  location: "India",
  bio: "I craft elegant solutions to complex problems. Passionate about creating exceptional digital experiences through clean code and thoughtful design.",
};

export const SKILLS = {
  languages: ["Python", "Java", "JavaScript", "TypeScript"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "REST APIs"],
  tools: ["Git", "VS Code", "Figma", "Vercel"],
  concepts: ["Data Structures", "Algorithms", "UI/UX Design", "Responsive Design"],
};

export const ESSENTIAL_ALGORITHMS = {
  sorting: {
    title: "Sorting Algorithms",
    algorithms: [
      { name: "Bubble Sort", complexity: "O(n²)", description: "Simple comparison-based algorithm" },
      { name: "Quick Sort", complexity: "O(n log n)", description: "Efficient divide-and-conquer algorithm" },
      { name: "Merge Sort", complexity: "O(n log n)", description: "Stable divide-and-conquer algorithm" },
      { name: "Heap Sort", complexity: "O(n log n)", description: "Comparison-based using binary heap" },
      { name: "Insertion Sort", complexity: "O(n²)", description: "Efficient for small datasets" },
    ],
  },
  searching: {
    title: "Searching Algorithms",
    algorithms: [
      { name: "Linear Search", complexity: "O(n)", description: "Sequential search through elements" },
      { name: "Binary Search", complexity: "O(log n)", description: "Efficient search in sorted arrays" },
      { name: "Depth-First Search (DFS)", complexity: "O(V+E)", description: "Graph traversal algorithm" },
      { name: "Breadth-First Search (BFS)", complexity: "O(V+E)", description: "Level-order graph traversal" },
    ],
  },
  graph: {
    title: "Graph Algorithms",
    algorithms: [
      { name: "Dijkstra's Algorithm", complexity: "O(E log V)", description: "Shortest path in weighted graphs" },
      { name: "Bellman-Ford", complexity: "O(VE)", description: "Shortest path with negative weights" },
      { name: "Floyd-Warshall", complexity: "O(V³)", description: "All-pairs shortest paths" },
      { name: "Kruskal's Algorithm", complexity: "O(E log E)", description: "Minimum spanning tree" },
      { name: "Prim's Algorithm", complexity: "O(E log V)", description: "Minimum spanning tree" },
      { name: "Topological Sort", complexity: "O(V+E)", description: "Linear ordering of vertices" },
    ],
  },
  dynamic: {
    title: "Dynamic Programming",
    algorithms: [
      { name: "Fibonacci Sequence", complexity: "O(n)", description: "Classic DP problem" },
      { name: "Knapsack Problem", complexity: "O(nW)", description: "Optimization problem" },
      { name: "Longest Common Subsequence", complexity: "O(mn)", description: "String matching problem" },
      { name: "Matrix Chain Multiplication", complexity: "O(n³)", description: "Optimization problem" },
      { name: "Edit Distance", complexity: "O(mn)", description: "String similarity measure" },
    ],
  },
  tree: {
    title: "Tree Algorithms",
    algorithms: [
      { name: "Inorder Traversal", complexity: "O(n)", description: "Left-Root-Right traversal" },
      { name: "Preorder Traversal", complexity: "O(n)", description: "Root-Left-Right traversal" },
      { name: "Postorder Traversal", complexity: "O(n)", description: "Left-Right-Root traversal" },
      { name: "Level Order Traversal", complexity: "O(n)", description: "Breadth-first tree traversal" },
    ],
  },
  string: {
    title: "String Algorithms",
    algorithms: [
      { name: "KMP Algorithm", complexity: "O(n+m)", description: "Pattern matching algorithm" },
      { name: "Rabin-Karp", complexity: "O(n+m)", description: "Hash-based pattern matching" },
      { name: "Boyer-Moore", complexity: "O(n/m)", description: "Efficient string searching" },
      { name: "Trie Operations", complexity: "O(m)", description: "Prefix tree operations" },
    ],
  },
  other: {
    title: "Other Essential Algorithms",
    algorithms: [
      { name: "Two Pointers", complexity: "O(n)", description: "Array manipulation technique" },
      { name: "Sliding Window", complexity: "O(n)", description: "Subarray problem solving" },
      { name: "Backtracking", complexity: "Varies", description: "Exhaustive search technique" },
      { name: "Greedy Algorithms", complexity: "Varies", description: "Locally optimal choices" },
      { name: "Divide and Conquer", complexity: "Varies", description: "Problem decomposition strategy" },
    ],
  },
};

export const ABOUT = {
  title: "About Me",
  story: [
    "I'm a Mechanical and Mechatronics Engineering student with a unique blend of mechanical engineering knowledge and IT expertise. After completing my diploma in Information Technology, I discovered my passion for creating digital solutions that solve real-world problems.",
    "My journey into software development started with curiosity about automation and evolved into a deep commitment to mastering web technologies, algorithms, and user experience design. I believe in writing clean, efficient code and creating applications that make a difference.",
    "Beyond coding, I enjoy teaching programming concepts to others, working on AI projects, and continuously expanding my skill set. I'm driven by the challenge of turning complex problems into elegant, user-friendly solutions."
  ],
  highlights: [
    { label: "Experience", value: "3+ Years" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Technologies Mastered", value: "20+" },
  ]
};

export const EXPERIENCE = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 - Present",
    description: "Building custom websites and web applications for clients across various industries. Specializing in responsive design, e-commerce solutions, and modern web technologies.",
    achievements: [
      "Delivered 30+ successful projects for clients worldwide",
      "Maintained 98% client satisfaction rate",
      "Specialized in React/Next.js and modern web stack",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Programming Instructor",
    company: "Various Institutions",
    location: "India",
    period: "2021 - 2022",
    description: "Taught programming fundamentals including Python and Java to students. Developed curriculum and hands-on projects to help students grasp core concepts.",
    achievements: [
      "Taught 100+ students programming fundamentals",
      "Created interactive learning materials and projects",
      "Received excellent feedback for clear explanations",
    ],
    technologies: ["Python", "Java", "Data Structures", "Algorithms"]
  },
  {
    title: "IT Support & Solutions",
    company: "Local Businesses",
    location: "India",
    period: "2020 - 2021",
    description: "Provided IT support services including website development, system setup, and technical troubleshooting for small businesses and startups.",
    achievements: [
      "Helped 15+ businesses establish online presence",
      "Reduced technical issues through proactive maintenance",
      "Implemented cost-effective IT solutions",
    ],
    technologies: ["WordPress", "HTML/CSS", "JavaScript", "SEO"]
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering",
    field: "Mechanical & Mechatronics Engineering",
    institution: "University Name", // Update with your university
    location: "India",
    period: "2020 - Present",
    description: "Specializing in mechatronics with focus on automation, robotics, and control systems. Combining mechanical engineering principles with programming and electronics.",
    achievements: [
      "Strong foundation in physics, mathematics, and engineering principles",
      "Experience with CAD software and engineering design",
      "Coursework in automation and control systems",
    ]
  },
  {
    degree: "Diploma",
    field: "Information Technology",
    institution: "IT Institute", // Update with your institute
    location: "India",
    period: "2018 - 2020",
    description: "Comprehensive study of computer science fundamentals, programming, databases, and web development.",
    achievements: [
      "Graduated with distinction",
      "Built multiple academic projects",
      "Strong foundation in programming and algorithms",
    ]
  },
];

export const CERTIFICATIONS = [
  "Python Programming",
  "Java Development",
  "Web Development",
  "Data Structures & Algorithms",
  "UI/UX Design Fundamentals",
  // Add your actual certifications here
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce web application with product catalog, shopping cart, payment integration, and admin dashboard.",
    longDescription: "Built a complete e-commerce solution from scratch with user authentication, product management, order processing, and payment gateway integration. Focused on performance optimization and user experience.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "User authentication & authorization",
      "Product search and filtering",
      "Shopping cart & checkout flow",
      "Payment gateway integration",
      "Admin dashboard for inventory management",
    ],
    github: "https://github.com/krishankshh", // Update with actual links
    demo: "#",
    image: "/images/project-placeholder.jpg",
    status: "Completed",
    year: "2024"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team features, and project tracking.",
    longDescription: "Developed a task management platform enabling teams to organize projects, assign tasks, set deadlines, and track progress in real-time.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task organization",
      "Team member assignment",
      "Progress tracking & analytics",
      "Responsive design",
    ],
    github: "https://github.com/krishankshh",
    demo: "#",
    image: "/images/project-placeholder.jpg",
    status: "Completed",
    year: "2023"
  },
  {
    title: "Portfolio Generator",
    description: "A SaaS platform that helps developers create beautiful, professional portfolios in minutes with customizable templates.",
    longDescription: "Built a portfolio generator tool that allows users to choose templates, customize content, and deploy their portfolio with one click.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    features: [
      "Multiple portfolio templates",
      "Real-time preview",
      "One-click deployment",
      "Custom domain support",
      "SEO optimization",
    ],
    github: "https://github.com/krishankshh",
    demo: "#",
    image: "/images/project-placeholder.jpg",
    status: "In Progress",
    year: "2024"
  },
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
