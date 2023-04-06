const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nameBlock = document.querySelector('.name')

const userName = prompt("Your name:")
nameBlock.innerHTML = `${userName}`

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(input.value) {
        socket.emit("chat_message", {
            message: input.value,
            name: userName
        })
        input.value = ""
    }
})

socket.on("chat_message", (data) => {
    const item = document.createElement("li")
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})