import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users, Tag } from "lucide-react";

export default function Projects() {
  useEffect(() => {
    document.title = "Our Projects | Next Generation Innovation";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "Smart Traffic Management System",
      description: "An AI-powered traffic management system for urban areas that optimizes traffic flow and reduces congestion.",
      image: "https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "smart-city",
      year: "2023",
      client: "New York Department of Transportation",
      link: "#"
    },
    {
      title: "Emergency Response Platform",
      description: "A comprehensive platform for emergency services to coordinate response efforts during natural disasters and other emergencies.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "public-safety",
      year: "2022",
      client: "California Emergency Management Agency",
      link: "#"
    },
    {
      title: "Cybersecurity Framework for Government",
      description: "A robust cybersecurity framework designed specifically for state and local government agencies to protect sensitive data.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "cybersecurity",
      year: "2023",
      client: "Multi-State Information Sharing & Analysis Center",
      link: "#"
    },
    {
      title: "Citizen Engagement Portal",
      description: "A digital platform that enables citizens to engage with local government services, report issues, and access information.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "digital-services",
      year: "2022",
      client: "City of Chicago",
      link: "#"
    },
    {
      title: "Data Analytics for Public Health",
      description: "An advanced analytics solution that helps public health departments track and respond to health trends and emergencies.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "data-analytics",
      year: "2023",
      client: "State Health Department",
      link: "#"
    },
    {
      title: "Smart Waste Management",
      description: "IoT-based waste management system that optimizes collection routes and schedules based on real-time fill levels.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "smart-city",
      year: "2022",
      client: "Metropolitan Waste Management",
      link: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "smart-city", name: "Smart City" },
    { id: "public-safety", name: "Public Safety" },
    { id: "cybersecurity", name: "Cybersecurity" },
    { id: "digital-services", name: "Digital Services" },
    { id: "data-analytics", name: "Data Analytics" }
  ];

  return (
    <main className="pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-700 blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-sm dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Our Projects
              </span>
            </h1>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
            >
              Explore our innovative solutions for state and local government organizations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-background/50 dark:bg-gray-800/30 border border-border text-foreground hover:bg-muted/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-cyan-500/30 backdrop-blur-sm text-cyan-100 text-xs rounded-full">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-cyan-500" />
                      {project.client}
                    </div>
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}