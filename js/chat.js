const checkSpam = (str) => {
    const stopList = ["viagra", "xxx"];
    const validWord = "***";
    str = str.replace(new RegExp(stopList.join("|"), "ig"), validWord);



    return str;
};


const addDomComment = (comm) => {
    const commElement = document.querySelector("#idTextComment");

    const pDate = document.createElement("p");
    pDate.classList.add("comment__date");
    pDate.dataset.date = comm.date;
    pDate.innerHTML = formatDate(pDate.dataset.date);

    const pComment = document.createElement("p"); //pre
    pComment.classList.add("comment__text");

    pComment.innerHTML = comm.text.replace(/\n/g, "</br>");

    const div = document.createElement("div");
    div.classList.add("comment");
    div.appendChild(pDate);
    div.appendChild(pComment);

    commElement.parentNode.insertBefore(div, commElement);

}

let comments = [];
const getArrComments = () => {
    return [{
            text: "Комментарий 1",
            date: "2022-01-01 08:43"
        },
        {
            text: "Комментарий 2",
            date: "2022-02-01 09:43"
        }
    ];
}



const viewComments = () => {
    comments = getArrComments();
    // вывести комментарии
    for (comm of comments) {
        addDomComment(comm);
    }


}
document.addEventListener("DOMContentLoaded", viewComments);


const addComment = (e) => {

    //добавить комментарий в массив

    const commElement = document.querySelector("#idTextComment");
    const comm = {
        text: checkSpam(commElement.value),
        date: new Date()
    };
    comments.push(comm);
    addDomComment(comm);
    commElement.value = "";

};

document.querySelector("#idAddComment").addEventListener("click", addComment);