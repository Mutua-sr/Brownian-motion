//sketch.js
const canvas = document.getElementById('brownianCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 100; // Number of particles
const maxSpeed = 2; // Maximum speed of particles

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * maxSpeed * 2 - maxSpeed;
        this.vy = Math.random() * maxSpeed * 2 - maxSpeed;
        this.radius = 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off the walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }
}

// Initialize particles
for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();
