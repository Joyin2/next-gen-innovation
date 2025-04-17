import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";

// Demo projects data
const demoProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Interactive financial dashboard with real-time data visualization and analytics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/dashboard"
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    description: "Patient management mobile application for healthcare providers with telehealth features.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Twilio"],
    liveUrl: "https://example.com/healthcare-app",
    githubUrl: "https://github.com/example/healthcare-app"
  },
  {
    id: 4,
    title: "Cloud-Based CRM",
    description: "Enterprise customer relationship management system with advanced analytics.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["Angular", "Express", "PostgreSQL", "AWS"],
    liveUrl: "https://example.com/crm",
    githubUrl: "https://github.com/example/crm"
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Real-time inventory tracking system with barcode scanning and forecasting.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "software",
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    liveUrl: "https://example.com/inventory",
    githubUrl: "https://github.com/example/inventory"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "TensorFlow"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/example/fitness"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Fetch projects data
  const { data: projects = demoProjects } = useQuery({
    queryKey: ['/api/projects'],
    queryFn: async () => {
      return demoProjects; // In a real app, we would fetch from the API
    }
  });
  
  const filteredProjects = projects.filter(
    project => filter === "all" || project.category === filter
  );

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "software", label: "Software" }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of innovative solutions delivered to clients across industries.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                onClick={() => setFilter(category.value)}
                className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-full px-6 py-2 transition-all data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          {/* The content will be the same for all tabs since we're filtering with the state */}
          {categories.slice(1).map(category => (
            <TabsContent key={category.value} value={category.value} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
