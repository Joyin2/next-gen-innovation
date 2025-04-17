import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg">
        <div className="relative overflow-hidden aspect-video">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <CardContent className="pt-6 flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-indigo-100 text-indigo-800">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0 flex justify-end space-x-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Github size={20} className="text-gray-700" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors"
            >
              <ExternalLink size={20} className="text-indigo-700" />
            </motion.a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
