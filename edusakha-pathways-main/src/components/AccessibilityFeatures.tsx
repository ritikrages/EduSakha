import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Ear, 
  Hand, 
  MousePointer, 
  Mic, 
  Smartphone,
  Monitor,
  Keyboard
} from "lucide-react";

const AccessibilityFeatures = () => {
  const inputMethods = [
    {
      icon: Mic,
      title: "Voice Control",
      description: "Navigate and control the platform using voice commands",
      features: ["Speech Recognition", "Voice Navigation", "Audio Feedback"]
    },
    {
      icon: Eye,
      title: "Eye Tracking",
      description: "Control interface elements with eye movement and gaze",
      features: ["Gaze Navigation", "Blink Controls", "Focus Tracking"]
    },
    {
      icon: Hand,
      title: "Gesture Control",
      description: "Use hand gestures and movements for interaction",
      features: ["Hand Tracking", "Gesture Commands", "Motion Control"]
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility with custom shortcuts",
      features: ["Tab Navigation", "Hotkeys", "Switch Control"]
    }
  ];

  const accessibilityTools = [
    {
      icon: Monitor,
      title: "Screen Reader Optimization",
      description: "Fully compatible with all major screen readers",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Eye,
      title: "Visual Enhancements",
      description: "High contrast modes, large text, and color adjustments",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Ear,
      title: "Audio Descriptions",
      description: "Detailed audio descriptions for visual content",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Smartphone,
      title: "IoT Integration",
      description: "Smart classroom alerts and environmental controls",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const exportOptions = [
    { format: "Braille", description: "Export content in Braille format", icon: "⠃" },
    { format: "Large Print", description: "High contrast, large text documents", icon: "📄" },
    { format: "Audio", description: "MP3 audio files with natural speech", icon: "🔊" },
    { format: "Sign Language", description: "Video content with sign language interpretation", icon: "👋" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20" id="accessibility">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Universal</span> Accessibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple input methods, comprehensive assistive technology integration, 
            and flexible content export options ensure everyone can learn effectively.
          </p>
        </div>

        {/* Input Methods */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Multiple Input Methods</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inputMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth text-center bg-gradient-to-br from-card to-primary/5">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-center">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.features.map((feature, fIndex) => (
                      <Badge key={fIndex} variant="outline" className="text-xs mr-1 mb-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accessibility Tools */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Comprehensive Assistive Technology</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessibilityTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth text-center border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${tool.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <tool.icon className={`h-8 w-8 ${tool.color}`} />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-center">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Export Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Flexible Content Export</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth bg-gradient-to-br from-card to-secondary/5">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <CardTitle className="text-lg">{option.format}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Accessibility Compliance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">WCAG 2.1</div>
              <p className="text-muted-foreground">Level AA Compliant</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">508</div>
              <p className="text-muted-foreground">Section 508 Compatible</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">ADA</div>
              <p className="text-muted-foreground">Americans with Disabilities Act</p>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Our platform meets international accessibility standards and undergoes regular 
            audits to ensure compliance with the latest guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;