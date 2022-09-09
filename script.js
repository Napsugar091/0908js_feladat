function szamol() {
    let a = parseInt(document.getElementById('a').value),
        b = parseInt(document.getElementById('b').value);
    document.getElementById('k').value = 2 * (a + b);
    document.getElementById('t').value = a * b;
}