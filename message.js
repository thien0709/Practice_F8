let messageUser = document.querySelector(".listMessage");
let listUser;
function getMessage() {
  listUser = document.querySelectorAll(".list h4");
  let nameUser = document.querySelector("#message .name");
  listUser.forEach((arg) => {
    arg.addEventListener("click", () => {
      nameUser.innerHTML = `${arg.className}`;
      let personObject = data.filter(
        (personObj) => personObj.person === arg.className
      );
      personObject.forEach((personObj) => {
        setMessage(personObj.messages);
      });
    });
  });
};
setInterval(() => {
 getMessage();
}, 100); 
// Add message to listMessage
let setMessage = function (arr) {
  let htmls = "";
  arr.forEach((element) => {
    const html = `
        <li class="itemMessage">
        <p class="${element}">${element}</p>
        </li>
        `;
    htmls += html;
  });
  messageUser.innerHTML = htmls;
};
