import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string[];
  timestamp: string;
}

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open terminal with ` or Ctrl+K
      if (e.key === "`" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if ((e.ctrlKey || e.metaKey) && e.key === "k" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      // Close with ESC
      else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, () => string[]> = {
    help: () => [
      "Available commands:",
      "",
      "  whoami          - About me",
      "  skills          - List all skills",
      "  skills --ai     - Filter AI skills",
      "  skills --backend - Filter backend skills",
      "  skills --frontend - Filter frontend skills",
      "  experience      - Work history",
      "  projects        - Featured projects",
      "  contact         - Contact information",
      "  clear           - Clear terminal",
      "  exit            - Close terminal",
      "",
      "Tip: Use ↑/↓ arrows for command history"
    ],
    whoami: () => [
      "Chadlia El Amri",
      "",
      "AI Product Engineer",
      "",
      "🎓 Engineering degree in Software Engineering (Oct 2025)",
      "🌍 International experience: Tunisia → Netherlands → Paris → Vienna",
      "💼 Specialized in product engineering, LLMs, and scalable backend",
      "🚀 Building intelligent systems with cutting-edge AI tools",
      "",
      "Type 'contact' for ways to reach me!"
    ],
    skills: () => [
      "Core Skills:",
      "",
      "🤖 AI & LLMs:",
      "   Python, LangChain, OpenAI, Gemini, RAG Systems",
      "",
      "⚙️  Backend:",
      "   FastAPI, NestJS, Node.js, GraphQL, REST APIs",
      "",
      "🎨 Frontend:",
      "   React, Next.js, TypeScript, Tailwind CSS",
      "",
      "💾 Databases:",
      "   PostgreSQL, MongoDB, Redis, Vector DBs",
      "",
      "☁️  Cloud & DevOps:",
      "   Docker, GCP, CI/CD, GitHub Actions",
      "",
      "Try: skills --ai, skills --backend, skills --frontend"
    ],
    "skills --ai": () => [
      "🤖 AI & LLM Skills:",
      "",
      "  • Python ⭐⭐⭐⭐⭐",
      "  • LangChain ⭐⭐⭐⭐⭐",
      "  • OpenAI ⭐⭐⭐⭐⭐",
      "  • Gemini ⭐⭐⭐⭐⭐",
      "  • RAG Systems ⭐⭐⭐⭐⭐",
      "  • LangGraph ⭐⭐⭐⭐",
      "  • Prompt Engineering ⭐⭐⭐⭐⭐",
      "  • LlamaIndex ⭐⭐⭐⭐"
    ],
    "skills --backend": () => [
      "⚙️  Backend Skills:",
      "",
      "  • FastAPI ⭐⭐⭐⭐⭐",
      "  • NestJS ⭐⭐⭐⭐⭐",
      "  • Node.js ⭐⭐⭐⭐",
      "  • GraphQL ⭐⭐⭐⭐",
      "  • REST APIs ⭐⭐⭐⭐⭐",
      "  • WebSockets ⭐⭐⭐⭐",
      "  • Domain-Driven Design ⭐⭐⭐⭐"
    ],
    "skills --frontend": () => [
      "🎨 Frontend Skills:",
      "",
      "  • React ⭐⭐⭐⭐⭐",
      "  • Next.js ⭐⭐⭐⭐⭐",
      "  • TypeScript ⭐⭐⭐⭐⭐",
      "  • Tailwind CSS ⭐⭐⭐⭐⭐",
      "  • JavaScript ⭐⭐⭐⭐⭐",
      "  • Redux ⭐⭐⭐⭐"
    ],
    experience: () => [
      "Professional Journey:",
      "",
      "🇦🇹 Product Engineer @ Patholux (Vienna Remote)",
      "   Mar 2026 - Present",
      "   • Built 15+ production features for case workflows",
      "   • Implemented automated daily lab workflows",
      "   • Tech: React 19, Hono, tRPC, Drizzle, PostgreSQL, Docker",
      "",
      "🇫🇷 Software Engineer Intern @ Choose (Paris)",
      "   Feb 2025 - Aug 2025",
      "   • Built AI automation tools (70% error reduction)",
      "   • Deployed microservices on GCP Cloud Run",
      "",
      "🇳🇱 AI Engineer @ niron.ai (Netherlands)",
      "   Dec 2024 - Feb 2025",
      "   • Real-time translation with LLMs & TTS",
      "   • Benchmarked multiple LLM providers",
      "",
      "🇹🇳 R&D Intern @ LaTech (Tunisia)",
      "   Jul 2024 - Sept 2024",
      "   • LLM-powered web agents research",
      "   • Agent workflows with LangChain",
      "",
      "Type 'contact' to get in touch!"
    ],
    projects: () => [
      "Featured Projects:",
      "",
      "🔍 ScrapLLM",
      "   Intelligent web scraping with LLMs",
      "   Tech: Python, Gemini, LangChain, FastAPI",
      "",
      "🤖 RAG Assistant",
      "   Production QA system with semantic search",
      "   Tech: OpenAI, LangChain, Chromadb, FastAPI",
      "",
      "🎬 ShortVids",
      "   Automated video generation from RSS feeds",
      "   Tech: Flask, React, Whisper, Remotion",
      "",
      "🍔 FoodSwap",
      "   Real-time meal-sharing platform",
      "   Tech: NestJS, React, PostgreSQL, Socket.io",
      "",
      "Scroll down on the main page to see more details!"
    ],
    contact: () => [
      "Let's Connect! 📬",
      "",
      "📧 Email: chadlia.elamri@example.com",
      "💼 LinkedIn: linkedin.com/in/chadlia-elamri",
      "🐙 GitHub: github.com/chadlia-elamri",
      "📍 Location: Sousse, Tunisia 🇹🇳",
      "",
      "I'm actively seeking opportunities as an AI Product Engineer.",
      "Let's build something amazing! ✨"
    ],
    clear: () => [],
    exit: () => ["Goodbye! 👋"]
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "exit") {
      setHistory(prev => [...prev, {
        command: cmd,
        output: commands.exit(),
        timestamp
      }]);
      setTimeout(() => setIsOpen(false), 500);
      return;
    }

    const output = commands[trimmedCmd] 
      ? commands[trimmedCmd]()
      : [`Command not found: ${cmd}`, "", "Type 'help' for available commands"];

    setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    setCommandHistory(prev => [...prev, cmd]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[600px] bg-black/95 border-2 border-primary/50 rounded-lg shadow-2xl flex flex-col overflow-hidden"
            style={{ fontFamily: 'monospace' }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-b border-primary/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-primary font-semibold">
                  chadlia@portfolio:~$
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-4 text-green-400 text-sm"
            >
              {/* Welcome Message */}
              {history.length === 0 && (
                <div className="mb-4 text-green-300">
                  <p>Welcome to Chadlia's Portfolio Terminal v1.0</p>
                  <p>Type 'help' for available commands</p>
                  <p className="text-muted-foreground mt-2">Press ESC or type 'exit' to close</p>
                  <br />
                </div>
              )}

              {/* Command History */}
              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <span>❯</span>
                    <span>{item.command}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{item.timestamp}</span>
                  </div>
                  <div className="mt-1 pl-4">
                    {item.output.map((line, i) => (
                      <div key={i} className="text-green-300">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-primary">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400"
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
                <span className="animate-pulse text-green-400">▊</span>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
