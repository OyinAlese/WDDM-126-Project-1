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
