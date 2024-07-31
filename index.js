const learning = document.querySelector(".p1");
const p8 = document.querySelector(".p8");

learning.addEventListener("click", function () {
  if (p8.style.display === "none" || p8.style.display === "") {
    p8.style.display = "flex";
    setTimeout(() => {
      p8.classList.add("slide");
    }, 1);
  } else {
    p8.classList.remove("slide");
    setTimeout(() => {
      p8.style.display = "none";
    },1); // Match the duration of the CSS transition
  }
});

