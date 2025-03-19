
import { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 50;
const PARTICLE_SIZE_RANGE = { min: 1, max: 3 };
const PARTICLE_SPEED_RANGE = { min: 0.2, max: 0.8 };

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
}

export default function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  
  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      if (canvas && ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create particles
    particles.current = Array.from({ length: PARTICLE_COUNT }).map(() => createParticle(canvas.width, canvas.height));
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Pulse opacity
        particle.opacity += 0.01 * particle.pulseSpeed;
        if (particle.opacity > 0.8 || particle.opacity < 0.1) {
          particle.pulseSpeed *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `rgba(251, 191, 36, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connecting lines to nearby particles
        particles.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(251, 191, 36, ${0.15 * (1 - distance / 150) * particle.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
        
        // Reset if off screen
        if (
          particle.x < -50 || 
          particle.x > canvas.width + 50 || 
          particle.y < -50 || 
          particle.y > canvas.height + 50
        ) {
          resetParticle(particle, canvas.width, canvas.height);
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particles.current.length) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particles.current.forEach((particle, index) => {
        // Add slight movement based on mouse position (stronger for particles with larger size)
        const parallaxFactor = particle.size / PARTICLE_SIZE_RANGE.max;
        particle.x += (mouseX - window.innerWidth / 2) * 0.001 * parallaxFactor;
        particle.y += (mouseY - window.innerHeight / 2) * 0.001 * parallaxFactor;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// Helper functions
function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: PARTICLE_SIZE_RANGE.min + Math.random() * (PARTICLE_SIZE_RANGE.max - PARTICLE_SIZE_RANGE.min),
    speedX: (Math.random() - 0.5) * PARTICLE_SPEED_RANGE.max,
    speedY: (Math.random() - 0.5) * PARTICLE_SPEED_RANGE.max,
    opacity: 0.1 + Math.random() * 0.5,
    pulseSpeed: 0.5 + Math.random() * 0.5
  };
}

function resetParticle(particle: Particle, width: number, height: number): void {
  // Reset position to edge of screen
  if (particle.x < 0) {
    particle.x = width;
  } else if (particle.x > width) {
    particle.x = 0;
  }
  
  if (particle.y < 0) {
    particle.y = height;
  } else if (particle.y > height) {
    particle.y = 0;
  }
  
  // Randomize speed
  particle.speedX = (Math.random() - 0.5) * (PARTICLE_SPEED_RANGE.max - PARTICLE_SPEED_RANGE.min) + 
    (particle.speedX > 0 ? PARTICLE_SPEED_RANGE.min : -PARTICLE_SPEED_RANGE.min);
  particle.speedY = (Math.random() - 0.5) * (PARTICLE_SPEED_RANGE.max - PARTICLE_SPEED_RANGE.min) + 
    (particle.speedY > 0 ? PARTICLE_SPEED_RANGE.min : -PARTICLE_SPEED_RANGE.min);
}
