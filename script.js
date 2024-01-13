const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const description = document.querySelector(".description");
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
const audio = document.getElementById("mySong");
const volumeControl = document.getElementById("volume");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "block";
    modalContent.src = e.target.src;
    document.body.style.overflow = "hidden";
    description.textContent = e.target.alt;
    setTimeout(() => {
      description.parentElement.classList.add("active");
    }, 500);
  });
});

modal.addEventListener("click", () => {
  closeModal();
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add("closing");
  description.parentElement.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "initial";
    modal.classList.remove("closing");
  }, 500);
}

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "media/pause.png";
  } else {
    mySong.pause();
    icon.src = "media/play.png";
  }
};

volumeControl.addEventListener("input", function () {
  audio.volume = volumeControl.value;
});
