---
layout: page
title: About
permalink: /about/
---

<div class="about-page">
  <div class="about-header">
    <div class="about-avatar-container">
      <img src="/img/shayan_about.jpeg" alt="Shayan Eskandari" class="about-avatar">
    </div>
    <div class="about-intro">
      <h1>{{ site.owner.name }}</h1>
      <p class="tagline">{{ site.owner.job }}</p>
    </div>
  </div>

  <div class="about-content">
    <section class="bio-section">
      <h2>Who I Am</h2>
      <p>I'm a security researcher ("hacker"), technologist, and educator, who bridges the gap between cutting-edge blockchain technology and real-world security challenges. With a PhD on the topic of "<a href="/scholar/#publications"><i>Uncovering Blockchain Challenges: Technical Nuances and Their Unforeseen Consequences</i></a>", I combine rigorous research with hands-on industry experience to advance the security of decentralized systems.</p>
      
      <p>From an early age, I had a talent for breaking things, whether it was my grandma's radio or school's computer. My first company started from jailbreaking my friends iPhones (and iPod touches RIP), and I was drawn to the thrill of finding exploits and learning the inside out of every system I encountered. This passion for understanding how things work, and where they can fail, has been a constant throughout my career.</p>

      <p>My <a href="/career/">professional evolution</a> began as a "Blockchain Engineer" at Bitaccess, when we were still figuring out what Bitcoin could become while learning about the challenges of a ATM mass production. I then transitioned to a Security Engineer role at ConsenSys Diligence, where I found my true calling in Web3 code auditing and security reviews. Ether Capital was my next stop, where I served as Chief Technology Officer, diving deep into the publicly traded markets (TradFi) with a focus on Ethereum technology and staking.  Now, at Creed, we are trying out a new approach to security work in Web3. Along the way, I've contributed to the community through <a href="/talks/#academic-lectures">talks</a>, <a href="/talks/#podcasts">podcasts</a>, and <a href="/scholar/#publications">research publications</a> that explore the intersection of technology, applied philosophy, and governance.</p>
      
      <p>I'm passionate about education and human connection, especially through <a href="/talks/#workshops-panels">workshops, panels</a>, <a href="/talks/#podcasts">podcasts</a>, and collaborate on interdisciplinary research around decentralized systems. </p>
      
      <p>When I'm not debugging smart contracts or reverse-engineering protocols, you might find me creating <a href="/art/">digital art</a> that explores the intersection of technology and human creativity, or experimenting with <a href="https://www.instagram.com/shayanbahal" target="_blank"> analogue photography</a>, or building <a href="/projects/">tools</a> that make complex blockchain concepts more accessible. Lately, I've been obsessing over "vibecoding"—that magical moment when an idea transforms into a living, fully functioning application. My latest experiments in bringing these digital dreams to life using AI can be found in my <a href="/apps/">app collection</a>.</p>
    </section>

    <!-- Split Layout Section -->
    <section class="split-section">
      <div class="split-content">
        <!-- Journey Highlights on the left -->
        <div class="split-left">
          <h2>Journey Highlights</h2>
          <div class="timeline">
            <div class="timeline-item">
              <span class="year">2024-2025</span>
              <h4>Current Focus</h4>
              <p>Leading Web3 security initiatives, conducting risk assessments, and vibecoding human-centric tools and applications </p>
            </div>
            <div class="timeline-item">
              <span class="year">2021-2023</span>
              <h4>Deep Dive into Ethereum Staking</h4>
              <p>R&D on enterprise-grade Ethereum staking infrastructure, solo-staking, and regulatory challenges</p>
            </div>
            <div class="timeline-item">
              <span class="year">2017-2021</span>
              <h4>Academic & Industry Balance</h4>
              <p>PhD research while conducting security audits for blockchain projects</p>
            </div>
            <div class="timeline-item">
              <span class="year">2013-2015</span>
              <h4>Discovered Bitcoin</h4>
              <p>While researching "Anomoly detection in Linux Kernel" I came across Bitcoin, and it seemed too good to be true. I spent six months trying to break it, but, as I often joke, it broke me. Later that year, I switched my master’s program to focus on the usability of Bitcoin </p>
            </div>
          </div>
        </div>
        
        <!-- Areas of Expertise on the right -->
        <div class="split-right">
          <h2>Areas of Expertise</h2>
          <div class="expertise-grid">
            <div class="expertise-item">
              <i class="fa fa-shield"></i>
              <h3>Security Research</h3>
              <p>Smart contract auditing, vulnerability discovery, and security architecture design</p>
            </div>
            <div class="expertise-item">
              <i class="fa fa-link"></i>
              <h3>Blockchain Technology</h3>
              <p>Ethereum, DeFi protocols, MEV, and distributed systems</p>
            </div>
            <div class="expertise-item">
              <i class="fa fa-code"></i>
              <h3>Software Development</h3>
              <p>Full-stack development, security tools, and automation</p>
            </div>
            <div class="expertise-item">
              <i class="fa fa-graduation-cap"></i>
              <h3>Education & Mentorship</h3>
              <p>Conference speaking, workshops, and hackathon mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <h2>What Drives Me</h2>
      <div class="values-grid">
        <div class="value-item">
          <h3>🔐 Security First</h3>
          <p>Building a safer digital world through proactive security research</p>
        </div>
        <div class="value-item">
          <h3>🌍 Open Source</h3>
          <p>Contributing to and supporting open-source security tools</p>
        </div>
        <div class="value-item">
          <h3>📚 Knowledge Sharing</h3>
          <p>Teaching and mentoring the next generation of security professionals</p>
        </div>
        <div class="value-item">
          <h3>🎨 Creative Problem Solving</h3>
          <p>Approaching security challenges with innovative solutions</p>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2>Technical Skills</h2>
      <div class="skills-container">
        <div class="radar-chart-container">
          <canvas id="skillsRadarChart" width="500" height="500"></canvas>
        </div>
      </div>
    </section>

    <div class="about-cta">
      <p>Interested in collaboration or have questions?</p>
      <a href="/connect/" class="btn btn-primary">Get in Touch</a>
    </div>
  </div>
</div>

<style>
.about-avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.about-avatar {
  width: 400px;
  height: 400px;
  border-radius: 25px;
  object-fit: cover;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 8px 15px rgba(0, 0, 0, 0.15),
    0 0 0 8px rgba(255, 255, 255, 0.9);
  transition: all 0.4s ease;
  border: 2px solid #fff;
  position: relative;
  z-index: 2;
}

.about-avatar:hover {
  transform: translateY(-8px) rotateY(5deg) rotateX(2deg);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 15px 25px rgba(0, 0, 0, 0.2),
    0 0 0 8px rgba(255, 255, 255, 0.95);
}

.about-avatar-container::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 208px;
  height: 208px;
  background: linear-gradient(135deg, #ff6b35, #1e3a5f, #ff6b35);
  border-radius: 25px;
  z-index: -1;
  opacity: 0.25;
  transition: all 0.4s ease;
  filter: blur(4px);
}

.about-avatar-container:hover::before {
  opacity: 0.35;
  transform: translateX(-50%) translateY(2px) rotate(1deg);
  filter: blur(6px);
}

/* Dark mode support */
[data-theme="dark"] .about-avatar {
  border-color: var(--surface-color);
}

[data-theme="dark"] .about-avatar-container::before {
  opacity: 0.3;
}

[data-theme="dark"] .about-avatar-container:hover::before {
  opacity: 0.4;
}

@media (max-width: 768px) {
  .about-avatar {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
  
  .about-avatar-container::before {
    width: 208px;
    height: 208px;
    border-radius: 20px;
    top: 6px;
  }
}

/* Psychedelic Glitch Effect for Value Items */
.value-item {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.value-item:hover {
  animation: psychedelicGlitch 1.2s ease-in-out infinite;
  transform: scale(1.02);
}

@keyframes psychedelicGlitch {
  0% { 
    filter: hue-rotate(0deg) saturate(1) brightness(1);
    transform: scale(1.02) translateX(0);
  }
  20% { 
    filter: hue-rotate(90deg) saturate(1.5) brightness(1.2);
    transform: scale(1.02) translateX(-2px);
    text-shadow: 2px 0 #ff6b35, -2px 0 #1e3a5f;
  }
  40% { 
    filter: hue-rotate(180deg) saturate(2) brightness(0.8);
    transform: scale(1.02) translateX(2px);
    text-shadow: -2px 0 #ff6b35, 2px 0 #1e3a5f;
  }
  60% { 
    filter: hue-rotate(270deg) saturate(1.8) brightness(1.3);
    transform: scale(1.02) translateX(-1px);
    text-shadow: 1px 0 #ff6b35, -1px 0 #1e3a5f;
  }
  80% { 
    filter: hue-rotate(360deg) saturate(1.2) brightness(1.1);
    transform: scale(1.02) translateX(1px);
  }
  100% { 
    filter: hue-rotate(0deg) saturate(1) brightness(1);
    transform: scale(1.02) translateX(0);
    text-shadow: none;
  }
}

.value-item:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(255, 107, 53, 0.1), 
    rgba(30, 58, 95, 0.1), 
    rgba(255, 107, 53, 0.1));
  z-index: -1;
  animation: psychedelicPulse 1.2s ease-in-out infinite;
}

@keyframes psychedelicPulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Split Layout Section */
.split-section {
  margin: 4rem 0;
}

.split-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.split-left, .split-right {
  padding: 0;
}

.split-left h2, .split-right h2 {
  color: #1e3a5f;
  margin-bottom: 2rem;
  font-size: 1.75rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .split-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 480px) {
  .about-avatar {
    width: 250px;
    height: 250px;
  }
  
  .about-avatar-container::before {
    width: 208px;
    height: 208px;
    top: 6px;
  }
  
  .split-content {
    gap: 2rem;
  }
}

/* Skills Section */
.skills-section {
  margin: 4rem 0;
}

.skills-section h2 {
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
  font-size: 1.75rem;
}

.skills-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.radar-chart-container {
  flex: 0 0 500px;
  max-width: 500px;
  position: relative;
}

/* Dark Mode Support for Skills */
[data-theme="dark"] .skills-section h2 {
  color: var(--text-color);
}

/* Responsive Design for Skills */
@media (max-width: 768px) {
  .radar-chart-container {
    max-width: 400px;
    width: 100%;
  }
  
  .skills-section h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .radar-chart-container {
    max-width: 300px;
  }
  
  .skills-section {
    margin: 3rem 0;
  }
}
</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('skillsRadarChart');
  
  if (!ctx) {
    console.warn('Skills radar chart canvas not found');
    return;
  }

  // Skills data from Jekyll
  const skillsData = [
    {% for skill in site.data.index.skills.skills %}
    {
      name: "{{ skill.name }}",
      score: {{ skill.score }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  // Sort skills by score for better visualization
  skillsData.sort((a, b) => b.score - a.score);

  const labels = skillsData.map(skill => skill.name);
  const scores = skillsData.map(skill => skill.score);

  // Create gradient
  const canvas = ctx.getContext('2d');
  const gradient = canvas.createRadialGradient(250, 250, 0, 250, 250, 250);
  gradient.addColorStop(0, 'rgba(255, 107, 53, 0.2)');
  gradient.addColorStop(1, 'rgba(30, 58, 95, 0.1)');

  const borderGradient = canvas.createRadialGradient(250, 250, 0, 250, 250, 250);
  borderGradient.addColorStop(0, 'rgba(255, 107, 53, 0.8)');
  borderGradient.addColorStop(1, 'rgba(30, 58, 95, 0.6)');

  const config = {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Technical Skills',
        data: scores,
        backgroundColor: gradient,
        borderColor: borderGradient,
        borderWidth: 2,
        pointBackgroundColor: '#ff6b35',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#1e3a5f',
        pointHoverBorderColor: '#ff6b35',
        pointHoverBorderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(30, 58, 95, 0.9)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#ff6b35',
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.raw + '%';
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            font: {
              size: 12,
              weight: '500'
            },
            color: '#374151'
          },
          ticks: {
            display: false,
            stepSize: 20
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'point'
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  };

  // Check for dark mode and adjust colors
  function updateChartColors() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
      config.options.scales.r.angleLines.color = 'rgba(255, 255, 255, 0.2)';
      config.options.scales.r.grid.color = 'rgba(255, 255, 255, 0.2)';
      config.options.scales.r.pointLabels.color = '#e5e7eb';
    } else {
      config.options.scales.r.angleLines.color = 'rgba(0, 0, 0, 0.1)';
      config.options.scales.r.grid.color = 'rgba(0, 0, 0, 0.1)';
      config.options.scales.r.pointLabels.color = '#374151';
    }
  }

  updateChartColors();
  
  try {
    const chart = new Chart(ctx, config);
    
    // Update chart colors when theme changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateChartColors();
          chart.update();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
  } catch (error) {
    console.error('Error creating skills chart:', error);
  }
});
</script>