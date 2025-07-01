
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Play } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    hearAboutUs: "",
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setIsSubmitted(true);
  };

  const hearAboutOptions = [
    "Google Search", 
    "Social Media", 
    "Word of Mouth", 
    "Industry Event", 
    "Partner Referral", 
    "Content/Blog", 
    "Advertisement", 
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center text-white space-y-6">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <Play className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold">Thank You!</h1>
          <p className="text-slate-300 text-lg">
            We've received your request and will be in touch within 24 hours to schedule your demo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Centered Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Play className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Playable Factory
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Turn static ads into{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  interactive experiences
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Create high-performing playables with AI. No code needed.
              </p>
            </div>

            {/* Client Logos */}
            <div className="space-y-4">
              <div className="text-sm text-slate-400">
                Trusted by leading brands worldwide
              </div>
              
              <div className="grid grid-cols-3 gap-8 items-center opacity-60">
                {/* Top row - 3 logos */}
                <div className="flex items-center justify-center h-12">
                  <img 
                    src="/lovable-uploads/85635f9e-929a-4117-9ef9-2ce5b1507d88.png" 
                    alt="McDonald's" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img 
                    src="/lovable-uploads/eb9dce1b-a19c-4703-9c66-82ee8b1624d7.png" 
                    alt="MiniClip" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img 
                    src="/lovable-uploads/a78883a7-a800-469e-87a7-95ffa64d1dc4.png" 
                    alt="Rovio" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center opacity-60 max-w-md mx-auto">
                {/* Bottom row - 2 logos */}
                <div className="flex items-center justify-center h-12">
                  <img 
                    src="/lovable-uploads/087297e8-61a8-4f13-bc9f-790f74bcd530.png" 
                    alt="Supercell" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img 
                    src="/lovable-uploads/70cfa843-1b7b-4764-815f-206f0430617f.png" 
                    alt="Zynga" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div className="lg:pl-8">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Request a Demo
                    </h2>
                    <p className="text-gray-600">
                      Get started with AI-powered interactive ads today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-orange-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-12 border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-700">
                        How did you hear about us? <span className="text-orange-600">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))}>
                        <SelectTrigger className="h-12 border-gray-200 focus:ring-orange-500 focus:border-orange-500">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {hearAboutOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Your Message (optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or any specific requirements"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="min-h-[100px] border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                        className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-700">
                        ✅ Keep me updated with newsletter and product updates
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 text-base transition-all duration-200 transform hover:scale-[1.02] h-14"
                    >
                      Submit Now
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
