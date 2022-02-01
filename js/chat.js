const checkSpam = (str) => {
    const stopList = ["viagra", "xxx"];
    const validWord = "***";
    str = str.replace(new RegExp(stopList.join("|"), "ig"), validWord);



    return str;
};


const addComment = (e) => {

    //добавить комментарий перед кнопкой

    const commElement = document.querySelector("#idTextComment");

    const pDate = document.createElement("p");
    pDate.classList.add("comment__date");
    pDate.dataset.date = new Date();
    pDate.innerHTML = formatDate(pDate.dataset.date);



    const pComment = document.createElement("p");
    pComment.classList.add("comment__text");


    pComment.innerHTML = checkSpam(commElement.value).replace(/\n/g, "</br>");



    const div = document.createElement("div");
    div.classList.add("comment");
    div.appendChild(pDate);
    div.appendChild(pComment);

    // e.target.parentNode.appendChild(div);
    e.target.parentNode.insertBefore(div, commElement);
    commElement.value = "";









    e.target.parentNode
};

document.querySelector("#idAddComment").addEventListener("click", addComment);