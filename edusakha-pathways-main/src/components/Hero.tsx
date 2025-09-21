import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-primary">EduSakha</span>{" "}
                <span className="text-foreground">Inclusive</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                AI-Powered Holistic Education Platform for Learners with Disabilities
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Breaking barriers in education with AI-powered accessibility tools, career guidance, 
              financial literacy, and community support - all in one inclusive ecosystem.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card shadow-sm border">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-medium">AI Learning Buddy</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card shadow-sm border">
                <Users className="h-6 w-6 text-secondary" />
                <span className="font-medium">Career Guidance</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card shadow-sm border">
                <Heart className="h-6 w-6 text-accent" />
                <span className="font-medium">Community Care</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-elegant transition-smooth hover:shadow-glow">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-smooth">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Diverse students with disabilities learning together using AI technology and assistive devices"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full animate-pulse shadow-glow" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full animate-bounce shadow-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;