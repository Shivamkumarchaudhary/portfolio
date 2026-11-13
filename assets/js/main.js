/**
 * Shivam Kumar Chaudhary - Portfolio & DevOps Showcase
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher
  initTheme();

  // 2. Initialize Typewriter
  initTypewriter();

  // 3. Initialize Navbar & Scrollspy
  initNavbar();

  // 4. Initialize Project Filters & Modals
  initProjects();

  // 5. Initialize Contact Form & Toast
  initContactForm();

  // 6. Back to Top Button
  initBackToTop();
});

/* -------------------------------------------------------------------------
   Theme Switcher (Dark / Light Mode)
   ------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(themeIcon, savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(themeIcon, newTheme);
    });
  }
}

function updateThemeIcon(icon, theme) {
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fa-solid fa-moon';
  } else {
    icon.className = 'fa-solid fa-sun';
  }
}

/* -------------------------------------------------------------------------
   Dynamic Typewriter Effect
   ------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriterText');
  if (!typewriterElement) return;

  const roles = [
    'MCA Graduate Scholar',
    'Full-Stack Web Developer',
    'DevOps & CI/CD Enthusiast',
    'Java & MySQL Problem Solver'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1800;

  function type() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* -------------------------------------------------------------------------
   Navbar, Mobile Menu & ScrollSpy
   ------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile Toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close when clicking link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Scrollspy & Navbar styling
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar shadow on scroll
    if (scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    // Active Section Detection
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* -------------------------------------------------------------------------
   Project Filtering & Interactive Modal
   ------------------------------------------------------------------------- */
const projectDetails = {
  attendance: {
    title: 'QR-Based Smart Attendance System',
    subtitle: 'Full-Stack Academic & Production Concept',
    description: 'An automated, tamper-resistant digital attendance tracking system engineered for higher education institutions. Eliminates proxy attendance using dynamically regenerating TOTP QR tokens with geo-fencing validation. Backed by MySQL relational storage with role-based dashboard authentication and automated attendance percentage calculation.',
    features: [
      'Time-based one-time QR generation (refreshed every 15 seconds)',
      'Student device geo-verification to prevent remote scanning',
      'Role-based access: Admin, Faculty, and Student portals',
      'Instant attendance export in CSV and PDF formats',
      'Complete MySQL database schema with index-optimized queries'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Node.js/Express', 'Git'],
    github: 'https://github.com/Shivamkumarchaudhary/smart-attendance-system',
    image: 'assets/images/project-attendance.svg'
  },
  hotel: {
    title: 'HotelWale - Booking & Reservation Engine',
    subtitle: 'Dynamic Web Reservation Platform',
    description: 'A modern, full-featured online hotel booking and accommodation reservation portal. Features responsive room browsing, interactive date-picker filters, pricing calculation with taxes/discounts, and streamlined customer reservation confirmation.',
    features: [
      'Interactive room catalogue with tier filtering (Deluxe, Executive, Suite)',
      'Real-time availability and dynamic night-rate pricing calculator',
      'Responsive mobile-first layout with smooth transitions',
      'Form validation with booking summary preview modal',
      'Architected for seamless payment gateway integration'
    ],
    tech: ['HTML5', 'CSS3 Grid/Flexbox', 'JavaScript (ES6+)', 'MySQL', 'Git'],
    github: 'https://github.com/Shivamkumarchaudhary/hotelwale',
    image: 'assets/images/project-hotel.svg'
  },
  gym: {
    title: 'FitPulse - Gym Management & Workout Tracker',
    subtitle: 'Health & Membership Management Suite',
    description: 'A robust fitness center administrative system and personal workout tracker. Empowers gym administrators to monitor member subscriptions, track expiring memberships, record daily check-ins, and help athletes log daily workout routines.',
    features: [
      'Member lifecycle tracking (Active, Expiring, Lapsed subscriptions)',
      'Custom workout routine builder and progression visualizer',
      'Automated renewal alert notifications system',
      'Weekly attendance and member velocity dashboard metrics',
      'Normalized relational database structure'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Relational DB', 'OOP Concepts'],
    github: 'https://github.com/Shivamkumarchaudhary',
    image: 'assets/images/project-gym.svg'
  },
  hospital: {
    title: 'Doctor Recommendation & Bed Allocation System',
    subtitle: 'Healthcare Resource Optimization Platform',
    description: 'A smart hospital resource management system connecting incoming patients with specialized physicians while managing real-time inpatient bed availability across intensive care, general, and emergency wards.',
    features: [
      'Symptom-to-specialist doctor matching recommendation engine',
      'Live visual bed matrix showing real-time occupancy state',
      'Emergency admission prioritization protocol',
      'Patient electronic health records (EHR) registry',
      'Database transactional safety to prevent double-booking beds'
    ],
    tech: ['Java Concepts', 'SQL / DBMS', 'HTML5', 'CSS3', 'Data Structures'],
    github: 'https://github.com/Shivamkumarchaudhary',
    image: 'assets/images/project-hospital.svg'
  }
};

function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Project Modal Logic
  const modalOverlay = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const detailBtns = document.querySelectorAll('.view-project-btn');

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (!data) return;

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.25rem;">
          <img src="${data.image}" alt="${data.title}" style="width:100%; max-height:240px; object-fit:cover; border-radius:10px; margin-bottom:1rem; border:1px solid var(--border-color);">
          <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--accent-cyan);">${data.subtitle}</span>
          <h2 style="font-size:1.6rem; margin:0.4rem 0 1rem; font-weight:800;">${data.title}</h2>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.25rem;">${data.description}</p>
          <h4 style="font-size:1rem; margin-bottom:0.6rem; color:var(--text-primary);">Key Capabilities:</h4>
          <ul style="list-style:disc; margin-left:1.5rem; color:var(--text-secondary); line-height:1.7; margin-bottom:1.5rem;">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
            ${data.tech.map(t => `<span class="stack-tag">${t}</span>`).join('')}
          </div>
          <div style="display:flex; gap:1rem;">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fa-brands fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      `;

      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* -------------------------------------------------------------------------
   Contact Form Validation & Toast Message
   ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', '#ef4444');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', '#ef4444');
        return;
      }

      // Success feedback
      showToast('Thank you! Your message has been received.', '#10b981');
      form.reset();
    });
  }

  function showToast(msg, bgColor) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.backgroundColor = bgColor || '#10b981';
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

/* -------------------------------------------------------------------------
   Back To Top Floating Button
   ------------------------------------------------------------------------- */
function initBackToTop() {
  const bttBtn = document.getElementById('backToTopBtn');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      bttBtn.classList.add('show');
    } else {
      bttBtn.classList.remove('show');
    }
  });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
