/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Hyunjung Lee
 *      Student ID: 150 833 200
 *      Date:       April 1, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
//console.log({ products, categories }, "Store Data");

// variables
let selectedCategory = document.querySelector("#selected-category");
let productCards = document.querySelector("#product-cards");
const menuOptions = [
  { id: "btnRed", name: "Red Wine" },
  { id: "btnWhite", name: "White Wine" },
  { id: "btnRose", name: "Rose Wine" }
];

// load event handler
window.addEventListener("load", function () {
  // make menu buttons
  makeButton(menuOptions);
  const btnRed = document.querySelector("#btnRed");
  const btnWhite = document.querySelector("#btnWhite");
  const btnRose = document.querySelector("#btnRose");

  // display products in first category by default
  let selectedCategory = document.querySelector("#selected-category");
  selectedCategory.innerHTML = btnRed.innerText;
  ShowRedWineList("c1");

  // display contents after button#0 (Red wine) clicked
  btnRed.addEventListener("click", function () {
    ShowRedWineList("c1");
  });

  // display contents after button#1 (White wine) clicked
  btnWhite.addEventListener("click", function () {
    ShowRedWineList("c2");
  });

  // display contents after button#2 (Rose wine) clicked
  btnRose.addEventListener("click", function () {
    ShowRedWineList("c3");
  });
});

/*==============================================================*/
//FUNCTIONS
/*==============================================================*/
// make menu buttons
function makeButton(options) {
  options.forEach(function (e) {
    let menu = document.querySelector("#menu");
    let btn = document.createElement("button");
    btn.innerHTML = e.name;
    btn.id = e.id;
    menu.appendChild(btn);
  });
}

// display product information in each category.
function ShowRedWineList(category) {
  //update title
  updateTitle(category);
  //remove previous list
  removeList();
  // filter products array (filter discontinued products)
  let filteredArray = products.filter((e) => !e.discontinued && e.categories[0].includes(category));
  // add each product in product-cards class
  filteredArray.forEach((e) => {
    let eachCard = createProductCard(e);
    productCards.appendChild(eachCard);
  });
}

//  remove previous list
function removeList() {
  let div = productCards.querySelectorAll("div");
  div.forEach(function (e) {
    e.remove();
  });
}
// Update the text of the selected category title
function updateTitle(category) {
  let updateTitle;
  categories.forEach(function (e) {
    if (e.id === category) updateTitle = e.name;
  });
  selectedCategory.innerHTML = updateTitle;
}

// create cards
function createProductCard(product) {
  //create <div> to hold the card
  const card = document.createElement("div");
  //add the .card class to the <div>
  card.classList.add("card");
  //create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const productName = document.createElement("h3");
  productName.innerHTML = product.title;
  productName.classList.add("card-name");
  card.appendChild(productName);

  const productDesc = document.createElement("p");
  productDesc.innerHTML = product.description;
  productDesc.classList.add("card-desc");
  card.appendChild(productDesc);

  const productPrice = document.createElement("span");
  productPrice.innerHTML = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price / 100);
  productPrice.classList.add("card-price");
  card.appendChild(productPrice);

  return card;
}
