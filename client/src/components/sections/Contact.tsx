import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateMessage } from "../../hooks/use-messages";
import { Loader2, Send, Github, Linkedin, Terminal, Twitter, MapPin, Hash, Clock, Check, AlertCircle } from "lucide-react";

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
    <section id="contact" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-primary">05.</span>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Contact</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Info - Explorer Style */}
          <div className="lg:col-span-2">
            <Reveal direction="right">
              <div className="block-card p-5 rounded-sm h-full">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Contact Info
                  </span>
                </div>
                
                <h4 className="text-sm font-mono text-white mb-3">Let's Connect</h4>
                <p className="text-xs text-muted-foreground font-mono mb-6">
                  Available for opportunities in blockchain development and smart contract engineering.
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 font-mono">
                  <MapPin className="w-3 h-3" />
                  <span>Kolkata, India</span>
                </div>

                {/* Transaction-like info rows */}
                <div className="space-y-0 mb-6">
                  <div className="tech-info">
                    <span className="tech-label flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Response Time
                    </span>
                    <span className="tech-value">~24 hrs</span>
                  </div>
                  <div className="tech-info">
                    <span className="tech-label flex items-center gap-1">
                      <Hash className="w-3 h-3" /> Status
                    </span>
                    <span className="status-badge status-confirmed">
                      <Check className="w-2.5 h-2.5" /> Open
                    </span>
                  </div>
                </div>

                <div className="space-y-1 pt-4 border-t border-border">
                  <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-muted-foreground hover:text-white transition-colors p-2 rounded-sm hover:bg-white/5">
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/JunaidCD</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-xs font-mono text-muted-foreground hover:text-white transition-colors p-2 rounded-sm hover:bg-white/5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/junaidcd</span>
                  </a>
                  <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-muted-foreground hover:text-white transition-colors p-2 rounded-sm hover:bg-white/5">
                    <Twitter className="w-3.5 h-3.5" />
                    <span>x.com/JunaidMollah5</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Transaction-style Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={form.handleSubmit(onSubmit)} className="block-card p-5 rounded-sm space-y-5">
                {/* Form Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Send Message
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground">
                    Gas: 0.001 ETH
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                      <Hash className="w-3 h-3" /> Name
                    </label>
                    <input
                      {...form.register("name")}
                      id="name"
                      className="w-full bg-muted/30 border border-border rounded-sm px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="0x..."
                    />
                    {form.formState.errors.name && (
                      <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {form.formState.errors.name.message}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                      <Hash className="w-3 h-3" /> Email
                    </label>
                    <input
                      {...form.register("email")}
                      id="email"
                      type="email"
                      className="w-full bg-muted/30 border border-border rounded-sm px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="0x...@email.com"
                    />
                    {form.formState.errors.email && (
                      <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                    <Hash className="w-3 h-3" /> Message (Data)
                  </label>
                  <textarea
                    {...form.register("message")}
                    id="message"
                    rows={5}
                    className="w-full bg-muted/30 border border-border rounded-sm px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Enter message data..."
                  />
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
                  className="w-full py-3 rounded-sm bg-primary text-primary-foreground font-mono text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
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
                      Send Transaction
                    </>
                  )}
                </motion.button>

                {/* Transaction details when submitted */}
                {isSuccess && (
                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-sm">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                      Transaction Receipt
                    </div>
                    <div className="space-y-1 text-[10px] font-mono">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-emerald-400">● Confirmed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hash:</span>
                        <span className="text-primary">{txHash}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Block:</span>
                        <span className="text-white">#{18500432 + Math.floor(Math.random() * 100)}</span>
                      </div>
                    </div>
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
