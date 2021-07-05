```js
function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let conceito = ''
    let mediaFinal = (p1 + p2 + ex) / 3

    if (mediaFinal >= 9) {
        conceito = 'A'
    } else if (mediaFinal < 9 && mediaFinal >= 7.5) {
        conceito = 'B'
    } else if (mediaFinal < 7.5 && mediaFinal >= 6) {
        conceito = 'C'
    } else {
        conceito = 'D'
    }
    return conceito
}