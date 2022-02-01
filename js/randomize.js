const getSum = (arr) => {
    let sum = 0;
    for (elem of arr) sum += elem;
    return sum;
};
const getMul = (arr) => {
    let mul = 1;
    for (elem of arr) mul *= elem;
    return mul;
}
const getArr = (len, minVal, maxVal) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random() * (maxVal - minVal)) + minVal);
    }
    return arr;
}
const getMin = (arr) => {
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            min = arr[0]
        } else {
            if (arr[i] < min) min = arr[i];
        }
    }
    return min;
}
const getMax = (arr) => {
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            max = arr[0]
        } else {
            if (arr[i] > max) max = arr[i];
        }
    }
    return max;
}


const rand = (e) => {
    const len = 10;

    const maxVal = 10;
    const minVal = -10;
    let arr = getArr(len, minVal, maxVal);
    const min = getMin(arr);
    const max = getMax(arr);
    const sum = getSum(arr);
    const aver = sum / arr.length;
    const mul = getMul(arr);

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

document.querySelector("#idBtnRand").addEventListener("click", rand);