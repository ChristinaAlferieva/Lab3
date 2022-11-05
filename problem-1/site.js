const name = document.querySelector("#name");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const addButton = document.querySelector("#add");
const error = document.querySelector("#error");
const table = document.querySelector("#table_summary tbody");
const sortButton = document.querySelector("#tableHeader");
const input = document.getElementById("contact_search");
const filter = input.ariaValueMax.toUpperCase();
const tr = table.getElementsByTagName("tr");
const letter = /^[A-Za-z]+$/;

var index = 1;
var sorting = 1;
var contact = [];

error.innerHTML = "";
noResult.innerHTML = "";

