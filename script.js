// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animation for header title
    const headerTitle = document.querySelector('header h1');
    headerTitle.style.opacity = 0;
    headerTitle.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        headerTitle.style.opacity = 1;
    }, 100);

    // 2. Animation for header description
    const headerDescription = document.querySelector('header p');
    headerDescription.style.opacity = 0;
    headerDescription.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        headerDescription.style.opacity = 1;
    }, 500);

    // 3. Fade-in for the introduction section
    const introduction = document.querySelector('#introduction');
    introduction.style.opacity = 0;
    introduction.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        introduction.style.opacity = 1;
    }, 800);

    // 4. Hover effect on all member profiles
    const memberProfiles = document.querySelectorAll('.member');
    memberProfiles.forEach((profile) => {
        profile.style.transition = 'transform 0.3s ease-in-out';
        profile.addEventListener('mouseover', () => {
            profile.style.transform = 'scale(1.05)';
        });
        profile.addEventListener('mouseout', () => {
            profile.style.transform = 'scale(1)';
        });
    });

    // 5. Click to expand/collapse member details
    memberProfiles.forEach((profile) => {
        const details = profile.querySelector('p:nth-of-type(2)');
        details.style.maxHeight = '50px';
        details.style.overflow = 'hidden';
        details.style.transition = 'max-height 0.5s ease-in-out';

        profile.addEventListener('click', () => {
            if (details.style.maxHeight === '50px') {
                details.style.maxHeight = '300px';
            } else {
                details.style.maxHeight = '50px';
            }
        });
    });

    // 6. Animate the section title
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach((title) => {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = 0;
        title.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        window.addEventListener('scroll', () => {
            const titleTop = title.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (titleTop < windowHeight - 50) {
                title.style.transform = 'translateY(0)';
                title.style.opacity = 1;
            }
        });
    });

    // 7. Add a click interaction to hobbies title
    const hobbiesTitles = document.querySelectorAll('.hobbies h4');
    hobbiesTitles.forEach((title) => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', () => {
            title.nextElementSibling.classList.toggle('hidden');
        });
    });

    // 8. Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 9. Fade-in animation for the Nigerian meals section
    const nigerianMealsSection = document.querySelector('#nigerian-meals');
    nigerianMealsSection.style.opacity = 0;
    nigerianMealsSection.style.transition = 'opacity 2s ease-in-out';
    window.addEventListener('scroll', () => {
        const sectionTop = nigerianMealsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            nigerianMealsSection.style.opacity = 1;
        }
    });

    // 10. Hover effect for meal images
    const mealImages = document.querySelectorAll('.meal img');
    mealImages.forEach((image) => {
        image.style.transition = 'transform 0.3s ease-in-out';
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // 11. Scale up section titles on hover
    sectionTitles.forEach((title) => {
        title.style.transition = 'transform 0.3s ease-in-out';
        title.addEventListener('mouseover', () => {
            title.style.transform = 'scale(1.1)';
        });
        title.addEventListener('mouseout', () => {
            title.style.transform = 'scale(1)';
        });
    });

    // 12. Add a shake animation on member images when clicked
    const memberImages = document.querySelectorAll('.member img');
    memberImages.forEach((image) => {
        image.addEventListener('click', () => {
            image.classList.add('shake');
            setTimeout(() => {
                image.classList.remove('shake');
            }, 500);
        });
    });

    // 13. Add hover effect for footer links
    footerLinks.forEach((link) => {
        link.style.transition = 'color 0.3s ease-in-out';
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6347'; // Tomato color on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#6c63ff'; // Original purple color
        });
    });

    // 14. Rotate Nigerian meals images on hover
    mealImages.forEach((image) => {
        image.style.transition = 'transform 0.3s ease-in-out';
        image.addEventListener('mouseover', () => {
            image.style.transform = 'rotate(5deg)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'rotate(0)';
        });
    });

    // 15. Highlight profiles on click
    memberProfiles.forEach((profile) => {
        profile.addEventListener('click', () => {
            profile.classList.toggle('highlighted');
        });
    });
});