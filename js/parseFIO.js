const parseFIO = (e) => {
    const fio = e.target.value.match(/[а-яА-Яa-zA-Z]{1,}/g);

    const toUpperFirst = (str) => {

        return str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

    }


    document.querySelector("#idName").value = fio[1] ? toUpperFirst(fio[1]) : "";
    document.querySelector("#idSurname").value = fio[0] ? toUpperFirst(fio[0]) : "";
    document.querySelector("#idSecondName").value = fio[2] ? toUpperFirst(fio[2]) : "";

};
document.querySelector("#idFIO").addEventListener("keyup", parseFIO);