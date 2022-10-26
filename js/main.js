// variables
const stars = document.querySelectorAll(".rating-card__rating-item");
const btnSubmit = document.getElementById("submit");
const ratingState = document.querySelector(".rating-card__rating-state");
const thankState = document.querySelector(".rating-card__thank");
const result = document.querySelector(".rating-card__result");
const choosed = document.getElementById("rating-choosed");
let rating = null;
let currentRating = null; // current selected

// functions
function submit() {
  if (rating) {
    choosed.textContent = rating;
  } else {
    result.innerHTML = "You haven't selected anything";
  }
  ratingState.classList.toggle("hidden");
  thankState.classList.toggle("hidden");
}

// Listeners

for (i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", (e) => {
    rating = e.target.childNodes[0].nodeValue;
    if (currentRating && currentRating != rating) {
      stars[currentRating - 1].classList.remove(
        "rating-card__rating-item--active"
      );
      stars[currentRating - 1].style.backgroundColor = "rgb(37, 45, 55)";
    }
    if (currentRating != rating) {
      stars[rating - 1].classList.add("rating-card__rating-item--active");
      stars[rating - 1].style.backgroundColor = "hsl(25, 97%, 53%)";
      currentRating = rating;
    } else {
      stars[rating - 1].classList.remove("rating-card__rating-item--active");
      stars[rating - 1].style.backgroundColor = "rgb(37, 45, 55)";
      rating = null;
      currentRating = null;
    }
  });

  stars[i].addEventListener("mouseover", (e) => {
    let ratingOver = e.target.childNodes[0].nodeValue;
    if (ratingOver !== currentRating) {
      stars[ratingOver - 1].style.backgroundColor = "hsl(216, 12%, 54%)";
    }
  });

  stars[i].addEventListener("mouseout", (e) => {
    let ratingOut = e.target.childNodes[0].nodeValue;
    if (ratingOut !== rating) {
      stars[ratingOut - 1].style.backgroundColor = "rgba(37, 45, 55, 0.5)";
    }
  });
}

btnSubmit.addEventListener("click", submit);
