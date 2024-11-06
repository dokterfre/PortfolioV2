
function openModal(imageSrc) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
  
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }

  function closeModal() {
    const modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
  }