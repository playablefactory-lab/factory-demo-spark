
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Play } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    hasApp: "",
    hearAboutUs: "",
    marketingNeeds: [] as string[],
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    toast.success("Demo request submitted! We'll be in touch within 24 hours.");
  };

  const handleMarketingNeedsChange = (need: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        marketingNeeds: [...prev.marketingNeeds, need]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        marketingNeeds: prev.marketingNeeds.filter(n => n !== need)
      }));
    }
  };

  const countries = [
    "United States", "United Kingdom", "Canada", "Germany", "France", "Japan", 
    "Australia", "Netherlands", "Sweden", "Israel", "Singapore", "Other"
  ];

  const hearAboutOptions = [
    "Google Search", "Social Media", "Word of Mouth", "Industry Event", 
    "Partner Referral", "Content/Blog", "Advertisement", "Other"
  ];

  const marketingOptions = [
    "User Acquisition",
    "Brand Awareness", 
    "App Installs",
    "Engagement Campaigns",
    "Retargeting",
    "Creative Testing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Playable Factory
              </span>
            </div>
            <Badge variant="secondary" className="hidden sm:flex bg-slate-700/50 text-slate-300 border-slate-600">
              Trusted by 400+ Companies
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                AI-powered{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  interactive ads
                </span>{" "}
                in minutes
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                No code. Fast launch. High performance.
              </p>
              
              <p className="text-slate-400">
                Turn static creatives into engaging playable ads with AI. 
                Test instantly and scale what works.
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
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First name <span className="text-blue-600">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                          className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last name <span className="text-blue-600">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                          className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Work email <span className="text-blue-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company name <span className="text-blue-600">*</span>
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        required
                        className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                        Office country <span className="text-blue-600">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                        <SelectTrigger className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-700">
                        Do you have an app? <span className="text-blue-600">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hasApp: value }))}>
                        <SelectTrigger className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="planning">Planning to</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-700">
                        How did you hear about us?
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))}>
                        <SelectTrigger className="h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500">
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

                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-700">
                        What can we help you with? <span className="text-blue-600">*</span>
                      </Label>
                      <div className="grid grid-cols-1 gap-3">
                        {marketingOptions.map((option) => (
                          <div key={option} className="flex items-center space-x-3">
                            <Checkbox
                              id={option}
                              checked={formData.marketingNeeds.includes(option)}
                              onCheckedChange={(checked) => handleMarketingNeedsChange(option, checked as boolean)}
                              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label htmlFor={option} className="text-sm text-gray-700">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Your Message (optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="min-h-[100px] border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-700">
                        Add me to your newsletter and keep me updated whenever you publish new products
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-base transition-all duration-200 transform hover:scale-[1.02] h-14"
                    >
                      Request a demo
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">Playable Factory</span>
            </div>
            <div className="text-sm text-slate-400">
              Trusted by 400+ brands, agencies, and game developers worldwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
