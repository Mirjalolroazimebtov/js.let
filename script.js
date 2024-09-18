let num = +prompt(`Kvadrat tomonini kiriting?`)
if (num % 2 == 0) {
    num++
}
let kvadrat = ""
let x = num

for (let i = 0; i < num; i++) {
    x--
    for (let j = 0; j < num; j++) {
        if (i == j || i == 0 || j == 0 || j == num - 1 || i == num - 1 || x - j == 0) {
            kvadrat += "🟪"
        } else {
            kvadrat += "⬜"
        }
    }
    console.log(kvadrat);
    kvadrat = ""
}
