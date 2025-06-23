import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "./TeamCard";
import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "@/lib/firebase";

// Fallback team data in case of error
const fallbackTeam: Array<{
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}> = [];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // Fetch team data from Firebase
  const { data: team = fallbackTeam, isLoading } = useQuery({
    queryKey: ['team'],
    queryFn: getTeamMembers
  });
  
  // Type assertion for team data
  const typedTeam = team as typeof fallbackTeam;

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
          {typedTeam.map((member, index) => (
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
