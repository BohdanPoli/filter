const refs = {
  tagsContainer: document.querySelector(".js-tags"),
};

refs.tagsContainer.addEventListener("click", onContainerClick);

const selectedTags = new Set();

function onContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  if (e.target.classList.contains("tags__btn--active")) {
    selectedTags.delete(e.target.dataset.value);
  } else {
    selectedTags.add(e.target.dataset.value);
  }

  e.target.classList.toggle("tags__btn--active");
  console.log(selectedTags);
}

// Перший варіант

// let selectedTag = null;

// function onContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn--active");

//   currentActiveBtn?.classList.remove("tags__btn--active");

//   const nextActive = e.target;
//   nextActive.classList.add("tags__btn--active");
//   selectedTag = nextActive.dataset.value;

//   console.log(selectedTag);
// }
