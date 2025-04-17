import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertProjectSchema, insertTeamSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/projects", async (_req, res) => {
    try {
      // Simulate project retrieval
      res.status(200).json([
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
      ]);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/team", async (_req, res) => {
    try {
      // Simulate team retrieval
      res.status(200).json([
        {
          id: 1,
          name: "Sarah Johnson",
          role: "CEO & Founder",
          bio: "With over 15 years of experience in IT and software development, Sarah leads our company's vision and strategy.",
          imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "sarah@technova.com",
          social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
          }
        },
        {
          id: 2,
          name: "David Chen",
          role: "CTO",
          bio: "David oversees all technical aspects of the company, ensuring we deliver cutting-edge solutions to our clients.",
          imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "david@technova.com",
          social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
          }
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "Lead Designer",
          bio: "Emily brings creativity and user-centered design principles to all our projects, creating beautiful and functional interfaces.",
          imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "emily@technova.com",
          social: {
            linkedin: "https://linkedin.com"
          }
        },
        {
          id: 4,
          name: "Michael Patel",
          role: "Senior Developer",
          bio: "Michael specializes in complex backend systems and cloud architecture, solving the most challenging technical problems.",
          imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "michael@technova.com",
          social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
          }
        },
        {
          id: 5,
          name: "Alexandra Kim",
          role: "Project Manager",
          bio: "Alex ensures that projects are delivered on time and within scope, maintaining clear communication with clients.",
          imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "alex@technova.com",
          social: {
            linkedin: "https://linkedin.com"
          }
        },
        {
          id: 6,
          name: "Thomas Wilson",
          role: "DevOps Engineer",
          bio: "Thomas builds and maintains our infrastructure, ensuring smooth deployments and optimal performance of our systems.",
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          email: "thomas@technova.com",
          social: {
            linkedin: "https://linkedin.com"
          }
        }
      ]);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      // In a real app, you would save this to the database
      // For now, just return success
      console.log("Contact form submission:", data);
      
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
