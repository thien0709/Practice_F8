// // Sử dụng case để 2 case dùng chung một mã code
// // case 4 : case 5 : statement break;

// console.log(typeof NaN);
// console.log(1/-0)
// console.log(Math.floor("a"))

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
        <p class="${arg.person}">${arg.person}</p>
      </li>
        `;
    htmls += html;
  });
  list.innerHTML = htmls;
};
inp.oninput = function (e) {
  const value = e.target.value;
  if (value == "") return setList(data);
  filter = data.filter(function (item) {
    return item.person.indexOf(value) == -1 ? false : true;
  });
  setList(filter);
};
