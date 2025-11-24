import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useState } from "react";

export const TerminalHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 right-6 z-40"
    >
      <div className="relative">
        {/* Hint Card */}
        <div className="glass px-4 py-3 rounded-lg shadow-xl border border-primary/30 max-w-xs">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-xs transition-colors"
            aria-label="Close hint"
          >
            ×
          </button>
          
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
              <TerminalIcon className="w-5 h-5 text-primary" />
            </div>
            
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                💡 Developer Mode
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                Try the hidden terminal!
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">Press</span>
                <kbd className="px-2 py-1 font-mono bg-primary/10 border border-primary/30 rounded text-primary">
                  `
                </kbd>
                <span className="text-muted-foreground">or</span>
                <kbd className="px-2 py-1 font-mono bg-primary/10 border border-primary/30 rounded text-primary">
                  Ctrl+K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Pointer Arrow */}
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/30" />
      </div>
    </motion.div>
  );
};
