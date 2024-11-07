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
