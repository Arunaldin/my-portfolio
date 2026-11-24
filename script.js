/**
 * ===================================================================
 * ARUNALDIN SUGIN - PROFESSIONAL DEVELOPER PORTFOLIO
 * High-Performance Vanilla JavaScript
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------
  // 1. DYNAMIC TYPEWRITER EFFECT IN HERO SECTION
  // -------------------------------------------------------------
  const typingTextElement = document.getElementById('typingText');
  const phrases = [
    'Building Ideas Into Digital Solutions.',
    'Designing Scalable Web Applications.',
    'Crafting AI-Powered Experiences.',
    'B.Tech CSE @ Karunya Class of 2027.',
    'Turning Complex Problems Into Clean Code.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const delayBetweenPhrases = 2200;

  function typeWriter() {
    if (!typingTextElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Removing characters
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Adding characters
      typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Finished typing current phrase, pause before deleting
      currentSpeed = delayBetweenPhrases;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      currentSpeed = 400;
    }

    setTimeout(typeWriter, currentSpeed);
  }

  // Start typing effect
  typeWriter();


  // -------------------------------------------------------------
  // 2. STICKY NAVBAR & ACTIVE SECTION HIGHLIGHTING
  // -------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    let currentActiveId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentActiveId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentActiveId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check


  // -------------------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER & ACCESSIBILITY
  // -------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  function toggleMobileMenu() {
    if (!hamburgerBtn || !navMenu) return;
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    if (!hamburgerBtn || !navMenu) return;
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile drawer when clicking any link
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu if clicked outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });


  // -------------------------------------------------------------
  // 4. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // -------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    '.about-card, .pillar-card, .skill-category-card, .featured-project-card, .upcoming-card, .cert-card, .education-card, .contact-info-card, .contact-form-card'
  );

  revealElements.forEach((el) => {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once for performance
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));


  // -------------------------------------------------------------
  // 5. FLOATING BACK-TO-TOP BUTTON
  // -------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleBackToTopVisibility() {
    if (!backToTopBtn) return;
    if (window.scrollY > 380) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // -------------------------------------------------------------
  // 6. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');
  let toastTimeout = null;

  function showToast(message, isSuccess = true) {
    if (!toast || !toastMessage) return;

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastMessage.textContent = message;
    if (toastIcon) {
      toastIcon.innerHTML = isSuccess
        ? '<i class="fa-solid fa-circle-check" style="color: #34d399;"></i>'
        : '<i class="fa-solid fa-circle-exclamation" style="color: #fb7185;"></i>';
    }

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }


  // -------------------------------------------------------------
  // 7. ONE-CLICK EMAIL COPY TO CLIPBOARD
  // -------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const copyIcon = document.getElementById('copyIcon');
  const targetEmail = 'ssugin317@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(targetEmail);
        } else {
          // Fallback for non-secure context
          const textArea = document.createElement('textarea');
          textArea.value = targetEmail;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Visual UI update
        if (copyFeedback) copyFeedback.textContent = 'Copied!';
        if (copyIcon) {
          copyIcon.className = 'fa-solid fa-check';
          copyIcon.style.color = '#34d399';
        }

        showToast('Email ssugin317@gmail.com copied to clipboard!');

        setTimeout(() => {
          if (copyFeedback) copyFeedback.textContent = 'Copy';
          if (copyIcon) {
            copyIcon.className = 'fa-regular fa-copy';
            copyIcon.style.color = '';
          }
        }, 2500);
      } catch (err) {
        showToast('Click email to open your mail app', false);
      }
    });
  }


  // -------------------------------------------------------------
  // 8. RESUME DOWNLOAD FEEDBACK
  // -------------------------------------------------------------
  const resumeButtons = document.querySelectorAll('.resume-btn');
  resumeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast('Downloading Arunaldin Sugin\'s Resume...');
    });
  });


  // -------------------------------------------------------------
  // 9. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('messageSubject');
  const messageInput = document.getElementById('messageContent');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Regex for standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validateField(input, errorElement, condition, message) {
    if (!condition) {
      input.classList.add('is-invalid');
      if (errorElement) errorElement.textContent = message;
      return false;
    } else {
      input.classList.remove('is-invalid');
      if (errorElement) errorElement.textContent = '';
      return true;
    }
  }

  // Clear errors on real-time typing
  const fieldErrorPairs = [
    { input: nameInput, error: nameError },
    { input: emailInput, error: emailError },
    { input: subjectInput, error: subjectError },
    { input: messageInput, error: messageError }
  ];

  fieldErrorPairs.forEach(({ input, error }) => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        if (error) error.textContent = '';
        if (formStatus) formStatus.style.display = 'none';
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      const isNameValid = validateField(nameInput, nameError, nameVal.length >= 2, 'Please enter your name (at least 2 characters).');
      const isEmailValid = validateField(emailInput, emailError, emailRegex.test(emailVal), 'Please provide a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectError, subjectVal.length >= 3, 'Please provide a subject (at least 3 characters).');
      const isMessageValid = validateField(messageInput, messageError, messageVal.length >= 10, 'Please write a message of at least 10 characters.');

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        if (formStatus) {
          formStatus.className = 'form-status-message error';
          formStatus.textContent = 'Please correct the highlighted errors before submitting.';
          formStatus.style.display = 'block';
        }
        return;
      }

      // Form is fully valid
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing Email...';
      }

      setTimeout(() => {
        // Construct mailto link so the recruiter or client can send the real email instantly
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectVal} - from ${nameVal}`);
        const mailtoBody = encodeURIComponent(
          `Hi Arunaldin,\n\n${messageVal}\n\n---\nSender Details:\nName: ${nameVal}\nEmail: ${emailVal}`
        );
        const mailtoUrl = `mailto:ssugin317@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Feedback to user
        if (formStatus) {
          formStatus.className = 'form-status-message success';
          formStatus.innerHTML = `<strong>Thank you, ${nameVal}!</strong> Your message has been prepared. Opening your mail app to send directly to Arunaldin...`;
          formStatus.style.display = 'block';
        }

        showToast('Message ready! Opening mail client...', true);

        // Open mailto trigger
        window.location.href = mailtoUrl;

        // Reset form & button
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>';
        }
      }, 700);
    });
  }


  // -------------------------------------------------------------
  // 10. DYNAMIC COPYRIGHT YEAR
  // -------------------------------------------------------------
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});

