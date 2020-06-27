let socket = new WebSocket("ws://localhost:3001/")

document.getElementById("form").addEventListener("submit", (event) => {
     event.preventDefault()

     let message = document.getElementById("message").value

     console.log(message)

     socket.send(message)
})

socket.onmessage = (res) => {
     let message = res.data

     let messages = document.getElementById("messages")

     let p = document.createElement("p")
     p.textContent = message

     messages.appendChild(p)
}