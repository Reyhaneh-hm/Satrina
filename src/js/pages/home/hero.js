import '../../../scss/components/pages/home/hero.scss';

// /*----------------Play Video---------------*/
document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementById("video-modal");
  const playIcon = document.getElementById("play-icon");
  const closeBtn = modal.querySelector(".close");
  const video = document.getElementById("modalVideo");

  playIcon.addEventListener('click', function () {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});

/*-----------------Saye-------------------*/

document.querySelectorAll(".win-btn").forEach((b) => {
  b.onmouseleave = (e) => {
    // e.target.style.background = "black";
    e.currentTarget.style.borderImage = null;
  };
  b.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.  
    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
  });
});