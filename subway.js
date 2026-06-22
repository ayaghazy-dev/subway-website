function calc(){
    let price = document.getElementById("price").value;
    let total = price * 1.15;
    document.getElementById("result").innerText = "Total with tax: " + total + "$";
}