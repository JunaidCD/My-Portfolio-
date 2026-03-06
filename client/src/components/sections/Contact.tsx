import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Send, Github, Linkedin, Terminal, MapPin, Hash, Clock, Check, AlertCircle, User, Mail, FileText, Tag } from "lucide-react";
import { XLogo } from "../ui/XLogo";

// EmailJS Configuration - Replace with your own credentials from https://www.emailjs.com/
// 1. Create account at EmailJS
// 2. Add Email Service (Gmail, Outlook, etc.)
// 3. Create Email Template
// 4. Get your Public Key, Service ID, and Template ID
const EMAILJS_PUBLIC_KEY = "8GXx3n-IvhK-44Cuh";
const EMAILJS_SERVICE_ID = "service_62pkcdr";
const EMAILJS_TEMPLATE_ID = "template_7hvbec4";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: formData.subject,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSendStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      // Check for specific error codes
      if (error?.text?.includes("template")) {
        setSendStatus("error");
      } else {
        setSendStatus("error");
      }
    } finally {
      setIsSending(false);
    }
  };

  // Generate a random transaction hash for display
  const txHash = `0x${Math.random().toString(16).substring(2)}${Math.random().toString(16).substring(2)}...${Math.random().toString(16).substring(2)}`;

  return (
    <section id="contact" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00ff41]/50 text-xs font-mono">{'>'}</span>
              <span className="text-xs font-mono text-[#00ff41]/50">05. CONTACT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              Get In <span className="text-[#00ff41]">Touch</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal direction="right">
              <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-sm font-mono text-[#00ff41]">// Contact Information</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#00ff41]/60" />
                    <span className="text-sm font-mono text-[#00ff41]/70">Kolkata, India</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-[#00ff41]/50 font-mono">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online</span>
                    <span className="text-[#00ff41]/30">|</span>
                    <span>UTC+5:30</span>
                  </div>

                  <div className="pt-4 border-t border-[#00ff41]/20">
                    <span className="text-xs font-mono text-[#00ff41]/50">// Social Links</span>
                  </div>
                  
                  <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/JunaidCD</span>
                  </a>
                  <a href="https://www.linkedin.com/in/junaid-mollah-a59150319/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/junaid-mollah-a59150319</span>
                  </a>
                  <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                    <XLogo className="w-3.5 h-3.5" />
                    <span>x.com/JunaidMollah5</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={handleSubmit} className="bg-black/80 border border-[#00ff41]/30 rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-sm font-mono text-[#00ff41]">// Send a Message</span>
                </div>

                {/* Status Message */}
                {sendStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-sm text-emerald-400 text-sm font-mono">
                    <Check className="w-4 h-4" />
                    <span>Message sent successfully! Transaction confirmed.</span>
                  </div>
                )}

                {sendStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-sm text-red-400 text-sm font-mono">
                    <AlertCircle className="w-4 h-4" />
                    <span>Transaction failed. Please try again.</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#00ff41]/50">
                      <span className="text-[#00ff41]/30">{'//'}</span> from_name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00ff41]/50" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors"
                        placeholder="Satoshi Nakamoto"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#00ff41]/50">
                      <span className="text-[#00ff41]/30">{'//'}</span> from_email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00ff41]/50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors"
                        placeholder="Satoshi@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#00ff41]/50">
                      <span className="text-[#00ff41]/30">{'//'}</span> subject
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00ff41]/50" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors"
                        placeholder="Smart Contract Deployment Request"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#00ff41]/50">
                      <span className="text-[#00ff41]/30">{'//'}</span> message_data
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-4 h-4 text-[#00ff41]/50" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors resize-none"
                        placeholder="Deploying smart contract on mainnet..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-3 rounded-sm bg-[#00ff41]/10 border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm flex items-center justify-center gap-2 hover:bg-[#00ff41]/20 transition-colors disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>./send-message.sh</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Transaction Info */}
                {sendStatus === "success" && (
                  <div className="mt-4 p-3 bg-[#00ff41]/5 border border-[#00ff41]/20 rounded-sm">
                    <div className="flex items-center gap-2 text-xs text-[#00ff41]/50 font-mono mb-1">
                      <Hash className="w-3 h-3" />
                      <span>Transaction Hash</span>
                    </div>
                    <div className="text-xs text-[#00ff41] font-mono">{txHash}</div>
                  </div>
                )}
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
