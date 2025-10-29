import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Code2, Server, Cloud, Database, GitBranch, Terminal } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Index = () => {
  const skills = {
    languagesFrameworks: ["Java", "Python", "Spring Boot"],
    cloud: ["AWS EKS", "AWS ECS", "AWS S3", "AWS Lambda", "AWS RDS", "Terraform"],
    devops: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure DevOps"],
    databases: ["PostgreSQL", "Kafka", "ksqlDB"],
    tools: ["Git", "Gradle", "JUnit", "TestNG", "Gatling"]
  };

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Equal Experts",
      period: "Aug 2023 - Present",
      description: "Building HR SAAS platform with AspNet, DotNet on AWS EKS with Terraform and Docker.",
      tech: ["Terraform", "Kubernetes", "Helm", "ArgoCD", "Platform Engineering", "AWS EKS", "AspNet", "DotNet", "Docker", "GitHub Actions", "Octopus Deploy"]
    },
    {
      title: "Senior Consultant",
      company: "Thoughtworks",
      period: "Sep 2022 - Aug 2023",
      description: "Built RESTful domain APIs for e-commerce platform with event-based system using Kafka. Led data pipeline setup and performance testing.",
      tech: ["Java 17", "Spring Boot", "Kafka", "ksqlDB", "AWS", "Gradle", "Jenkins", "Gatling"]
    },
    {
      title: "Consultant",
      company: "Thoughtworks",
      period: "Jul 2020 - Aug 2022",
      description: "Developed geolocation-based search microservices. Enhanced geo-spatial query performance, TPS from 48 to 126. Set up CI/CD pipeline and mentored 2 team members.",
      tech: ["Java 11", "Spring Boot", "Postgres", "Postgis", "AWS ECS", "Docker", "Azure Pipeline"]
    },
    {
      title: "Graduate Consultant",
      company: "Thoughtworks",
      period: "Jun 2019 - Jun 2020",
      description: "Migrated on-premise Hadoop server to AWS EMR. Implemented ML model integration in data pipeline.",
      tech: ["Java 8", "Python", "Spark", "Hadoop", "AWS EMR", "Lambda", "CloudFormation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-start gap-8 mb-8">
            <img 
              src={profileImage} 
              alt="Snigdhajyoti Ghosh" 
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-primary/20 glow object-cover animate-in fade-in zoom-in duration-700"
            />
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                <span className="text-gradient">Snigdhajyoti Ghosh</span>
              </h1>
            </div>
          </div>
          
          <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            Software Developer | DevOps Engineer | Senior Consultant
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            6+ years of experience building scalable microservices, cloud infrastructure, and data pipelines. 
            Passionate about solving complex problems with technology and contributing to open source.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono glow" asChild>
              <a href="mailto:connect@snigji.com">
                <Mail className="w-4 h-4 mr-2" />
                connect@snigji.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass border-primary/20 hover:border-primary/40">
              <Phone className="w-4 h-4 mr-2" />
              +91 7428296269
            </Button>
            <Button size="lg" variant="outline" className="glass border-primary/20 hover:border-primary/40" asChild>
              <a href="https://github.com/snigdhasjg" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass border-primary/20 hover:border-primary/40" asChild>
              <a href="https://www.linkedin.com/in/snigdhajyoti/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="glass p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">About</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a Software Developer with 6+ years of experience, I have a passion for using technology to solve complex problems 
            and improve the user experience. I am dedicated to staying up-to-date with the latest industry trends and advancements, 
            and regularly contribute to open source projects as a way to give back to the tech community. I thrive in fast-paced 
            environments and enjoy working collaboratively with cross-functional teams to deliver high-quality products that meet 
            and exceed customer expectations.
          </p>
        </Card>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-12">
          <Server className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>

        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass p-6 lg:p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                  <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                </div>
                <span className="text-muted-foreground font-mono text-sm mt-2 lg:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-12">
          <GitBranch className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <Card className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Languages & Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languagesFrameworks.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Cloud & IaC</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.cloud.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.devops.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Tools & Testing</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Education & Publications */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl">
          <Card className="glass p-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div>
              <h3 className="text-lg font-bold text-primary">Bachelor of Technology (B.Tech.)</h3>
              <p className="text-foreground font-semibold">Electronics and Communication Engineering</p>
              <p className="text-muted-foreground">Netaji Subhash Engineering College</p>
              <p className="text-muted-foreground font-mono text-sm mt-2">Jul 2015 - Jun 2019</p>
              <p className="text-primary font-bold mt-2">CGPA: 7.98</p>
            </div>
          </Card>

          <Card className="glass p-8">
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <div>
              <a 
                href="https://link.springer.com/chapter/10.1007/978-981-15-8366-7_13"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-lg font-bold text-primary group-hover:underline flex items-center gap-2">
                  An Approach to Geometric Modelling Using Genetic Programming
                  <ExternalLink className="w-4 h-4" />
                </h3>
              </a>
              <p className="text-foreground font-semibold">Springer</p>
              <p className="text-muted-foreground font-mono text-sm mt-2">Published: Feb 04, 2021</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Derived the Pythagorean theorem using machine learning with a data-driven approach, 
                without traditional geometric proofs.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-16 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>India</span>
            <span className="mx-2">•</span>
            <span>English, Hindi, Bengali</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Snigdhajyoti Ghosh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
