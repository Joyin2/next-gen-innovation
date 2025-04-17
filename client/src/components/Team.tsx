import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "./TeamCard";
import { useQuery } from "@tanstack/react-query";

// Demo team data
const demoTeam = [
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
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // Fetch team data
  const { data: team = demoTeam } = useQuery({
    queryKey: ['/api/team'],
    queryFn: async () => {
      return demoTeam; // In a real app, we would fetch from the API
    }
  });

  return (
    <section id="team" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our talented team of professionals dedicated to delivering exceptional IT solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageUrl={member.imageUrl}
              email={member.email}
              social={member.social}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
