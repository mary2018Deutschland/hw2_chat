import EventEmitter from "events";
const myEmitter = new EventEmitter();
export function sendMessage(username, message, emitter) {
  emitter.emit("message", { username, message });
} // Генерируем событие 'message'
// Обработчик события 'message'
myEmitter.on("message", ({ username, message }) => {
  console.log(`${username}: ${message}`); // Выводим сообщение в нужном формате
});
// Примеры вызова функции sendMessage
sendMessage("Mascha", "Hi!", myEmitter);
sendMessage("Olha", "Wie geht's?", myEmitter);
sendMessage("Alex", "Hallo!", myEmitter);
