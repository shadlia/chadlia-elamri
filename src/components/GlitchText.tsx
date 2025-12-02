import { motion } from "framer-motion";
import "./glitch-text.css";

export const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="glitch-wrapper mb-6">
      <h1 className="glitch" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

