
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

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
        <div className="max-w-lg mx-auto text-center text-white space-y-8">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <img 
              src="/lovable-uploads/6599fa57-966c-4934-8890-aad65967a43f.png" 
              alt="Playable Factory" 
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-4xl font-bold">Thank You!</h1>
          <p className="text-slate-300 text-xl">
            We've received your request and will be in touch within 24 hours to schedule your demo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl">
        {/* Centered Logo */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-12">
            <img 
              src="/lovable-uploads/6599fa57-966c-4934-8890-aad65967a43f.png" 
              alt="Playable Factory" 
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left Column - Hero Content */}
          <div className="space-y-12 text-white">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Turn static ads into{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  interactive experiences
                </span>
              </h1>
              
              <p className="text-2xl text-white leading-relaxed">
                Create high-performing playables with AI. No code, no friction.
              </p>
            </div>

            {/* Client Logos */}
            <div className="space-y-6">
              <div className="text-lg text-white">
                Trusted by leading brands worldwide
              </div>
              
              <div className="grid grid-cols-3 gap-12 items-center">
                {/* Top row - 3 logos */}
                <div className="flex items-center justify-center h-16">
                  <img 
                    src="/lovable-uploads/85635f9e-929a-4117-9ef9-2ce5b1507d88.png" 
                    alt="McDonald's" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-16">
                  <img 
                    src="/lovable-uploads/eb9dce1b-a19c-4703-9c66-82ee8b1624d7.png" 
                    alt="MiniClip" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-16">
                  <img 
                    src="/lovable-uploads/a78883a7-a800-469e-87a7-95ffa64d1dc4.png" 
                    alt="Rovio" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-12 items-center max-w-sm mx-auto">
                {/* Bottom row - 2 logos */}
                <div className="flex items-center justify-center h-16">
                  <img 
                    src="/lovable-uploads/087297e8-61a8-4f13-bc9f-790f74bcd530.png" 
                    alt="Supercell" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-16">
                  <img 
                    src="/lovable-uploads/70cfa843-1b7b-4764-815f-206f0430617f.png" 
                    alt="Zynga" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div className="lg:pl-12">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-10">
                <div className="space-y-8">
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Request a Demo
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Get started with AI-powered interactive ads today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="h-14 border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-700">
                        How did you hear about us? <span className="text-orange-600">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))}>
                        <SelectTrigger className="h-14 border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-base">
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
                        className="min-h-[120px] border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-base"
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
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 text-lg transition-all duration-200 transform hover:scale-[1.02] h-16"
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
