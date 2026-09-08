const socket = new WebSocket("wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI");

const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  })
}

const messages = [
    {type: "Heartbeat", payload: {}},
    {type: "StatusNotification", payload: {"connectorId":1,"errorCode":"NoError","status":"Preparing"}}
]

const sendNextMessage = () => {
  if (messages.length === 0) {
    console.log("All messages sent");
    // socket.close();
    return;
  }
  const message = messages.shift();
  socket.send(`[2,"${getUUID()}","${message.type}",${JSON.stringify(message.payload)}]`);
}

// Connection opened
socket.addEventListener("open", (event) => {
    sendNextMessage()
//   socket.send(`[2,"${getUUID()}","Heartbeat",{}]`);
//   socket.send(`[2,"${getUUID()}","Heartbeat",{}]`);
// //   socket.send(`[3,"${getUUID()}",{"currentTime":"${new Date().toISOString()}"}]`);
//   socket.send(`[2,"${getUUID()}","StatusNotification",{"connectorId":2,"errorCode":"NoError","status":"Preparing"}]`);
});

socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    sendNextMessage()
});