let butt1 = document.querySelector(".butt1");
let butt2 = document.querySelector('.butt2')
let input = document.querySelector('#rerr')

butt2.onclick = function () {
    input.value--;
}
butt1.onclick = function () {
    input.value++;
}