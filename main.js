const toggleDisplay = (id) => {
  document.getElementById(id).style.display === "block"
    ? (document.getElementById(id).style.display = "none")
    : (document.getElementById(id).style.display = "block");
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
