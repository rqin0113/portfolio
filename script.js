// ----- TYPING ANIMATION -----
const phrases = [
  'building cool stuff 💻',
  'data science 📊',
  'machine learning 🤖',
  'web development 🌐',
  'solving problems 🧩',
  'curling! 🥌'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typingTextElement = document.querySelector('.typing-text');

function typeText() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end of phrase
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }

  setTimeout(typeText, typingSpeed);
}

// Start typing animation after page load
window.addEventListener('load', () => {
  setTimeout(typeText, 1000);
});

// ----- DARK MODE TOGGLE -----
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Load saved theme preference
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// ----- SCROLL ANIMATIONS -----
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe skill categories
document.querySelectorAll('.skill-category').forEach((category, index) => {
  category.style.opacity = '0';
  category.style.transform = 'translateY(30px)';
  category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(category);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// ----- SMOOTH SCROLL FOR NAVIGATION LINKS -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ----- CONTACT FORM SUBMISSION -----
const form = document.querySelector('.contact-form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const submitBtn = form.querySelector('.send-btn');
  const originalBtnContent = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      successMessage.textContent = '✅ Thank you! Your message has been sent successfully.';
      successMessage.style.display = 'block';
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    } else {
      successMessage.textContent = '❌ Oops! Something went wrong. Please try again later.';
      successMessage.style.display = 'block';
    }
  } catch (error) {
    successMessage.textContent = '❌ Network error. Please try again later.';
    successMessage.style.display = 'block';
  } finally {
    // Restore button
    submitBtn.innerHTML = originalBtnContent;
    submitBtn.disabled = false;
  }
});

// ----- PARALLAX EFFECT FOR PARTICLES -----
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
});

function animateParticles() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.5;
    const x = mouseX * speed * 20;
    const y = mouseY * speed * 20;
    
    particle.style.transform = `translate(${x}px, ${y}px)`;
  });
  
  requestAnimationFrame(animateParticles);
}

animateParticles();

// ----- ADD ACTIVE STATE TO NAV ON SCROLL -----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const navHeight = document.querySelector('nav').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ----- SKILL TAG HOVER EFFECT -----
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.08) rotate(2deg)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});

// ----- PROJECT CARD TILT EFFECT -----
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});