const dark = document.getElementById("dark");

dark.addEventListener("click", changeTheme);

function changeTheme() {
  document.body.classList.toggle("dark-theame");

  if (document.body.classList.contains("dark-theame")) {
    dark.src = "images/sun.png";
  } else {
    dark.src = "images/moon.png";
  }
}
