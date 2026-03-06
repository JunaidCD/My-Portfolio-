import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateMessage } from "../../hooks/use-messages";
import { Loader2, Send, Github, Linkedin, Terminal, Twitter, MapPin } from "lucide-react";

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
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4">05. Contact</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Currently seeking remote Blockchain Engineering roles. Whether you have a protocol to build or just want to connect, feel free to reach out.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <Reveal direction="right">
              <div className="glass-card p-6 rounded-xl h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                
                <h4 className="text-white font-medium mb-2">Let's Connect</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Available for opportunities in blockchain development and smart contract engineering.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Kolkata, India</span>
                </div>

                <div className="space-y-2">
                  <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                    <Github className="w-4 h-4" />
                    <span>github.com/JunaidCD</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/junaidcd</span>
                  </a>
                  <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                    <Twitter className="w-4 h-4" />
                    <span>x.com/JunaidMollah5</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card p-6 rounded-xl space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                      Name
                    </label>
                    <input
                      {...form.register("name")}
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <span className="text-xs text-red-400">{form.formState.errors.name.message}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                      Email
                    </label>
                    <input
                      {...form.register("email")}
                      id="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                    {form.formState.errors.email && (
                      <span className="text-xs text-red-400">{form.formState.errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    {...form.register("message")}
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  {form.formState.errors.message && (
                    <span className="text-xs text-red-400">{form.formState.errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
