const toggleDisplay = (id) => {
  document.getElementById(id).style.display === "flex"
    ? (document.getElementById(id).style.display = "none")
    : ((document.getElementById(id).style.display = "flex"),
      (document.getElementById(id).style.height = "200px"));
};

document.getElementById("project-1").addEventListener("click", function () {
  toggleDisplay("project-one-info");
});

document.getElementById("project-2").addEventListener("click", function () {
  toggleDisplay("project-two-info");
});

document.getElementById("project-3").addEventListener("click", function () {
  toggleDisplay("project-three-info");
});

document
  .getElementById("project-one-info")
  .addEventListener("click", function () {
    toggleDisplay("project-one-info");
  });

document
  .getElementById("project-two-info")
  .addEventListener("click", function () {
    toggleDisplay("project-two-info");
  });

document
  .getElementById("project-three-info")
  .addEventListener("click", function () {
    toggleDisplay("project-three-info");
  });
