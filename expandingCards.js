let queryvalues = document.querySelectorAll(".panel");

console.log(queryvalues);
queryvalues.forEach((panels) => {
  panels.addEventListener("click", () => {
    removeclassnamelist();
    panels.classList.add("active");
  });
});

function removeclassnamelist() {
  queryvalues.forEach((panel) => {
    panel.classList.remove("active");
  });
}
