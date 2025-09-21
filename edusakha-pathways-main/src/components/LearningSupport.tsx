import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2, Eye, Hand, Brain, Headphones, Languages } from "lucide-react";

const LearningSupport = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Learning Buddy",
      description: "Personalized AI assistant that adapts to your learning style and disabilities",
      capabilities: ["Audio Conversion", "Braille Export", "Sign Language Avatar", "Simplified Text"]
    },
    {
      icon: Volume2,
      title: "Multi-Modal Output",
      description: "Convert any lesson into multiple accessible formats instantly",
      capabilities: ["Text-to-Speech", "Audio Summaries", "Visual Descriptions", "Tactile Feedback"]
    },
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Advanced visual aids and screen reader optimization",
      capabilities: ["High Contrast", "Large Text", "Screen Reader", "Color Blind Support"]
    },
    {
      icon: Hand,
      title: "Virtual Labs with AR/VR",
      description: "Hands-on learning experience with haptic feedback and virtual reality",
      capabilities: ["Haptic Feedback", "3D Interactions", "Virtual Experiments", "Gesture Control"]
    },
    {
      icon: Headphones,
      title: "Audio Learning",
      description: "Rich audio experiences with spatial sound and voice navigation",
      capabilities: ["Spatial Audio", "Voice Commands", "Audio Descriptions", "Sound Cues"]
    },
    {
      icon: Languages,
      title: "Communication Support",
      description: "Multiple communication methods and language support",
      capabilities: ["Sign Language", "Symbol Communication", "Text Prediction", "Voice Synthesis"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="learning">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">AI-Powered</span> Learning Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intelligent learning system adapts to every learner's unique needs, 
            breaking down barriers and creating equal opportunities for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <Badge 
                      key={capIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 transition-smooth"
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">See AI Learning Buddy in Action</h3>
            <p className="text-muted-foreground mb-6">
              Watch how our AI converts complex lessons into accessible formats for different learning needs
            </p>
            <div className="aspect-video bg-card rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSupport;