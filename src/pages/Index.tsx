
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Play, Zap, Target, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    hasApp: "",
    marketingNeeds: [] as string[]
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Playable Factory
              </span>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Trusted by 400+ Companies
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Interactive Ads
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Turn static ads into{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  interactive experiences
                </span>{" "}
                in minutes
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Skip the complex workflows. Generate high-performing playable ads with AI, 
                test instantly, and scale what works—all without touching code.
              </p>
              
              <p className="text-gray-600">
                Marketing teams at top mobile brands use our Flex and Ready tools to create 
                interactive ad versions 10x faster than traditional methods. No technical skills 
                required, no credit card needed to start.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>400+ Companies Trust Us</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No Credit Card Required</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">10x</div>
                  <div className="text-sm text-gray-600">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3x</div>
                  <div className="text-sm text-gray-600">Better CTR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div className="lg:pl-8">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      See it in action
                    </h2>
                    <p className="text-gray-600">
                      Get a personalized demo tailored to your campaigns
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                          className="border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        required
                        className="border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                        <SelectTrigger className="border-gray-200 focus:ring-purple-500 focus:border-purple-500">
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
                      <Label>Do you have a mobile app? *</Label>
                      <RadioGroup
                        value={formData.hasApp}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, hasApp: value }))}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="planning" id="planning" />
                          <Label htmlFor="planning">Planning to</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label>What are your main marketing needs? (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {marketingOptions.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={formData.marketingNeeds.includes(option)}
                              onCheckedChange={(checked) => handleMarketingNeedsChange(option, checked as boolean)}
                            />
                            <Label htmlFor={option} className="text-sm">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-base transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Get Your Personalized Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      No spam, no commitment. We'll show you exactly how our tools can boost your campaign performance.
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Playable Factory</span>
            </div>
            <div className="text-sm text-gray-600">
              Trusted by 400+ brands, agencies, and game developers worldwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
