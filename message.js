let messageUser = document.querySelector(".listMessage");
let listUser;
function getMessage() {
  listUser = document.querySelectorAll(".list h4");
  listUser.forEach((arg) => {
    arg.addEventListener("click", () => {
      let personObject = data.filter(
        (personObj) => personObj.person === arg.className
      );
      personObject.forEach((personObj) => {
        console.log(personObj.messages);
        setMessage(personObj.messages);
      });
    });
  });
};

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length || mutation.removedNodes.length) {
        getMessage();
      }
    });
  });
observer.observe(document.querySelector('.list'), { childList: true, subtree: true });
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
