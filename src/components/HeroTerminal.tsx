import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CommandLine {
  type: 'command' | 'output';
  text: string;
  delay: number;
}

export const HeroTerminal = () => {
  const [lines, setLines] = useState<CommandLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sequence: CommandLine[] = [
    { type: 'command', text: '$ whoami', delay: 0 },
    { type: 'output', text: 'Chadlia El Amri', delay: 800 },
    { type: 'output', text: 'AI Engineer & Full Stack Developer', delay: 1200 },
    { type: 'output', text: '', delay: 1600 },
    { type: 'command', text: '$ cat skills.txt', delay: 2400 },
    { type: 'output', text: '🤖 AI & LLMs: Python, LangChain, OpenAI, Gemini', delay: 3200 },
    { type: 'output', text: '⚙️  Backend: FastAPI, NestJS, GraphQL', delay: 3600 },
    { type: 'output', text: '🎨 Frontend: React, Next.js, TypeScript', delay: 4000 },
    { type: 'output', text: '💾 Databases: PostgreSQL, MongoDB, Redis', delay: 4400 },
    { type: 'output', text: '', delay: 4800 },
    { type: 'command', text: '$ ls projects/', delay: 5600 },
    { type: 'output', text: 'ScrapLLM/  RAG-Assistant/  ShortVids/  FoodSwap/', delay: 6400 },
    { type: 'output', text: '', delay: 7200 },
    { type: 'command', text: '$ echo "Ready to build amazing things! 🚀"', delay: 8000 },
    { type: 'output', text: 'Ready to build amazing things! 🚀', delay: 8800 },
  ];

  useEffect(() => {
    if (currentIndex < sequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, sequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, sequence[currentIndex].delay);

      return () => clearTimeout(timer);
    } else {
      // Loop the animation after a pause
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-md mx-auto bg-black/95 border-2 border-primary/50 rounded-lg shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border-b border-primary/30">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-primary font-mono">chadlia@portfolio:~$</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-[400px] overflow-y-auto font-mono text-sm">
        {/* Welcome Message */}
        <div className="mb-4 text-green-300">
          <p>Welcome to Chadlia's Portfolio Terminal v1.0</p>
          <p className="text-muted-foreground text-xs mt-1">Press ` or Ctrl+K to open full terminal</p>
          <br />
        </div>

        {/* Animated Lines */}
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={line.type === 'command' ? 'flex items-center gap-2 text-primary mb-2' : 'text-green-300 pl-4 mb-1'}
          >
            {line.type === 'command' && <span>❯</span>}
            <span>{line.text}</span>
            {line.type === 'command' && index === lines.length - 1 && (
              <span className="animate-pulse text-green-400">▊</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
