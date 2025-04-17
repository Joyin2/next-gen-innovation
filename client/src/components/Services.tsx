import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Server, Shield, Smartphone, Zap } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const services = [
  {
    icon: <Code className="h-12 w-12 text-indigo-500" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges."
  },
  {
    icon: <Globe className="h-12 w-12 text-indigo-500" />,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-indigo-500" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    icon: <Server className="h-12 w-12 text-indigo-500" />,
    title: "Cloud Services",
    description: "Scalable cloud solutions, migration services, and cloud-native application development."
  },
  {
    icon: <Shield className="h-12 w-12 text-indigo-500" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from digital threats."
  },
  {
    icon: <Zap className="h-12 w-12 text-indigo-500" />,
    title: "IT Consulting",
    description: "Strategic technology advice and digital transformation consulting for your business."
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative IT solutions to help businesses thrive in the digital era.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <AnimatedCard key={index} index={index}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
