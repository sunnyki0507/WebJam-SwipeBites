function returnValues() {
    let locationInput =
        document.getElementById("locationInput").value;
    alert(locationInput);

    let lowValue = document.getElementById("$").value;
    let lowMedium = document.getElementById("$$").value;
    let highMedium = document.getElementById("$$$").value;
    let highValue = document.getElementById("$$$$").value;


    if (lowValue.checked != "checked")
    {
        lowValue = "off";
    }
    
    let priceElements = [];
    priceElements.push(lowValue, lowMedium, highMedium, highValue);
    alert(priceElements)

   document.getElementById("locationInput").value = "";
   document.getElementById("priceInput").value = "selectPrice";
}

