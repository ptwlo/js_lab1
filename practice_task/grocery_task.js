function calculateGroceries(){

    let grocery1 = parseFloat(document.getElementById('grocery_1').value);
    let grocery2 = parseFloat(document.getElementById('grocery_2').value);
    let grocery3 = parseFloat(document.getElementById('grocery_3').value);

    const total = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `Total amount is: $${total}`;
}