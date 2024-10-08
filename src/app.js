/* eslint-disable */
import "bootstrap";
import "./style.css";

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});

function cardOrder() {
  const numbers = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];

  for (let s = 0; s < suits.length; s++) {
    for (let n = 0; n < numbers.length; n++) {
      const number = numbers[n];
      const suit = suits[s];
      cards.push({ number, suit });
    }
  }
  return cards;
}

function randomCard(cards) {
  const random = Math.floor(Math.random() * 52);
  const cardNumber = cards[random].number;
  const cardSuit = cards[random].suit;
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");
  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    `<span class = 'card-suit top'>` +
    entity +
    "</span>" +
    `<span class = 'card-number'>` +
    cardNumber +
    "</span>" +
    `<span class = 'card-suit bot'>` +
    entity +
    "</span>";
  document.body.appendChild(card);
}

const cards = cardOrder();
randomCard(cards);
