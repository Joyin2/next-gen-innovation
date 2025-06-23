import { useCallback, useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/use-mobile";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const windowSize = useWindowSize();
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  // Initialize particles
  const initParticles = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.random() * 0.5 + 0.5})`,
      });
    }
    
    particlesRef.current = particles;
  }, []);

  // Update and draw particles
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }
      
      // Mouse interaction
      const dx = particle.x - mouseRef.current.x;
      const dy = particle.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouseRef.current.radius) {
        const angle = Math.atan2(dy, dx);
        const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
        
        particle.x += Math.cos(angle) * force * 2;
        particle.y += Math.sin(angle) * force * 2;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Draw connections
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(150, 150, 255, ${1 - distance / 150})`;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      }
    });
    
    requestAnimationFrame(animate);
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  }, []);

  useEffect(() => {
    initParticles();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initParticles, animate, handleMouseMove]);

  // Reinitialize when window size changes
  useEffect(() => {
    initParticles();
  }, [windowSize, initParticles]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-gradient-to-b from-indigo-900 via-gray-900 to-black z-0"
    />
  );
}
