// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.getAttribute('href') === '#') return;
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Portfolio Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        const activeDiv = document.querySelector('.isActive');
        activeDiv.style.display = 'none';
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn =>{ btn.classList.remove('active');
                activeDiv.style.display = 'grid';
  
                });
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        

        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentNode;
                item.classList.toggle('active');
                
                // Close other open items
                faqQuestions.forEach(q => {
                    if (q !== question) {
                        q.parentNode.classList.remove('active');
                    }
                });
            });
        });

        // Testimonial Carousel for Mobile
        if (window.innerWidth <= 768) {
            const testimonialCards = document.querySelectorAll('.testimonials-carousel .testimonial-card');
            const dots = document.querySelectorAll('.carousel-dots .dot');
            let currentIndex = 0;
            
            function showTestimonial(index) {
                testimonialCards.forEach((card, i) => {
                    card.style.display = i === index ? 'block' : 'none';
                });
                
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    showTestimonial(currentIndex);
                });
            });
            
            // Auto-rotate testimonials
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonialCards.length;
                showTestimonial(currentIndex);
            }, 5000);
            
            // Show first testimonial initially
            showTestimonial(0);
        }

       
        // Animation on Scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    const delay = element.style.animationDelay || '0s';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initial check when page loads
        window.addEventListener('load', () => {
            // Trigger hero animation
            const heroContent = document.getElementById('heroContent');
            if (heroContent) {
                setTimeout(() => {
                    heroContent.classList.add('animate');
                }, 300);
            }
            
            // Check for other animations
            animateOnScroll();
        });

        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);

        document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = dropdownMenu.querySelectorAll('a');
    
    // Close dropdown function
    function closeDropdown() {
        dropdownToggle.parentElement.classList.remove('active');
    }
    
    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) { // Mobile only
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
    
    // Close dropdown when any item is clicked
    dropdownItems.forEach(item => {
        item.addEventListener('click', closeDropdown);
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            closeDropdown();
        }
    });
});




