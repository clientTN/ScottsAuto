document.addEventListener('DOMContentLoaded', () => {
    // 1. Select Elements
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const contactForm = document.getElementById('contact-form');
    const header = document.querySelector('.site-header');

    // 2. Mobile Menu Toggle Logic
    const toggleMobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    };

    menu.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when a link is clicked (for better UX)
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });

    // 3. Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(10, 35, 66, 0.98)'; // Slightly more opaque on scroll
        } else {
            header.style.padding = '15px 0';
            header.style.background = '#0a2342';
        }
    });

    // 4. Form Submission Handling
	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(contactForm);

			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString(),
			})
			.then(() => {
				alert('Thanks for reaching out! Scott will contact you shortly.');
				contactForm.reset();
			})
			.catch((error) => alert('Form submission error: ' + error));
		});
	}
});
