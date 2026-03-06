import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateMessage } from "../../hooks/use-messages";
import { Loader2, Send, Github, Linkedin, Terminal, Twitter, MapPin, Hash, Clock, Check, AlertCircle, User, Mail, FileText } from "lucide-react";

const contactSchema = api.messages.create.input;
type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { mutate: sendMessage, isPending, isSuccess } = useCreateMessage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    sendMessage(data, {
      onSuccess: () => form.reset()
    });
  };

  // Generate a random transaction hash for display
  const txHash = `0x${Math.random().toString(16).substring(2)}${Math.random().toString(16).substring(2)}...${Math.random().toString(16).substring(2)}`;

  return (
    <section id="contact" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00ff41]">05.</span>
              <span className="text-sm font-mono text-[#00ff41]/60 tracking-widest uppercase">Contact</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-mono">
              Get in <span className="text-[#00ff41]">Touch</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* Contact Info - Terminal style */}
          <div className="lg:col-span-2">
            <Reveal direction="right">
              <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm h-full">
                <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-[#00ff41]/70">root@contact:~/info</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-sm font-mono text-white mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00ff41]" />
                    Let's Connect
                  </h4>
                  <p className="text-xs text-[#00ff41]/60 font-mono mb-4">
                    Available for opportunities in blockchain development and smart contract engineering.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#00ff41]/60 mb-4 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>Kolkata, India</span>
                  </div>

                  {/* Transaction-like info rows */}
                  <div className="space-y-0 mb-4">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#00ff41]/10">
                      <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Response Time
                      </span>
                      <span className="text-xs font-mono text-white">~24 hrs</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#00ff41]/10">
                      <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase flex items-center gap-1">
                        <Hash className="w-3 h-3" /> Status
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm">
                        ● OPEN
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-[#00ff41]/20">
                    <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                      <Github className="w-3.5 h-3.5" />
                      <span>github.com/JunaidCD</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>linkedin.com/in/junaidcd</span>
                    </a>
                    <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2 rounded-sm hover:bg-[#00ff41]/5">
                      <Twitter className="w-3.5 h-3.5" />
                      <span>x.com/JunaidMollah5</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Terminal-style Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-black/80 border border-[#00ff41]/30 rounded-sm">
                {/* Form Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-[#00ff41]/70">root@contact:~/message</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00ff41]/50">
                    bash
                  </span>
                </div>

                {/* Command line preview */}
                <div className="px-4 py-2 bg-[#00ff41]/5 border-b border-[#00ff41]/10">
                  <div className="text-xs font-mono text-[#00ff41]/50">
                    {'>'} echo "Send Message" | ./send-message.sh
                  </div>
                </div>

                {/* Form Fields */}
                <div className="p-4 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-mono text-[#00ff41]/60 uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3 h-3" /> Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00ff41]/50 font-mono text-xs">$</span>
                        <input
                          {...form.register("name")}
                          id="name"
                          className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors"
                          placeholder="enter_name"
                        />
                      </div>
                      {form.formState.errors.name && (
                        <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {form.formState.errors.name.message}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-mono text-[#00ff41]/60 uppercase tracking-wider flex items-center gap-1">
                        <Mail className="w-3 h-3" /> Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00ff41]/50 font-mono text-xs">@</span>
                        <input
                          {...form.register("email")}
                          id="email"
                          type="email"
                          className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-8 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors"
                          placeholder="user@email.com"
                        />
                      </div>
                      {form.formState.errors.email && (
                        <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {form.formState.errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-mono text-[#00ff41]/60 uppercase tracking-wider flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Message
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#00ff41]/50 font-mono text-xs">{'>>'}</span>
                      <textarea
                        {...form.register("message")}
                        id="message"
                        rows={5}
                        className="w-full bg-black/50 border border-[#00ff41]/20 rounded-sm px-3 py-2 pl-10 text-sm font-mono text-white focus:outline-none focus:border-[#00ff41] transition-colors resize-none"
                        placeholder="Enter message data..."
                      />
                    </div>
                    {form.formState.errors.message && (
                      <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {form.formState.errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isPending || isSuccess}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-3 rounded-sm bg-[#00ff41] text-black font-mono text-sm flex items-center justify-center gap-2 hover:bg-[#00ff41]/90 transition-colors disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Broadcasting...
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        ./send-message.sh
                      </>
                    )}
                  </motion.button>

                  {/* Transaction details when submitted */}
                  {isSuccess && (
                    <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-sm">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Transaction Receipt
                      </div>
                      <div className="space-y-1 text-[10px] font-mono">
                        <div className="flex justify-between">
                          <span className="text-[#00ff41]/50">Status:</span>
                          <span className="text-emerald-400">● CONFIRMED</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#00ff41]/50">Hash:</span>
                          <span className="text-[#00ff41]">{txHash}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#00ff41]/50">Block:</span>
                          <span className="text-white">#{18500432 + Math.floor(Math.random() * 100)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
