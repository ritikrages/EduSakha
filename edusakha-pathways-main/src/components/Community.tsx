import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Activity, 
  UserCheck, 
  Headphones,
  Shield,
  Zap
} from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Peer Learning Circles",
      description: "Connect with fellow learners who share similar experiences and challenges",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: UserCheck,
      title: "AI Mentors",
      description: "24/7 AI-powered mentorship and guidance tailored to your specific needs",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: MessageCircle,
      title: "Accessible Communication",
      description: "Multiple communication modes including text, voice, sign language, and symbols",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description: "Professional counseling services and peer support for emotional wellbeing",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const wellnessFeatures = [
    {
      icon: Activity,
      title: "Stress Monitoring",
      description: "Wearable integration to track stress levels and provide timely interventions",
      stats: "Real-time monitoring"
    },
    {
      icon: Headphones,
      title: "Mindfulness Sessions",
      description: "Guided meditation and relaxation exercises adapted for different disabilities",
      stats: "Daily sessions available"
    },
    {
      icon: Shield,
      title: "Crisis Support",
      description: "Immediate access to crisis counselors and emergency support systems",
      stats: "24/7 availability"
    },
    {
      icon: Zap,
      title: "Wellness Analytics",
      description: "Track your emotional and physical wellbeing with personalized insights",
      stats: "Weekly reports"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background" id="community">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Community</span> & <span className="text-gradient-accent">Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a supportive community that understands your journey and provides 
            comprehensive wellness support for holistic growth.
          </p>
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Build Meaningful Connections</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth text-center border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Wellness Dashboard Preview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Comprehensive Wellness Support</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    {feature.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-primary">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Growing Community</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Peer Mentors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Support Groups</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant transition-smooth hover:shadow-glow">
            Join Our Community
            <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;