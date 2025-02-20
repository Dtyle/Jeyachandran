import { useState } from "react";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./Components/Dialog";

export default function AiBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="floating-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
      >
        <Bot className="bot-icon" />
      </motion.button>

      {/* AI Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How can I assist you?</DialogTitle>
          </DialogHeader>
          <div className="popup-content">
            🤖 Hello! I'm your AI assistant. Ask me anything!
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
