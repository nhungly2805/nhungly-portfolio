// src/data/projects.js

const ProjectsData = [
  {
    id: "1",
    name: "Dressify",
    tagline: "A fashion-forward outfit recommendation platform leveraging AI to personalize style for users.",
    cardImage: require("../assets/Images/python.png"), // Ảnh nền cho thẻ dự án
    logo: require("../assets/Images/python.png"), // Logo của dự án
    categories: ["AI Fashion", "Recommendations"],
    
    // --- Dữ liệu chi tiết cho Modal ---
    projectObjective: "Create an AI-powered fashion recommendation system that helps users discover personalized outfit combinations based on their style preferences, body type, and occasion.",
    keyAchievements: [
      "Implemented machine learning algorithms for style recommendation",
      "Built responsive user interface with modern design principles",
      "Integrated AI-powered outfit generation with 85% user satisfaction",
    ],
    technologiesAndImplementation: "Built with Next.js for performance, TypeScript for type safety, TailwindCSS for modern styling, and integrated OpenAI for intelligent recommendations.",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "AI"],
    projectConfidentiality: "Can only share small parts due to NDA restrictions", // Để trống hoặc null nếu không có
    impactAndResults: "Helps users save time on outfit selection while discovering new style combinations, leading to increased confidence and fashion exploration.",
    
    liveSiteUrl: "#", // Thay bằng link thật
    codeUrl: "#",     // Thay bằng link thật
  },
  {
    id: "2",
    name: "Stylique Recommendations",
    tagline: "An advanced AI-powered recommendation engine built with modern ML algorithms.",
    cardImage: require("../assets/Images/github.png"), // Ảnh nền cho thẻ dự án
    logo: require("../assets/Images/github.png"), // Logo của dự án
    categories: ["Smart AI", "Recommendations"],
    
    projectObjective: "Develop a robust and scalable recommendation engine that can be integrated into various e-commerce platforms to boost user engagement and sales.",
    keyAchievements: [
      "Designed and trained multiple ML models using TensorFlow and Fast API.",
      "Achieved a 25% increase in user click-through rates on recommended products.",
      "Created a highly responsive front-end interface with React for real-time interaction.",
    ],
    technologiesAndImplementation: "The backend is powered by Python with TensorFlow for machine learning models, served via a FastAPI server. The front-end is a dynamic and interactive interface built with React.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "NextJS"],
    projectConfidentiality: null,
    impactAndResults: "The engine provides highly accurate and personalized recommendations, significantly improving user experience and driving business metrics for partner platforms.",
    
    liveSiteUrl: "#",
    codeUrl: "#",
  },
  // Thêm các dự án khác của bạn vào đây với cấu trúc tương tự
];

export default ProjectsData;