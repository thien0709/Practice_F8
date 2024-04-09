const list = document.querySelector(".list");
const inp = document.querySelector("#input");

let filter = [];

let data;
async function getData() {
  try {
    const reponse = await fetch("data.json");
    return await reponse.json();
  } catch (error) {
    alert(error);
  }
}
// Wait get Data
(async ()=>{
 data = await getData();
 setList(data);
})();

const setList =  function (arr) {
  let htmls = "";
  arr.forEach((arg) => {
    const html = `
        <li class="item">
        <h4 class="${arg.person}">${arg.person}</h4>
        </li>
        `;
    htmls += html;
  });
  list.innerHTML = htmls;
};
inp.oninput = function (e) {
  const value = e.target.value.trim().toLowerCase();
  if (value == "") return setList(data);
  filter = data.filter(function (item) {
    return item.person.toLowerCase().includes(value);
  });
  setList(filter);
};
// Load xong main.js mới load message
document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = './message.js';
    document.body.appendChild(script);
  });
  