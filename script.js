 // 1. Animation for header title
 const headerTitle = document.querySelector('header h1');
 headerTitle.style.opacity = 0;
 headerTitle.style.transition = 'opacity 2s ease-in-out';
 setTimeout(() => {
     headerTitle.style.opacity = 1;
 }, 100);