import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  size: 'large' | 'medium' | 'small';
  link?: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern online store with seamless shopping experience",
    image: "/placeholder.svg",
    category: "Web Development",
    size: "large",
    link: "#"
  },
  {
    id: "2", 
    title: "Mobile App UI",
    description: "Clean and intuitive mobile interface design",
    image: "/placeholder.svg",
    category: "UI/UX Design",
    size: "medium",
    link: "#"
  },
  {
    id: "3",
    title: "Brand Identity",
    description: "Complete branding solution for startup",
    image: "/placeholder.svg", 
    category: "Branding",
    size: "medium",
    link: "#"
  },
  {
    id: "4",
    title: "Dashboard Analytics",
    description: "Data visualization and analytics platform",
    image: "/placeholder.svg",
    category: "Web Development", 
    size: "small",
    link: "#"
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Personal portfolio with modern animations",
    image: "/placeholder.svg",
    category: "Web Development",
    size: "small", 
    link: "#"
  },
  {
    id: "6",
    title: "Marketing Campaign",
    description: "Creative digital marketing materials",
    image: "/placeholder.svg",
    category: "Marketing",
    size: "medium",
    link: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const sizeClasses = {
    large: "col-span-2 row-span-2 h-96",
    medium: "col-span-1 row-span-1 h-48", 
    small: "col-span-1 row-span-1 h-32"
  };

  return (
    <Card className={`${sizeClasses[project.size]} group relative overflow-hidden bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
      <CardContent className="p-0 h-full relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-muted/20"
          style={{ 
            backgroundImage: `url(${project.image})`,
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary-foreground rounded-full mb-3">
              {project.category}
            </span>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
          
          {/* External Link Icon */}
          <div className="flex justify-end">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/40 transition-colors">
              <ExternalLink className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section className="min-h-screen bg-background py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work spanning web development, UI/UX design, and creative solutions
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;