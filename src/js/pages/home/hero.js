import '../../../scss/components/pages/home/hero.scss';

/*----------------Play Video---------------*/
document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById("video-modal");
    var playIcon = document.getElementById("play-icon");
    var closeBtn = document.getElementsByClassName("close")[0];

    playIcon.addEventListener('click', function () {
      modal.style.display = "block";
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });