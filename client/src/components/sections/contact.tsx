import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const whyHireReasons = [
    "Strong AI/ML and full-stack development background",
    "Proven track record with scalable applications",
    "Excellent academic performance and certifications",
    "Ready to contribute from day one",
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-400">Ready to bring your ideas to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Mail className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-400">Email</p>
                      <a
                        href="mailto:indrajit142024@gmail.com"
                        className="text-lg font-semibold hover:text-blue-400 transition-colors"
                      >
                        indrajit142024@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <Phone className="text-green-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-400">Phone</p>
                      <a
                        href="tel:+91-9851584780"
                        className="text-lg font-semibold hover:text-green-400 transition-colors"
                      >
                        +91-9851584780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <MapPin className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-400">Location</p>
                      <p className="text-lg font-semibold">Kolkata, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Why Hire Me?</h3>
                <ul className="space-y-2 text-slate-300">
                  {whyHireReasons.map((reason, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="text-green-400 h-4 w-4" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-slate-700 border-slate-600 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-slate-700 border-slate-600 text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full bg-slate-700 border-slate-600 text-white"
                    placeholder="Job Opportunity / Project Discussion"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="w-full bg-slate-700 border-slate-600 text-white"
                    placeholder="Tell me about the opportunity..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
