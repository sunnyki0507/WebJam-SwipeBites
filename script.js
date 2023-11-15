function returnValues() {
    let locationInput = document.getElementById("locationInput").value;

    alert(locationInput);

    let priceInput = [
        document.getElementById("$").checked,
        document.getElementById("$$").checked,
        document.getElementById("$$$").checked,
        document.getElementById("$$$$").checked
    ];

    alert(priceInput);

    document.getElementById("locationInput").value = "";
    document.getElementById("priceInput").value = "selectPrice";
}
