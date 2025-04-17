import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
  index: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  imageUrl,
  email,
  social,
  index
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full flex justify-center space-x-4">
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ y: -5 }}
                className="bg-white p-2 rounded-full text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <Mail size={18} />
              </motion.a>
              {social?.linkedin && (
                <motion.a 
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-full text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
              {social?.twitter && (
                <motion.a 
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-full text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-indigo-600 mb-3">{role}</p>
          <p className="text-gray-600 text-sm">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
