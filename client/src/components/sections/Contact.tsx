import { Reveal } from "../Reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateMessage } from "../../hooks/use-messages";
import { Loader2, Send, Github, Linkedin, Terminal, Twitter } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">05. Establish Connection</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Open to <span className="text-glow-cyan text-primary">Opportunities</span></h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Currently seeking remote Blockchain Engineering roles. Whether you have a protocol to build, a contract to optimize, or just want to say hi, my inbox is open.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal direction="right">
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 box-glow-cyan">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">Initialize Handshake</h4>
                <p className="text-muted-foreground mb-8">
                  Deploying a message transaction to my personal node. Expected confirmation time: &lt; 24 hours.
                </p>

                <div className="space-y-4">
                  <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-mono">github.com/JunaidCD</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                    <Linkedin className="w-5 h-5 text-secondary" />
                    <span className="font-mono">linkedin.com/in/junaidcd</span>
                  </a>
                  <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5">
                    <Twitter className="w-5 h-5 text-accent" />
                    <span className="font-mono">x.com/JunaidMollah5</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card p-8 rounded-2xl space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-muted-foreground">_sender_name</label>
                    <input
                      {...form.register("name")}
                      id="name"
                      className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                      placeholder="Satoshi Nakamoto"
                    />
                    {form.formState.errors.name && (
                      <span className="text-xs text-destructive">{form.formState.errors.name.message}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-muted-foreground">_return_address</label>
                    <input
                      {...form.register("email")}
                      id="email"
                      type="email"
                      className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                      placeholder="satoshi@bitcoin.org"
                    />
                    {form.formState.errors.email && (
                      <span className="text-xs text-destructive">{form.formState.errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground">_payload_data</label>
                  <textarea
                    {...form.register("message")}
                    id="message"
                    rows={5}
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans resize-none"
                    placeholder="Enter your message here..."
                  />
                  {form.formState.errors.message && (
                    <span className="text-xs text-destructive">{form.formState.errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 box-glow-cyan"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Awaiting Confirmation...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Sign & Send Message
                    </>
                  )}
                </button>

              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
