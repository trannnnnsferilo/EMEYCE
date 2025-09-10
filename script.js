// Optimized corporate JavaScript - Performance focused
(function() {
    'use strict';

    // Performance optimizations
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    // DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth scrolling for navigation
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Optimized Intersection Observer for animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Corporate card hover effects (optimized)
        const cards = document.querySelectorAll('.card-corporate');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.willChange = 'transform';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.willChange = 'auto';
            });
        });

        // Optimized navbar scroll effect
        const navbar = document.querySelector('nav');
        let ticking = false;

        const updateNavbar = throttle(() => {
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 16); // ~60fps

        window.addEventListener('scroll', updateNavbar, { passive: true });

        // Button hover effects (corporate)
        const buttons = document.querySelectorAll('.btn-corporate, .btn-corporate-outline');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.willChange = 'transform';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.willChange = 'auto';
            });
        });

        // Preload critical images
        const criticalImages = ['LOGO.png', 'PRODUCTOS_CARD.jpeg', 'PRODUCTOS_EYEMASK.jpeg', 'PRODUCTOS_PETS.jpeg', 'KIDS_PRODUCTOS.jpeg'];
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Optimize video loading
        const video = document.querySelector('video');
        if (video) {
            video.addEventListener('loadedmetadata', () => {
                console.log('Video metadata loaded');
            });
        }

        console.log('✅ EMEYCE Corporate - Optimized website loaded');
    });

    // CSS for navbar scrolled state
    const style = document.createElement('style');
    style.textContent = `
        nav.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);

})();