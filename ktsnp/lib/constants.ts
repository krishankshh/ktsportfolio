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

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Algorithms", href: "#algorithms" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
