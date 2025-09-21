import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  DollarSign, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Shield,
  Target,
  BookOpen
} from "lucide-react";

const CareerFinance = () => {
  const careerFeatures = [
    {
      icon: Target,
      title: "Disability-Aware Career Matching",
      description: "AI-powered career recommendations based on your abilities, interests, and accessibility needs",
      highlights: ["Personalized Matching", "Accommodation Insights", "Growth Pathways"]
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with professionals who understand your journey and can guide your career",
      highlights: ["Industry Mentors", "Peer Support", "Success Stories"]
    },
    {
      icon: Briefcase,
      title: "Interview Simulation",
      description: "Practice interviews with AI feedback and accessibility accommodations",
      highlights: ["Mock Interviews", "Feedback System", "Confidence Building"]
    }
  ];

  const financeFeatures = [
    {
      icon: DollarSign,
      title: "Smart Budgeting",
      description: "Disability-specific budgeting tools including medical expenses and assistive technology",
      highlights: ["Medical Budgets", "Assistive Tech", "Emergency Planning"]
    },
    {
      icon: GraduationCap,
      title: "Scholarship Finder",
      description: "Discover scholarships and grants specifically for students with disabilities",
      highlights: ["Grant Database", "Application Help", "Deadline Tracking"]
    },
    {
      icon: Shield,
      title: "Benefits Management",
      description: "Navigate disability benefits, insurance, and government programs effectively",
      highlights: ["Benefit Navigation", "Documentation Help", "Renewal Reminders"]
    }
  ];

  return (
    <section className="py-20" id="career-finance">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-accent">Career</span> & <span className="text-gradient-secondary">Finance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering your professional journey with disability-aware career guidance 
            and comprehensive financial planning tools.
          </p>
        </div>

        {/* Career Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-accent mr-4" />
            <h3 className="text-3xl font-bold">Career Development</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careerFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth bg-gradient-to-br from-card to-accent/5">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, hIndex) => (
                      <Badge key={hIndex} variant="outline" className="mr-2 mb-2">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Finance Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-8 w-8 text-secondary mr-4" />
            <h3 className="text-3xl font-bold">Financial Empowerment</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {financeFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <feature.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, hIndex) => (
                      <Badge key={hIndex} variant="outline" className="mr-2 mb-2">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Improved Employability</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <p className="text-muted-foreground">Better Financial Planning</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">75%</div>
              <p className="text-muted-foreground">Successful Job Placements</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerFinance;