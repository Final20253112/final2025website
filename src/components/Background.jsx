import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let fireworks = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Firework {
      constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = 3;
        this.angle = Math.atan2(targetY - y, targetX - x);
        this.velocity = {
          x: Math.cos(this.angle) * this.speed,
          y: Math.sin(this.angle) * this.speed
        };
        this.distanceToTarget = Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2));
        this.distanceTraveled = 0;
        this.trail = [];
        this.trailLength = 5;
        this.exploded = false;
        this.particles = [];
      }

      update() {
        if (!this.exploded) {
          this.trail.push({ x: this.x, y: this.y });
          if (this.trail.length > this.trailLength) {
            this.trail.shift();
          }

          this.x += this.velocity.x;
          this.y += this.velocity.y;
          this.distanceTraveled = Math.sqrt(Math.pow(this.x - (canvas.width / 2), 2) + Math.pow(this.y - canvas.height, 2));

          if (this.distanceTraveled >= this.distanceToTarget) {
            this.explode();
          }
        } else {
          this.particles.forEach((particle, index) => {
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
            particle.velocity.y += 0.05;
            particle.alpha -= 0.01;
            particle.radius *= 0.98;

            if (particle.alpha <= 0) {
              this.particles.splice(index, 1);
            }
          });
        }
      }

      explode() {
        this.exploded = true;
        const colors = ['#ffd700', '#00ff88', '#ff6b9d', '#9945FF', '#ffffff'];
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 / particleCount) * i;
          const speed = Math.random() * 4 + 2;
          this.particles.push({
            x: this.x,
            y: this.y,
            velocity: {
              x: Math.cos(angle) * speed,
              y: Math.sin(angle) * speed
            },
            radius: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1
          });
        }
      }

      draw() {
        if (!this.exploded) {
          ctx.beginPath();
          ctx.moveTo(this.trail[0]?.x || this.x, this.trail[0]?.y || this.y);
          for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          ctx.lineTo(this.x, this.y);
          ctx.strokeStyle = '#ffd700';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          this.particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.alpha;
            ctx.fill();
            ctx.globalAlpha = 1;
          });
        }
      }

      isDead() {
        return this.exploded && this.particles.length === 0;
      }
    }

    const launchFirework = () => {
      const x = canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.5;
      const targetX = x + (Math.random() - 0.5) * 200;
      const targetY = Math.random() * canvas.height * 0.4 + 50;
      fireworks.push(new Firework(x, canvas.height, targetX, targetY));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.isDead()) {
          fireworks.splice(index, 1);
        }
      });

      if (Math.random() < 0.02) {
        launchFirework();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // CSS Particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    
    // Clear existing particles if any
    container.innerHTML = '';
    
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full animate-float';
      
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      const hue = Math.random() > 0.5 ? '51' : '140'; // Gold or Green
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 50%)`;
      particle.style.opacity = '0.6';
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <>
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1]" />
    </>
  );
};

export default Background;

