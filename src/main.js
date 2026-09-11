const card = document.getElementById("card-bloom");
const modal = document.getElementById("modal-bloom");
const closeBtn = document.getElementById("close-bloom");

card.addEventListener("click",() => {
  modal.showModal();
});

closeBtn.addEventListener("click",() => {
  modal.close();
});

modal.addEventListener("click",(event) => {
  if (event.target===modal) {
    modal.close();
  }
});