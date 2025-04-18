import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/lib/firebase";

// Fallback projects data in case of error
const fallbackProjects: Array<{
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}> = [];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Fetch projects data from Firebase
  const { data: projects = fallbackProjects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });
  
  // Type assertion for the projects data
  const typedProjects = projects as typeof fallbackProjects;
  
  const filteredProjects = typedProjects.filter(
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
