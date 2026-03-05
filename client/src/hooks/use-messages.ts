import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "./use-toast";
import { z } from "zod";

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message. Please try again.");
      }
      
      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Transaction confirmed. I'll get back to you soon.",
        className: "border-primary bg-background text-foreground",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error instanceof Error ? error.message : "Network error occurred.",
        variant: "destructive",
      });
    }
  });
}
