const randCopy = (e) => {
    const len = 10;
    const maxVal = 10;
    const minVal = -10;

    const arr = [];
    let min, max, sum = 0,
        mul = 1;

    for (let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random() * (maxVal - minVal)) + minVal);
        // if (i == 0) {
        //     min = arr[0];
        //     max = arr[0];
        // } else {
        //     if (arr[i] < min) min = arr[i];
        //     if (arr[i] > max) max = arr[i];
        // }
        sum += arr[i];
        mul *= arr[i];
    }

    min = Math.min(...arr);
    max = Math.max(...arr);


    const aver = sum / arr.length;
    let res = `Сгенерировали: ${arr.join(" ")} </br>
    Минимальное число: ${min} </br>
    Максимальное число: ${max} </br>
    Среднее арифметическое: ${aver} </br>
    Сумма чисел: ${getSum(arr)} </br>
    Произведение чисел: ${mul}`;

    if (e.target.parentNode.querySelector("div")) e.target.parentNode.removeChild(e.target.parentNode.querySelector("div"));
    const div = document.createElement("div");
    div.innerHTML = res;
    e.target.parentNode.appendChild(div);

}

document.querySelector("#idBtnRandCopy").addEventListener("click", randCopy);