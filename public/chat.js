const socket = io();

const username = "Guilherme";
const dt_acess = new Date();

socket.emit("Teste", {
    username,
    dt_acess,
}, (response) => {
    console.log(response)
})