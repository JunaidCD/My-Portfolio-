import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateMessage } from "../../hooks/use-messages";
import { Loader2, Send, Github, Linkedin, Terminal, Twitter, FileSignature, MapPin, Clock } from "lucide-react";

// Use schema from API contract for validation
const contactSchema = api.messages.create.input;
type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();

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

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary/50" />
              <span className="text-sm font-mono text-primary tracking-widest uppercase">05. Establish Connection</span>
              <span className="w-8 h-px bg-primary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Open to <span className="gradient-text-animated">Opportunities</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Currently seeking remote Blockchain Engineering roles. Whether you have a protocol to build, a contract to optimize, or just want to say hi, my inbox is open.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal direction="right">
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 box-glow-cyan">
                    <Terminal className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2">Initialize Handshake</h4>
                  <p className="text-muted-foreground mb-8">
                    Deploying a message transaction to my personal node. Expected confirmation time: &lt; 24 hours.
                  </p>

                  {/* Location & availability */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Kolkata, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>UTC+5:30</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5 group">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-mono">github.com/JunaidCD</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5 group">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="font-mono">linkedin.com/in/junaidcd</span>
                    </a>
                    <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5 group">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Twitter className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-mono">x.com/JunaidMollah5</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card p-8 rounded-2xl space-y-6 relative overflow-hidden">
                {/* Form background decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                  {/* Form header */}
                  <div className="flex items-center gap-3 mb-6">
                    <FileSignature className="w-5 h-5 text-primary" />
                    <span className="text-sm font-mono text-muted-foreground">New Message Transaction</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">01</span> _sender_name
                        </label>
                        <div className="relative">
                          <input
                            {...form.register("name")}
                            id="name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans placeholder:text-white/20"
                            placeholder="Satoshi Nakamoto"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" />
                        </div>
                        {form.formState.errors.name && (
                          <span className="text-xs text-destructive">{form.formState.errors.name.message}</span>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                          <span className="text-secondary">02</span> _return_address
                        </label>
                        <div className="relative">
                          <input
                            {...form.register("email")}
                            id="email"
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans placeholder:text-white/20"
                            placeholder="satoshi@bitcoin.org"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary/50" />
                        </div>
                        {form.formState.errors.email && (
                          <span className="text-xs text-destructive">{form.formState.errors.email.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                        <span className="text-accent">03</span> _payload_data
                      </label>
                      <div className="relative">
                        <textarea
                          {...form.register("message")}
                          id="message"
                          rows={5}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans resize-none placeholder:text-white/20"
                          placeholder="Enter your message here..."
                        />
                        <div className="absolute right-3 bottom-3 w-2 h-2 rounded-full bg-accent/50" />
                      </div>
                      {form.formState.errors.message && (
                        <span className="text-xs text-destructive">{form.formState.errors.message.message}</span>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isPending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      {isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span className="relative z-10">Awaiting Confirmation...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 relative z-10" />
                          <span className="relative z-10">Sign & Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Transaction status indicators */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>256-bit Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>SSL Secured</span>
                    </div>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
