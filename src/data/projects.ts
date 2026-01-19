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
    id: "linkedin-classifier",
    titleKey: 'projects.linkedin-classifier.title',
    descriptionKey: 'projects.linkedin-classifier.description',
    categories: ["AI", "Full Stack"],
    tech: ["Python", "Streamlit", "Langfuse", "Gemini API", "Playwright"],
    featuresKeys: [
      'projects.linkedin-classifier.feature1',
      'projects.linkedin-classifier.feature2',
      'projects.linkedin-classifier.feature3',
      'projects.linkedin-classifier.feature4'
    ],
    demoUrl: "https://drive.google.com/file/d/1oUPMixzs2mhg8Y0Ai3VrV4Y3hC9e7fHa/preview",
    githubUrl: "https://github.com/shadlia/linkedin-classifier",
    isPrivate: false,
    media: [
      {
        type: 'video',
        url: 'https://drive.google.com/file/d/1oUPMixzs2mhg8Y0Ai3VrV4Y3hC9e7fHa/preview',
        label: 'Demo'
      }
    ]
  },
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
        url: 'https://drive.google.com/file/d/1sjn5ra1Lo0u0-8n1uADBndOGfipgUFyQ/preview',
        label: 'Main Application'
      },
      {
        type: 'video',
        url: 'https://drive.google.com/file/d/1Awrw0R0zPvftdgHWcsfSKkG70wIVKOG1/preview',
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
        url: 'https://drive.google.com/file/d/1-6UXcF13sdJdgHLoMEK24E-0rsFi4s-3/preview',
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
        url: 'https://drive.google.com/thumbnail?id=1vf79uywp5WYbdzmlMhVuzEkZnRUUI3lb&sz=w1000',
        label: 'Main Interface'
      },
      {
        type: 'image',
        url: 'https://drive.google.com/thumbnail?id=1WXrWKSfEWUaE6s1tkEDH6WnqkhZE7KTh&sz=w1000',
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
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1wUcuQM7y7mUjeA59BhMop2PSh0KPIsAJ&sz=w1000', label: 'Home' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1unQfTDLvZ4_Ie7q81oM7uLGdM90--l2i&sz=w1000', label: 'Create Room' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1XDYmm8QBb9CCDE6El3uPBcbkr-7HGdJV&sz=w1000', label: 'Join Room' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1aPD7Rq6DlU877ivNslik1ZcI5QSoHD6V&sz=w1000', label: 'Lobby' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1h2Ouf9m3B7hmZX8PKF1iv7Kz1KWKtouo&sz=w1000', label: 'Voting' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1UPd7GXXd99xKw6NWRkmwi2J2ohEB1ukn&sz=w1000', label: 'Waiting' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1p2ZbF9As0vVkunQWtSRvKNShhRf8zgiu&sz=w1000', label: 'Result' },
      { type: 'image', url: 'https://drive.google.com/thumbnail?id=1h0Y53dZKsQwMV7i7afMeyNER5jY2Gz4b&sz=w1000', label: 'Contact' }
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
