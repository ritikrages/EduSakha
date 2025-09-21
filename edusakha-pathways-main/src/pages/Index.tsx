import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningSupport from "@/components/LearningSupport";
import CareerFinance from "@/components/CareerFinance";
import Community from "@/components/Community";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LearningSupport />
        <CareerFinance />
        <Community />
        <AccessibilityFeatures />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient-primary">EduSakha</span> Inclusive
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering learners with disabilities through AI-powered education, 
                career guidance, and community support.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 EduSakha Inclusive. Making education accessible for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#learning" className="hover:text-primary transition-smooth">AI Learning</a></li>
                <li><a href="#career-finance" className="hover:text-primary transition-smooth">Career Guide</a></li>
                <li><a href="#community" className="hover:text-primary transition-smooth">Community</a></li>
                <li><a href="#accessibility" className="hover:text-primary transition-smooth">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;