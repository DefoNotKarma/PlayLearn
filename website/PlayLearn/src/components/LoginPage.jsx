import React, { useEffect } from 'react';
import './CSS/LoginPage.css';

function Login() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let dots = [];
    const maxDistance = 100;
    const speed = 0.5; // Adjust speed as necessary

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }


    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.creationTime = Date.now();
        this.vx = random(-speed, speed);
        this.vy = random(-speed, speed);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }

    }

    for (let i = 0; i < 70; i++) {
      dots.push(new Dot(random(0, canvas.width), random(0, canvas.height)));
    }

    function drawLines() {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
            ctx.stroke();
          }
        }
      }
    }


    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach(dot => {
          dot.update();
          dot.draw();
        });
      

      drawLines();
      requestAnimationFrame(animate);
      
    }

    canvas.addEventListener('click', (e) => {
      dots.push(new Dot(e.clientX, e.clientY));
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.location.reload()
    });

    animate();

  }, []);

  return (
    <div className="form-container">
      <div className="canvas-container">
        <canvas id="canvas"></canvas>
      </div>
      <div className="form">
        <h1>Login Page</h1> <br />
        <form action="POST">
          <label>Username</label>
          <input type="text" className="username" required/><br/>
          <label>Password</label>
          <input type="password" className="password" required/><br/>
          <button type="submit">Login</button>
          <a href='/register'>Create an account</a>
        </form>
      </div>
      <a href='/application'><button>Jump to application</button></a>
    </div>
  );
}

export default Login;
