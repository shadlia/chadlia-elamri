export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categories: string[];
  tech: string[];
  featuresKeys: string[];
  demoUrl: string;
  githubUrl: string;
  isPrivate: boolean;
  media: {
    type: 'image' | 'video';
    url: string;
    label?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "scrapllm",
    titleKey: 'projects.scrapllm.title',
    descriptionKey: 'projects.scrapllm.description',
    categories: ["AI", "Full Stack"],
    tech: ["Python", "Gemini", "LangChain", "Langfuse", "Next.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL"],
    featuresKeys: [
      'projects.scrapllm.feature1',
      'projects.scrapllm.feature2',
      'projects.scrapllm.feature3',
      'projects.scrapllm.feature4'
    ],
    demoUrl: "https://drive.google.com/open?id=1uS1xhLndq-i4n4JQk7jbjXnJkuvtyhIG&authuser=0&t=5",
    githubUrl: "https://github.com/shadlia/Scrap-llm",
    isPrivate: false,
    media: [
      {
        type: 'video',
        url: '/src/assets/demos/scrapllm/scrap llm.mp4',
        label: 'Main Process'
      },
      {
        type: 'video',
        url: '/src/assets/demos/scrapllm/demo-benchmark.mp4',
        label: 'Benchmark Module'
      }
    ]
  },
  {
    id: "rag",
    titleKey: 'projects.rag.title',
    descriptionKey: 'projects.rag.description',
    categories: ["AI"],
    tech: ["Python", "OpenEmbedding", "LangChain", "FastAPI", "Chromadb"],
    featuresKeys: [
      'projects.rag.feature1',
      'projects.rag.feature2',
      'projects.rag.feature3',
      'projects.rag.feature4'
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/shadlia/Graph-Based-Knowledge-Retrieval-api",
    isPrivate: false,
    media: [
      {
        type: 'video',
        url: '/src/assets/demos/ragassistant/demo.mp4',
        label: 'RAG Assistant Demo'
      }
    ]
  },
  {
    id: "shortvids",
    titleKey: 'projects.shortvids.title',
    descriptionKey: 'projects.shortvids.description',
    categories: ["AI", "Full Stack"],
    tech: ["Flask", "React", "Remotion", "Selenium", "Whisper"],
    featuresKeys: [
      'projects.shortvids.feature1',
      'projects.shortvids.feature2',
      'projects.shortvids.feature3',
      'projects.shortvids.feature4'
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/shadlia/RSS-to-Video_LLM",
    isPrivate: false,
    media: [
      {
        type: 'image',
        url: '/src/assets/demos/rss/main.jpg',
        label: 'Main Interface'
      },
      {
        type: 'image',
        url: '/src/assets/demos/rss/final.jpg',
        label: 'Final Result'
      }
    ]
  },
  {
    id: "foodswap",
    titleKey: 'projects.foodswap.title',
    descriptionKey: 'projects.foodswap.description',
    categories: ["Full Stack"],
    tech: ["NestJS", "React", "PostgreSQL", "Socket.io", "Cloudinary"],
    featuresKeys: [
      'projects.foodswap.feature1',
      'projects.foodswap.feature2',
      'projects.foodswap.feature3',
      'projects.foodswap.feature4'
    ],
    demoUrl: "#",
    githubUrl: "#",
    isPrivate: true,
    media: [
      { type: 'image', url: '/src/assets/demos/foodswap/main.jpg', label: 'Home' },
      { type: 'image', url: '/src/assets/demos/foodswap/createroom.jpg', label: 'Create Room' },
      { type: 'image', url: '/src/assets/demos/foodswap/joining.jpg', label: 'Join Room' },
      { type: 'image', url: '/src/assets/demos/foodswap/starting.jpg', label: 'Lobby' },
      { type: 'image', url: '/src/assets/demos/foodswap/voting.jpg', label: 'Voting' },
      { type: 'image', url: '/src/assets/demos/foodswap/waiting for result.jpg', label: 'Waiting' },
      { type: 'image', url: '/src/assets/demos/foodswap/final result.jpg', label: 'Result' },
      { type: 'image', url: '/src/assets/demos/foodswap/contact.jpg', label: 'Contact' }
    ]
  },
  // {
  //   id: "smartoffers",
  //   titleKey: 'projects.smartoffers.title',
  //   descriptionKey: 'projects.smartoffers.description',
  //   categories: ["Full Stack", "AI"],
  //   tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Web Scraping"],
  //   featuresKeys: [
  //     'projects.smartoffers.feature1',
  //     'projects.smartoffers.feature2',
  //     'projects.smartoffers.feature3',
  //     'projects.smartoffers.feature4'
  //   ],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   isPrivate: true,
  //   media: [
  //     {
  //       type: 'image',
  //       url: '/placeholder.svg'
  //     }
  //   ]
  // },
  // {
  //   id: "anomaly",
  //   titleKey: 'projects.anomaly.title',
  //   descriptionKey: 'projects.anomaly.description',
  //   categories: ["AI"],
  //   tech: ["Python", "Keras", "TensorFlow", "OpenCV", "ResNet50"],
  //   featuresKeys: [
  //     'projects.anomaly.feature1',
  //     'projects.anomaly.feature2',
  //     'projects.anomaly.feature3',
  //     'projects.anomaly.feature4'
  //   ],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   isPrivate: true,
  //   media: [
  //     {
  //       type: 'image',
  //       url: '/placeholder.svg'
  //     }
  //   ]
  // }
];
