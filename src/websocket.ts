import { io } from "./http";

interface Teste {
    socket_id: string,
    username: string,
    dt_acess: Date
}

const acess: Teste[] = []

io.on("connection", socket => {
    console.log(socket.id)
    socket.on("Teste", (data, callback) => {
        console.log(data);
        
        acess.push({
            username: data.username,
            dt_acess: data.dt_acess,
            socket_id: socket.id
        });

        console.log(acess)
        callback({
            status: "recebido"
        })
    });
}); 