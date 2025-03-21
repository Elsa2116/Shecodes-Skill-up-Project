let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Toggle active class for color change
    card.classList.toggle("active");

    // Toggle hidden text
    let text = card.querySelector(".hidden-text");
    text.textContent = card.getAttribute("data-alt-text"); // Set the text content
    text.style.display = card.classList.contains("active") ? "block" : "none";
  });
});
