// Cinematic AI homepage interactions and navigation
(function(){
  const startBtn = document.getElementById('startFree');
  const signupBtn = document.getElementById('signupBtn');
  const loginBtn = document.getElementById('loginBtn');
  const overlay = document.getElementById('overlay');
  const authModal = document.getElementById('authModal');
  const authTitle = document.getElementById('authTitle');
  const authForm = document.getElementById('authForm');
  const closeModal = document.getElementById('closeModal');
  const cancelAuth = document.getElementById('cancelAuth');
  const dashboard = document.getElementById('dashboard');
  const home = document.getElementById('home');
  const yearEl = document.getElementById('year');
  const emailInput = document.getElementById('email');

  // set current year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ripple effect for Start Free
  startBtn.addEventListener('click', (e) => {
    const rect = startBtn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    startBtn.appendChild(ripple);
    setTimeout(()=> ripple.remove(), 700);

    // open Dashboard 2 (tools layout)
    openDashboard();
  });

  // Open auth modal for signup/login
  signupBtn.addEventListener('click', ()=> openAuth('signup'));
  loginBtn.addEventListener('click', ()=> openAuth('login'));
  closeModal.addEventListener('click', closeAuth);
  cancelAuth.addEventListener('click', closeAuth);
  overlay.addEventListener('click', closeAuth);

  let currentFlow = 'signup'; // track which flow is active

  function openAuth(type){
    currentFlow = type;
    authTitle.textContent = (type === 'signup') ? 'Create your account' : 'Login';
    authForm.querySelector('button[type="submit"]').textContent = (type === 'signup') ? 'Continue' : 'Login';
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden','false');
    authModal.classList.remove('hidden');
    authModal.setAttribute('aria-hidden','false');
    // clear previous
    emailInput.value = '';
    setTimeout(()=> emailInput.focus(), 170);
  }

  function closeAuth(){
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden','true');
    authModal.classList.add('hidden');
    authModal.setAttribute('aria-hidden','true');
  }

  // handle auth form submit
  authForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = emailInput.value.trim();
    if(!email || !validateEmail(email)){
      emailInput.focus();
      emailInput.classList.add('invalid');
      setTimeout(()=> emailInput.classList.remove('invalid'), 900);
      return;
    }

    // Simulate flow: after entering email, move to dashboard.
    // In production, you'd call backend APIs for signup/login and handle validation.
    closeAuth();

    // small cinematic delay to emulate process then open dashboard
    setTimeout(openDashboard, 400);
  });

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function openDashboard(){
    // hide home/content areas but keep background
    home.style.display = 'none';
    dashboard.setAttribute('aria-hidden','false');
    dashboard.style.opacity = '1';
    dashboard.style.pointerEvents = 'auto';
    // animate staggered fade-in on tool cards
    document.querySelectorAll('.tool-card').forEach((el,i)=>{
      el.style.animationDelay = (i * 90 + 90) + 'ms';
    });
  }

  // Parallax background based on mouse movement and device orientation for cinematic depth
  const layers = document.querySelectorAll('.wave');
  window.addEventListener('mousemove', (e)=>{
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    const dx = (e.clientX - cx) / cx; // -1 .. 1
    const dy = (e.clientY - cy) / cy;
    layers.forEach((l, idx) => {
      const speed = parseFloat(l.dataset.speed) || (0.2 + idx*0.2);
      l.style.transform = `translateX(${dx * 6 * speed}%) translateY(${dy * 3 * speed}%) scale(${1 + speed*0.01}) rotate(${idx%2 ? 2*dx : -2*dx}deg)`;
    });
  });

  // touch-friendly parallax using deviceorientation if available
  if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', (ev)=>{
      const gamma = ev.gamma || 0; // left/right tilt
      const beta = ev.beta || 0; // front/back tilt
      layers.forEach((l, idx) => {
        const speed = parseFloat(l.dataset.speed) || (0.2 + idx*0.2);
        l.style.transform = `translateX(${gamma * 0.08 * speed}%) translateY(${beta * 0.05 * speed}%)`;
      });
    }, true);
  }

  // Sidebar nav item hover minor rotation done by CSS. Add keyboard focus styles
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') btn.click();
    });
  });

  // Make elements accessible: trap focus in modal when open (simple)
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      if(!authModal.classList.contains('hidden')) closeAuth();
    }
  });

  // small graceful fallback if CSS animations unsupported
})();