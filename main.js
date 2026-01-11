import './style.css';
import { createIcons, icons } from 'lucide';

// --- SVGs & Components ---
const VerifiedBadge = `
  <div class="glass-card flex items-center gap-2 px-3 py-1.5 absolute top-4 right-4 z-20 animate-float bg-obsidian/50 backdrop-blur-md border border-white/10 rounded-full">
    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-glow-green"></span>
    <span class="text-xs font-semibold tracking-wide text-white">SYSTEM ACTIVE</span>
  </div>
`;

// --- Main Render ---
document.querySelector('#app').innerHTML = `
  <main class="relative min-h-screen selection:bg-indigo-glow selection:text-white pb-32 overflow-hidden">
    
    <!-- Background Glow -->
    <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-glow/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <!-- Floating Nav -->
    <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-700">
      <div class="px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 bg-obsidian/60 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 hover:border-white/20 transition-colors cursor-default">
         <div class="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-cyber-blue flex items-center justify-center shadow-inner">
           <i data-lucide="scan-search" class="w-3.5 h-3.5 text-white"></i>
         </div>
         <span class="font-bold tracking-tight text-sm text-white">AI JobHunter</span>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-20 z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Text Side (60%) -->
      <div class="lg:col-span-7 space-y-8">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          LIVE BOOTCAMP: LIMITED SEATS
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Stop Applying.<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-glow to-cyber-blue drop-shadow-sm">Start Being Discovered.</span>
        </h1>
        
        <p class="text-lg text-white/60 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          The "Hidden Job Market" isn't a myth—it's an exclusive club. We built the AI system that gets you the VIP pass, bypassing standard applications entirely.
        </p>

        <!-- Date Widget -->
        <div class="flex items-center gap-4 py-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
           <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <i data-lucide="calendar-days" class="w-6 h-6 text-indigo-400"></i>
           </div>
           <div>
              <p class="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-0.5">Next Live Cohort</p>
              <p class="text-lg font-bold text-white flex items-center gap-2">
                Jan 17th & 18th 
                <span class="text-white/40 text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10">Weekend</span>
                <span class="text-2xl animate-pulse">🇮🇳</span>
              </p>
           </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <button class="group relative px-8 py-4 bg-white text-obsidian rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
             <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-shimmer w-[200%] h-full z-10 pointer-events-none"></div>
             <span class="relative z-20 flex items-center gap-2">
               Join the Revolution
               <i data-lucide="arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1"></i>
             </span>
          </button>
          
          <div class="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
             <div class="flex -space-x-3">
               <div class="w-10 h-10 rounded-full bg-gray-600 border-2 border-obsidian flex items-center justify-center text-xs font-bold">AL</div>
               <div class="w-10 h-10 rounded-full bg-gray-500 border-2 border-obsidian flex items-center justify-center text-xs font-bold">SJ</div>
               <div class="w-10 h-10 rounded-full bg-gray-400 border-2 border-obsidian flex items-center justify-center text-xs font-bold">MK</div>
             </div>
             <div class="text-sm">
               <div class="font-bold text-white">Team of Experts</div>
               <div class="text-white/50 text-xs">Verified Mentors</div>
             </div>
          </div>
        </div>
      </div>

      <!-- Image Side (40%) -->
      <div class="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
        <div class="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent group">
          
          <!-- Image -->
          <img src="/ashutosh.jpg" class="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" alt="Ashutosh Lath">
          
          <!-- Overlays for "Aura" -->
          <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>
          <div class="absolute -inset-1 bg-gradient-to-tr from-indigo-glow/30 to-cyber-blue/30 rounded-3xl blur-2xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-700"></div>

          <!-- Floating Badge -->
          <div class="absolute bottom-6 left-6 right-6 glass-card p-4 border-l-4 border-indigo-glow bg-obsidian/60 backdrop-blur-xl">
             <p class="text-xs text-indigo-300 font-bold mb-1 uppercase tracking-wider">From the desk of</p>
             <p class="font-bold text-lg leading-tight text-white">Ashutosh Lath</p>
             <p class="text-xs text-white/50 mt-1">Architect of the Hidden Job Market</p>
          </div>

          ${VerifiedBadge}
        </div>
      </div>
    </section>

    <!-- THE ELITE CREW (Bento Grid) -->
    <section class="max-w-7xl mx-auto px-6 py-24 relative z-10">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold">Meet Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyber-blue">Digital Headhunters</span></h2>
        <p class="text-white/60 max-w-2xl mx-auto text-lg">We don't just give you advice. We give you agents that do the heavy lifting.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1: The Hunter -->
        <div class="glass-card p-8 hover:border-indigo-glow/50 transition-all duration-300 group relative overflow-hidden ring-1 ring-white/5 hover:ring-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
           <div class="absolute top-0 right-0 p-4 opacity-50"><i data-lucide="scan-search" class="w-12 h-12 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors"></i></div>
           <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 ring-1 ring-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
             <i data-lucide="target" class="w-6 h-6"></i>
           </div>
           <h3 class="text-xl font-bold mb-2 text-white">The Hunter</h3>
           <p class="text-white/60 text-sm mb-6 leading-relaxed">Scans 50+ platforms for "Hidden Roles" before they hit LinkedIn.</p>
           
           <!-- Active Status -->
           <div class="flex items-center gap-2 mb-4">
             <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span class="text-xs font-mono text-green-400">STATUS: ACTIVE</span>
           </div>

           <div class="w-full h-24 bg-black/50 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
              <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-shimmer"></div>
              <div class="p-4 space-y-3">
                 <div class="w-3/4 h-2 bg-indigo-500/20 rounded-full animate-pulse"></div>
                 <div class="w-1/2 h-2 bg-indigo-500/20 rounded-full animate-pulse delay-75"></div>
                 <div class="w-5/6 h-2 bg-indigo-500/20 rounded-full animate-pulse delay-150"></div>
              </div>
           </div>
        </div>

        <!-- Card 2: The Tailor -->
        <div class="glass-card p-8 md:col-span-2 hover:border-cyber-blue/50 transition-all duration-300 group relative overflow-hidden ring-1 ring-white/5 hover:ring-cyber-blue/50 hover:shadow-2xl hover:shadow-cyber-blue/10">
           <div class="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
             <div class="flex-1">
                <div class="w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center mb-6 text-cyber-blue ring-1 ring-cyber-blue/20 group-hover:bg-cyber-blue/20 transition-colors">
                  <i data-lucide="briefcase" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 text-white">The Tailor</h3>
                <p class="text-white/60 text-sm leading-relaxed mb-4">Automatically reconstructs your resume for every single application. Passes ATS 99.8% of the time.</p>
                
                 <!-- Active Status -->
                <div class="flex items-center gap-2">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span class="text-xs font-mono text-green-400">STATUS: ACTIVE</span>
                </div>
             </div>
             <div class="flex-1 w-full bg-black/60 rounded-xl border border-white/10 p-5 font-mono text-xs text-green-400 shadow-inner overflow-hidden">
                <div class="flex justify-between border-b border-white/10 pb-2 mb-3 text-white/70">
                  <span>Resume_v45.pdf</span>
                  <span class="text-green-400">100% Match</span>
                </div>
                <div class="space-y-2 opacity-80">
                  <p class="flex gap-2"><span class="text-white/30">></span> Analyzing job description...</p>
                  <p class="flex gap-2"><span class="text-white/30">></span> Keywords found: [React, Node, Scale]</p>
                  <p class="flex gap-2"><span class="text-white/30">></span> Optimizing bullet points...</p>
                  <p class="text-white animate-pulse flex gap-2"><span class="text-green-500">✓</span> Ready to send.</p>
                </div>
             </div>
           </div>
        </div>

        <!-- Card 3: The Networker -->
        <div class="glass-card p-8 md:col-span-3 hover:border-purple-500/50 transition-all duration-300 md:flex items-center gap-12 group ring-1 ring-white/5 hover:ring-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
           <div class="flex-1 max-w-sm">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <i data-lucide="message-circle" class="w-6 h-6"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">The Networker</h3>
              <p class="text-white/60 text-sm leading-relaxed mb-6">Bypasses the "Apply" button entirely. Finds the Hiring Manager, guesses their email, and drafts a hyper-personalized warm intro using psychological hooks.</p>
              
               <!-- Active Status -->
               <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-xs font-mono text-green-400">STATUS: ACTIVE</span>
            </div>
           </div>
           
           <!-- Flow Diagram Visual -->
           <div class="flex-1 w-full flex items-center justify-between relative mt-8 md:mt-0 px-4">
              <!-- Line -->
              <div class="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 -z-10">
                 <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full h-full animate-shimmer opacity-50"></div>
              </div>

              <!-- Node 1 -->
              <div class="flex flex-col items-center gap-3 group/node">
                 <div class="w-14 h-14 rounded-full bg-obsidian border border-white/20 flex items-center justify-center text-white/50 group-hover/node:border-white/50 group-hover/node:text-white transition-all shadow-lg scale-90 md:scale-100"><i data-lucide="building-2" class="w-6 h-6"></i></div>
                 <span class="text-[10px] uppercase font-bold text-white/40 tracking-widest bg-obsidian px-2">Company</span>
              </div>

              <!-- Node 2 (Hero) -->
              <div class="flex flex-col items-center gap-3 relative">
                 <div class="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                 <div class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 border-4 border-obsidian shadow-2xl flex items-center justify-center relative z-10 scale-90 md:scale-100"><i data-lucide="users" class="w-10 h-10 text-white"></i></div>
                 <span class="text-xs font-bold text-purple-400 bg-obsidian px-2 border border-purple-500/30 rounded-full py-0.5">Decision Maker</span>
              </div>

              <!-- Node 3 -->
              <div class="flex flex-col items-center gap-3 group/node">
                 <div class="w-14 h-14 rounded-full bg-obsidian border border-green-500/30 flex items-center justify-center text-green-500/50 group-hover/node:text-green-400 group-hover/node:border-green-500 transition-all shadow-lg scale-90 md:scale-100"><i data-lucide="check-circle-2" class="w-6 h-6"></i></div>
                 <span class="text-[10px] uppercase font-bold text-white/40 tracking-widest bg-obsidian px-2">Offer</span>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- AUTHORITY DEEP DIVE (Trust Stack) -->
    <section class="border-t border-white/5 bg-white/[0.02] relative overflow-hidden">
        <!-- Background Grid -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
      <div class="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <!-- Photo with Signature -->
        <div class="relative group perspective-1000">
             <div class="absolute inset-4 bg-indigo-500/20 rounded-2xl blur-2xl -z-10 group-hover:bg-indigo-500/30 transition-all duration-500"></div>
           <img src="/ashutosh.jpg" class="w-full max-w-sm lg:max-w-md mx-auto grayscale group-hover:grayscale-0 rounded-2xl border border-white/10 rotate-2 group-hover:rotate-0 transition-all duration-700 shadow-2xl" alt="Ashutosh">
           <div class="absolute bottom-12 -right-4 lg:-right-8 font-handwriting text-5xl text-white rotate-[-6deg] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style="font-family: 'Brush Script MT', cursive; text-shadow: 0 0 20px rgba(255,255,255,0.5);">
             Ashutosh Lath.
           </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">This isn't a "Course".<br>It's an <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyber-blue">Infrastructure.</span></h2>
          <p class="text-white/60 text-lg leading-relaxed">
              I didn't just read about this. I built the hiring systems for Global HR Tech giants. I know exactly how the algorithms score your profile because I wrote the code that rejects it.
          </p>
          
          <div class="space-y-4">
             <!-- Counter Card 1 -->
             <div class="glass-card p-5 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-default group">
               <div class="text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">20k+</div>
               <div class="h-10 w-px bg-white/10"></div>
               <div>
                 <p class="font-bold text-white">Students Guided</p>
                 <p class="text-sm text-white/50">Across 12 countries</p>
               </div>
             </div>
             
             <!-- Counter Card 2 -->
             <div class="glass-card p-5 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-default group">
               <div class="text-4xl font-bold text-cyber-blue group-hover:scale-110 transition-transform origin-left">1.5k+</div>
               <div class="h-10 w-px bg-white/10"></div>
               <div>
                 <p class="font-bold text-white">Offers Landed</p>
                 <p class="text-sm text-white/50">At FAANG & Unicorns</p>
               </div>
             </div>
          </div>

          <!-- Alumni section removed as per request -->
        </div>
      </div>
    </section>

    <!-- STICKY FOOTER -->
    <div id="sticky-footer" class="fixed bottom-6 left-6 right-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[600px] glass-card border border-white/10 p-4 z-50 flex items-center justify-between shadow-2xl translate-y-32 opacity-0 transition-all duration-700 backdrop-blur-2xl bg-obsidian/80">
       <div class="flex items-center gap-4">
         <div class="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center animate-pulse">
            <i data-lucide="clock" class="w-5 h-5 text-indigo-400"></i>
         </div>
         <div class="flex flex-col">
           <span class="text-[10px] uppercase text-white/50 tracking-wider font-bold">Offer Ends In</span>
           <span id="countdown" class="font-mono text-xl text-white font-bold tabular-nums tracking-wider">00:00:00</span>
         </div>
       </div>
       <button class="relative bg-white text-obsidian px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform overflow-hidden group">
         <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-shimmer w-full h-full z-10 pointer-events-none"></div>
         <span class="relative z-20">Secure My Seat</span>
       </button>
    </div>

  </main>
`;

// --- Logic ---
createIcons({ icons });

// Countdown
const timer = document.getElementById('countdown');
// Target: 2 days from now (static for demo)
const target = new Date().getTime() + (48 * 60 * 60 * 1000);

setInterval(() => {
  const now = new Date().getTime();
  const dist = target - now;

  const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((dist % (1000 * 60)) / 1000);

  if (timer) timer.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}, 1000);


// Sticky Footer Login (Scroll 20%)
const footer = document.getElementById('sticky-footer');
window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  // Show after 10% scroll for better UX in demo
  if (scrollPercent > 0.1) {
    footer.classList.remove('translate-y-32', 'opacity-0');
  } else {
    footer.classList.add('translate-y-32', 'opacity-0');
  }
});
