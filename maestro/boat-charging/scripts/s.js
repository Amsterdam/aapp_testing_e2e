// console.log(await fetch('wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     type: 'ping',
//     payload: { id: 123 },
//   }),
// }));
// const HttpClient = Java.type('java.net.http.HttpClient');
// const HttpRequest = Java.type('java.net.http.HttpRequest');
// const BodyPublishers = Java.type('java.net.http.HttpRequest$BodyPublishers');
// const URI = Java.type('java.net.URI');

// const client = HttpClient.newHttpClient();

// const request = HttpRequest.newBuilder()
//   .uri(URI.create('wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI'))
//   .header('Content-Type', 'application/json')
//   .POST(BodyPublishers.ofString(JSON.stringify({ message: 'hello' })))
//   .build();

// client.send(request, Java.type('java.net.http.HttpResponse$BodyHandlers').discarding());
const response = http.get('wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI', {
    // body: JSON.stringify({
    //     type: 'Heartbeat',
    //     payload: {},
    // }),
    async: true,
});
console.log('Response status:', JSON.stringify(response));
// const request = new XMLHttpRequest();
// request.open('POST', 'wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI', true);
// request.setRequestHeader('Content-Type', 'application/json');
// request.send(JSON.stringify({
//   type: 'Heartbeat',
//   payload: {},
// }));
// const request = new XMLHttpRequest();
// request.open('POST', 'wss://service.staging.evinity.io/cpms/websockets/VCPS-MULTI', true);
// request.setRequestHeader('Content-Type', 'application/json');
// request.send(JSON.stringify({
//   type: 'Heartbeat',
//   payload: {},
// }));