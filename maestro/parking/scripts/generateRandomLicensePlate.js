const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const digits = '0123456789'
let plate = ''
for (let i = 0; i < 3; i++) {
    plate += letters.charAt(Math.floor(Math.random() * letters.length))
}
for (let i = 0; i < 4; i++) {
    plate += digits.charAt(Math.floor(Math.random() * digits.length))
}
output.licensePlate = plate