import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="mesh-gradient"></div>

  <!-- Floating Dock -->
  <div id="floating-dock" class="floating-dock">
    <div class="timer">
      <span style="font-size: 0.8rem; opacity: 0.6; display: block;">Batch Starts In</span>
      <span id="dock-timer" style="font-family: var(--mono-font); font-weight: 700;">05:22:06:34</span>
    </div>
    <div style="width: 1px; height: 30px; background: rgba(255,255,255,0.1);"></div>
    <a href="#" class="btn-primary" style="padding: 10px 24px; font-size: 0.9rem;">Join Now</a>
  </div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div style="display: inline-flex; align-items: center; gap: 8px; color: var(--cyber-blue); font-family: var(--mono-font); font-size: 0.9rem; margin-bottom: 24px;">
        <span class="pulse-dot"></span> SECURE EARLY ACCESS
      </div>
      <h1>Stop Applying.<br>Start Being Discovered.</h1>
      <p>While you sleep, our AI Agents bypass the 'Human Wall' and land your resume directly in the inbox of decision-makers.</p>
      <div class="hero-actions">
        <a href="#checkout" class="btn-primary btn-high-gloss" id="cta-hero">Secure My AI Agent →</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="digital-aura"></div>
      <img src="/ashutosh.jpg" alt="Ashutosh Lath" class="founder-portrait">
      <div class="glass-card" style="position: absolute; bottom: 20px; left: -20px; padding: 16px; display: flex; align-items: center; gap: 12px;">
        <div style="padding: 10px; background: rgba(99, 102, 241, 0.2); border-radius: 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <div>
          <div style="font-weight: 700; font-size: 0.9rem;">20,000+ Careers</div>
          <div style="font-size: 0.8rem; opacity: 0.6;">Transformed via AI</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Agent Crew Section -->
  <section id="agents">
    <div style="text-align: center; margin-bottom: 80px;">
      <h2 style="font-size: 3rem;">Your Personal Agent Crew</h2>
      <p>Three elite AI specialists working 24/7 to skip the line.</p>
    </div>
    <div class="bento-grid">
      <div class="glass-card bento-item large">
        <div class="scan-line"></div>
        <img src="/hunter.png" alt="The Hunter" style="width: 120px; margin-bottom: 24px;">
        <h3>The Hunter</h3>
        <p>Uncovers hidden roles before they hit LinkedIn. Accesses the 'unlisted' job market using proprietary crawling tech.</p>
      </div>
      <div class="glass-card bento-item">
        <div class="scan-line"></div>
        <img src="/outreach.png" alt="The Tailor" style="width: 80px; margin-bottom: 24px;">
        <h3>The Tailor</h3>
        <p>Auto-rewrites resumes for 100% ATS match on every single application.</p>
      </div>
      <div class="glass-card bento-item">
        <div class="scan-line"></div>
        <img src="/networker.png" alt="The Networker" style="width: 80px; margin-bottom: 24px;">
        <h3>The Networker</h3>
        <p>Autonomously messages Hiring Managers on LinkedIn with hyper-personalized hooks.</p>
      </div>
      <div class="glass-card bento-item large" style="background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), transparent);">
        <div style="display: flex; gap: 40px; align-items: center;">
          <div style="flex: 1;">
            <h3>Direct Integration</h3>
            <p>Connects with G-Mail, LinkedIn, and Greenhouse to manage everything from find to signed.</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <div class="glass-card" style="padding: 12px; border-radius: 12px;">GH</div>
            <div class="glass-card" style="padding: 12px; border-radius: 12px;">LI</div>
            <div class="glass-card" style="padding: 12px; border-radius: 12px;">GM</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Comparison Section -->
  <section class="comparison">
    <div class="comp-card death-loop">
      <h2 style="color: #ef4444; margin-bottom: 16px;">The Death Loop</h2>
      <p>The traditional way is designed to keep you waiting.</p>
      <ul class="status-list">
        <li>❌ Refreshing portals every 30 minutes</li>
        <li>❌ Ghosted by automated HR filters</li>
        <li>❌ "Applying" but never "Interviewing"</li>
        <li>❌ Competing with 2,000+ applicants</li>
      </ul>
    </div>
    <div class="comp-card fast-track">
      <div style="display: inline-block; padding: 4px 12px; background: rgba(16, 185, 129, 0.2); color: #10b981; border-radius: 100px; font-size: 0.8rem; font-weight: 700; margin-bottom: 16px;">RECOMMENDED</div>
      <h2 style="color: #10b981; margin-bottom: 16px;">The Fast Track</h2>
      <p>Leverage the system to work for you, not against you.</p>
      <ul class="status-list">
        <li>✅ AI Agents apply in the background</li>
        <li>✅ Bypass ATS through direct inboxing</li>
        <li>✅ 10x higher interview success rate</li>
        <li>✅ Negotiate from a position of power</li>
      </ul>
    </div>
  </section>

  <!-- Host Section -->
  <section id="host">
    <div class="glass-card" style="padding: 60px; display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: center;">
      <div style="position: relative;">
        <img src="/ashutosh.jpg" alt="Ashutosh Lath" style="width: 100%; border-radius: 20px; filter: grayscale(1) contrast(1.2);">
        <div style="position: absolute; top: -20px; right: -20px; background: var(--indigo); padding: 12px; border-radius: 12px; font-weight: 900; transform: rotate(15deg);">ELITE HOST</div>
      </div>
      <div>
        <h2 style="margin-bottom: 24px;">Meet the Architect of the<br>Hidden Job Market</h2>
        <p style="margin-bottom: 24px; font-size: 1.1rem;">Ashutosh doesn't just teach job hunting—he builds the systems that automate it. After scaling HR Tech for global giants, he's opening his proprietary "Cheat Code" to a select few.</p>
        <p style="opacity: 0.6; font-style: italic; margin-bottom: 32px;">"The job market is a game of algorithms. If you aren't using AI to beat them, you've already lost."</p>
        <div style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: #fff;">Ashutosh Lath</div>
      </div>
    </div>
  </section>

  <!-- Checkout Section / Urgency -->
  <section style="text-align: center;">
    <div class="glass-card" style="padding: 80px; max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: 3rem; margin-bottom: 20px;">Ready to Level Up?</h2>
      <p style="margin-bottom: 40px; font-size: 1.25rem;">Join the elite 1% using AI to skip the grind. Live batch starting soon.</p>
      
      <div style="margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-weight: 700;">Live Batch Capacity</span>
          <span style="color: var(--indigo); font-weight: 700;">85% Full</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>
      </div>

      <a href="#" class="btn-primary btn-high-gloss" id="cta-final" style="font-size: 1.5rem; padding: 24px 60px;">Unlock My AI Agent →</a>
      <p style="margin-top: 24px; font-size: 0.9rem;">Join 200+ candidates for only ₹199</p>
    </div>
  </section>

  <!-- Footer -->
  <footer style="padding: 60px 24px; text-align: center; opacity: 0.4; font-size: 0.9rem;">
    <p>&copy; 2026 AI JobHunter. Built for the high-tech executive.</p>
  </footer>

  <!-- Modal -->
  <div id="checkout-modal" class="modal-overlay">
    <div class="glass-card modal-content" style="text-align: center;">
      <h2 style="margin-bottom: 16px;">Almost There!</h2>
      <p style="margin-bottom: 32px;">You are one step away from reclaiming 40 hours/week of your life.</p>
      <div style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 16px; margin-bottom: 32px; text-align: left;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <span>AI Job-Hunting Bootcamp</span>
          <span style="font-weight: 700;">₹199</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; opacity: 0.6;">
          <span>Status</span>
          <span>Early Bird Access</span>
        </div>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;">Complete Payment</button>
      <button id="close-modal" style="background: none; border: none; color: white; margin-top: 16px; cursor: pointer; opacity: 0.4;">Maybe Later</button>
    </div>
  </div>
`

// Interactivity Scripts

// Timer Logic
const startTimer = () => {
  const targetDate = new Date('January 17, 2026 00:00:00').getTime();
  const update = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const timeStr = `${d.toString().padStart(2, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const dockTimer = document.getElementById('dock-timer');
    if (dockTimer) dockTimer.innerText = timeStr;
  };
  setInterval(update, 1000);
  update();
};

// Scroll Effects
const handleScroll = () => {
  const dock = document.getElementById('floating-dock');
  const scrollPct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  if (window.scrollY > 300) {
    dock.classList.add('visible');
  } else {
    dock.classList.remove('visible');
  }
};

// Modal Logic
const modal = document.getElementById('checkout-modal');
const openModal = (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};
const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

document.getElementById('cta-hero').addEventListener('click', openModal);
document.getElementById('cta-final').addEventListener('click', openModal);
document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

window.addEventListener('scroll', handleScroll);
startTimer();

// Intersection Observer for Reveal
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
  observer.observe(section);
});
