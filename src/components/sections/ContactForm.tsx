import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please share your name."),
  company: z.string().optional(),
  email: z.string().email("Looks like an invalid email."),
  subject: z.string().min(2, "Add a short subject."),
  message: z.string().min(10, "A few more words please."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Message ready to send.", {
      description: "We'll open your email client so you can review and send.",
    });
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}${values.company ? ` (${values.company})` : ""}\n${values.email}`
    );
    window.location.href = `mailto:hello@navyamaterials.com?subject=${encodeURIComponent(
      values.subject
    )}&body=${body}`;
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      <div className={compact ? "grid gap-8 md:grid-cols-2" : "grid gap-8 md:grid-cols-2"}>
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input id="name" placeholder="Aarya Sharma" {...register("name")} />
          {errors.name ? (
            <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="company">Company / organisation</Label>
          <Input id="company" placeholder="Optional" {...register("company")} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email ? (
            <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Material development inquiry" {...register("subject")} />
          {errors.subject ? (
            <p className="mt-2 text-xs text-destructive">{errors.subject.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, partnership idea, or research interest…"
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground max-w-md">
          By submitting you agree to be contacted regarding your enquiry. We never share
          your details.
        </p>
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {sending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
