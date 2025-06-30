
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Play, Zap, Target, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    hasApp: "",
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
                Turn static ads into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  interactive experiences
                </span>{" "}
                in minutes
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Skip the complex workflows. Generate high-performing playable ads with AI, 
                test instantly, and scale what works—all without touching code.
              </p>
              
              <p className="text-slate-400">
                Marketing teams at top mobile brands use our Flex and Ready tools to create 
                interactive ad versions 10x faster than traditional methods. No technical skills 
                required, no credit card needed to start.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-6">
              <div className="text-sm text-slate-400">
                Trusted by over 400 apps worldwide
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10x</div>
                  <div className="text-sm text-slate-400">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">85%</div>
                  <div className="text-sm text-slate-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">3x</div>
                  <div className="text-sm text-slate-400">Better CTR</div>
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
                      Request a Demo!
                    </h2>
                    <p className="text-gray-600">
                      Share your information and request a demo. Your journey to excellence starts now!
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

                    <p className="text-xs text-gray-500 text-center">
                      Reach out and get started today. No credit card required.
                    </p>
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
