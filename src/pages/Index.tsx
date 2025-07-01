
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
        <div className="max-w-lg mx-auto text-center text-white space-y-6">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <img 
              src="/lovable-uploads/7bc91cef-9310-4412-8d5c-baacfc374809.png" 
              alt="Playable Factory" 
              className="w-8 h-8"
            />
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
      <div className="container mx-auto px-6 py-8 lg:py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-white lg:pr-8">
            {/* Logo */}
            <div className="flex justify-start mb-6">
              <img 
                src="/lovable-uploads/7bc91cef-9310-4412-8d5c-baacfc374809.png" 
                alt="Playable Factory" 
                className="h-8 w-auto"
              />
            </div>

            <div className="space-y-5">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Create Playables That Perform
              </h1>
              
              <p className="text-lg text-white leading-relaxed">
                Generate stunning, high-impact interactive ads in minutes with AI-powered tools—no design or code needed.
              </p>
            </div>

            {/* Client Logos */}
            <div className="space-y-5">
              <div className="text-sm text-white">
                Trusted by leading brands worldwide
              </div>
              
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Top row - 3 logos */}
                <div className="flex items-center justify-center h-10">
                  <img 
                    src="/lovable-uploads/85635f9e-929a-4117-9ef9-2ce5b1507d88.png" 
                    alt="McDonald's" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-10">
                  <img 
                    src="/lovable-uploads/eb9dce1b-a19c-4703-9c66-82ee8b1624d7.png" 
                    alt="MiniClip" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-10">
                  <img 
                    src="/lovable-uploads/a78883a7-a800-469e-87a7-95ffa64d1dc4.png" 
                    alt="Rovio" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center max-w-xs mx-auto lg:mx-0">
                {/* Bottom row - 2 logos */}
                <div className="flex items-center justify-center h-10">
                  <img 
                    src="/lovable-uploads/087297e8-61a8-4f13-bc9f-790f74bcd530.png" 
                    alt="Supercell" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-10">
                  <img 
                    src="/lovable-uploads/70cfa843-1b7b-4764-815f-206f0430617f.png" 
                    alt="Zynga" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div className="lg:pl-8">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-6">
                <div className="space-y-5">
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-gray-900">
                      Request a Demo
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Get started with AI-powered interactive ads today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                        Email <span className="text-orange-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-9 border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="hearAboutUs" className="text-xs font-medium text-gray-700">
                        How did you hear about us? <span className="text-orange-600">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))}>
                        <SelectTrigger className="h-9 border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-sm">
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

                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-xs font-medium text-gray-700">
                        Your Message (optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or any specific requirements"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="min-h-[60px] border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-sm"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                        className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                      />
                      <Label htmlFor="newsletter" className="text-xs text-gray-700">
                        Keep me updated with newsletter and product updates
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 text-sm transition-all duration-200 transform hover:scale-[1.02] h-10"
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
