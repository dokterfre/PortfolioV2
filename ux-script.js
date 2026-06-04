const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target.querySelector('video');
    if (!video) return;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { rootMargin: '100px' });

document.querySelectorAll('.video-box').forEach(box => videoObserver.observe(box));