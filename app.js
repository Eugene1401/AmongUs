const btn = document.querySelector(".btn");
const imgDiv = document.querySelector("#divImage");

btn.addEventListener("click", function generator() {
  let x = Math.floor(Math.random() * 6 + 1);
  imgDiv.innerHTML = `
 <img class="fit-picture"
     src="/img/among${x}.webp"
     width="150px"/>
     `;
});
