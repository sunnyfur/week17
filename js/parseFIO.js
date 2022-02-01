const parseFIO = (e) => {
    let fio = e.target.value.match(/[а-яА-Яa-zA-Z]{1,}/g);
    let name = "";
    let surname = "";
    let secondname = "";
    if (e.target.value) {

        const toUpperFirst = (str) => {
            let nStr = "";
            if (str) {
                nStr = str[0].toUpperCase();
                if (str.length >= 2) nStr += str.slice(1).toLowerCase();
            }
            return nStr;
        }

        name = toUpperFirst(fio[1]);
        surname = toUpperFirst(fio[0]);
        secondname = toUpperFirst(fio[2]);
    }

    document.querySelector("#idName").value = name;
    document.querySelector("#idSurname").value = surname;
    document.querySelector("#idSecondName").value = secondname;

};
document.querySelector("#idFIO").addEventListener("keyup", parseFIO);