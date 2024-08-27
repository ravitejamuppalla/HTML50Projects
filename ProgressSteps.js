let progressbar = document.querySelectorAll(".progressPage");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let progress = document.getElementById("progress");
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > progressbar.length) {
    currentActive = progressbar.length;
  }
  update();
});
console.log("Rbning");

prev.addEventListener("click", () => {
  currentActive--;
  update();
});

function update() {
  progressbar.forEach((cricles, index) => {
    if (currentActive > index) cricles.classList.add("active");
    else cricles.classList.remove("active");
  });
  console.log("Current active state " + currentActive);
  console.log("Progress bar" + progressbar.length);
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (progressbar.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  }
  if (currentActive === progressbar.length) {
    prev.disabled = false;
    next.disabled = true;
  }
  if (currentActive > 1) {
    prev.disabled = false;
  }
}
