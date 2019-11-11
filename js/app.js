console.log("Worked!");
let yes = document.querySelector("#yes"),
    no = document.querySelector("#no"),
    yesChoice = document.querySelector(".yesChoice"),
    noChoice = document.querySelector(".noChoice"),
    exit = document.querySelectorAll(".fa-times-circle"),
    button = document.querySelectorAll("button");
let text = `Này cô gái dễ thương kia ơi, ừ, chính là cậu đó. < Tớ đã rất đắn đo khi viết những lời này. < Tớ không
biết
liệu  kết quả có được như mong muốn. < Nhưng cuối cùng tớ vấn muốn nói ra. < Vì đó là những thứ mà con
tim tớ 
mách bảo. < Từ lần đầu tiên gặp cậu, con tim tớ đã xốn xang. < Tớ chưa từng trải qua cảm giác đó trước
đây. <
Càng tiếp xúc với cậu, < tớ lại càng tin rằng, < cậu là người mà tớ muốn bảo vệ trong quãng đời còn lại. <
Người mà tớ muốn mang lại hạnh phúc, muốn nhìn thấy nụ cười vui vẻ mãi mãi. |
Vậy nên, tớ không biết rằng tớ có thể có được may mắn đó hay không. < Trở thành người thương của cậu,
che
chở cho cậu, chia sẻ gánh nặng cuộc đời với cậu. < Có được không ?`;
let i = 0;
let speed = 100;
let para = document.querySelector("#txt");
typeWriter();

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) == "<") para.innerHTML += "</br>";
        else if (text.charAt(i) == "|") para.innerHTML = "";
        else para.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    } else {
        for (let j = 0; j < button.length; j++) {
            button[j].style.visibility = "visible"
        }
    }
}
// yes.addEventListener("click", function () {
//     noChoice.style.display = "none";
//     yesChoice.style.display = "flex"
// });
// no.addEventListener("click", function () {
//     noChoice.style.display = "block";
//     yesChoice.style.display = "none"
// });
// for (let i = 0; i < exit.length; i++) {
//     exit[i].addEventListener("click", function () {
//         noChoice.style.display = "none";
//         yesChoice.style.display = "none"
//     })
// }