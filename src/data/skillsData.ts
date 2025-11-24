export interface SkillNode {
  id: string;
  name: string;
  category: 'ai' | 'backend' | 'frontend' | 'database' | 'cloud' | 'automation';
  proficiency: number; // 1-5 for node size
  connections: string[]; // IDs of related skills
  projects?: string[]; // Project IDs using this skill
}

export const skillsData: SkillNode[] = [
  // AI & LLMs
  { id: 'python', name: 'Python', category: 'ai', proficiency: 5, connections: ['langchain', 'fastapi', 'flask', 'openai', 'gemini'], projects: ['scrapllm', 'rag', 'anomaly'] },
  { id: 'langchain', name: 'LangChain', category: 'ai', proficiency: 5, connections: ['python', 'langgraph', 'openai', 'gemini'], projects: ['scrapllm', 'rag'] },
  { id: 'langgraph', name: 'LangGraph', category: 'ai', proficiency: 4, connections: ['langchain', 'python'], projects: ['scrapllm'] },
  { id: 'langfuse', name: 'Langfuse', category: 'ai', proficiency: 4, connections: ['langchain', 'python'], projects: ['scrapllm'] },
  { id: 'openai', name: 'OpenAI', category: 'ai', proficiency: 5, connections: ['python', 'langchain'], projects: ['rag'] },
  { id: 'gemini', name: 'Gemini', category: 'ai', proficiency: 5, connections: ['python', 'langchain'], projects: ['scrapllm'] },
  { id: 'huggingface', name: 'Hugging Face', category: 'ai', proficiency: 4, connections: ['python'], projects: [] },
  { id: 'rag', name: 'RAG Systems', category: 'ai', proficiency: 5, connections: ['langchain', 'chromadb', 'openai'], projects: ['rag'] },
  { id: 'prompt', name: 'Prompt Engineering', category: 'ai', proficiency: 5, connections: ['openai', 'gemini', 'langchain'], projects: ['scrapllm', 'rag'] },
  { id: 'llamaindex', name: 'LlamaIndex', category: 'ai', proficiency: 4, connections: ['python', 'langchain'], projects: [] },

  // Backend & APIs
  { id: 'fastapi', name: 'FastAPI', category: 'backend', proficiency: 5, connections: ['python', 'postgresql', 'redis'], projects: ['scrapllm', 'rag'] },
  { id: 'flask', name: 'Flask', category: 'backend', proficiency: 4, connections: ['python'], projects: ['shortvids'] },
  { id: 'nodejs', name: 'Node.js', category: 'backend', proficiency: 4, connections: ['express', 'nestjs', 'typescript'], projects: [] },
  { id: 'express', name: 'Express', category: 'backend', proficiency: 4, connections: ['nodejs', 'typescript'], projects: [] },
  { id: 'nestjs', name: 'NestJS', category: 'backend', proficiency: 5, connections: ['nodejs', 'typescript', 'postgresql', 'socketio'], projects: ['foodswap'] },
  { id: 'rest', name: 'REST APIs', category: 'backend', proficiency: 5, connections: ['fastapi', 'nestjs', 'express'], projects: [] },
  { id: 'graphql', name: 'GraphQL', category: 'backend', proficiency: 4, connections: ['nestjs', 'nodejs'], projects: ['scrapllm'] },
  { id: 'websockets', name: 'WebSockets', category: 'backend', proficiency: 4, connections: ['socketio', 'nestjs'], projects: [] },
  { id: 'socketio', name: 'Socket.io', category: 'backend', proficiency: 4, connections: ['nestjs', 'nodejs'], projects: ['foodswap'] },
  { id: 'ddd', name: 'Domain-Driven Design', category: 'backend', proficiency: 4, connections: ['nestjs', 'fastapi'], projects: [] },

  // Frontend
  { id: 'react', name: 'React', category: 'frontend', proficiency: 5, connections: ['nextjs', 'typescript', 'redux', 'tailwind'], projects: ['scrapllm', 'shortvids', 'foodswap'] },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', proficiency: 5, connections: ['react', 'typescript', 'tailwind'], projects: ['scrapllm'] },
  { id: 'redux', name: 'Redux', category: 'frontend', proficiency: 4, connections: ['react', 'typescript'], projects: [] },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', proficiency: 5, connections: ['react', 'nextjs', 'nestjs', 'nodejs'], projects: ['scrapllm', 'foodswap'] },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', proficiency: 5, connections: ['react', 'nextjs'], projects: ['scrapllm'] },

  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiency: 5, connections: ['fastapi', 'nestjs'], projects: ['scrapllm', 'foodswap'] },
  { id: 'mongodb', name: 'MongoDB', category: 'database', proficiency: 4, connections: ['nodejs', 'nestjs'], projects: [] },
  { id: 'redis', name: 'Redis', category: 'database', proficiency: 4, connections: ['fastapi', 'python'], projects: ['scrapllm'] },
  { id: 'chromadb', name: 'Vector Databases', category: 'database', proficiency: 4, connections: ['python', 'rag', 'langchain'], projects: ['rag'] },

  // Cloud & DevOps
  { id: 'gcp', name: 'GCP Cloud Run', category: 'cloud', proficiency: 4, connections: ['docker'], projects: [] },
  { id: 'docker', name: 'Docker', category: 'cloud', proficiency: 5, connections: ['gcp', 'cicd'], projects: [] },
  { id: 'cicd', name: 'GitHub Actions', category: 'cloud', proficiency: 4, connections: ['docker', 'gcp'], projects: [] },

  // Automation
  { id: 'puppeteer', name: 'Puppeteer', category: 'automation', proficiency: 4, connections: ['nodejs', 'python'], projects: [] },
  { id: 'selenium', name: 'Selenium', category: 'automation', proficiency: 4, connections: ['python'], projects: ['shortvids'] },
  { id: 'beautifulsoup', name: 'BeautifulSoup', category: 'automation', proficiency: 4, connections: ['python'], projects: [] },
  { id: 'n8n', name: 'n8n', category: 'automation', proficiency: 3, connections: [], projects: [] },
];

export const categoryColors = {
  ai: { primary: 'hsl(270, 80%, 60%)', secondary: 'hsl(270, 80%, 70%)' },
  backend: { primary: 'hsl(200, 80%, 60%)', secondary: 'hsl(200, 80%, 70%)' },
  frontend: { primary: 'hsl(340, 80%, 60%)', secondary: 'hsl(340, 80%, 70%)' },
  database: { primary: 'hsl(120, 60%, 50%)', secondary: 'hsl(120, 60%, 60%)' },
  cloud: { primary: 'hsl(30, 80%, 60%)', secondary: 'hsl(30, 80%, 70%)' },
  automation: { primary: 'hsl(280, 70%, 60%)', secondary: 'hsl(280, 70%, 70%)' },
};
