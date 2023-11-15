function returnValues() {
    let locationInput = document.getElementById("locationInput").value;
    alert(locationInput);

    let price = [];
    let count = "$";
    for(let x = 0; x < 4; ++x)
    {
        let element = document.getElementById(count).value;
        price.push(element);
        count += "$";
    }

   alert(price) ;
}
function radioValue(clickedButton){
    let itemID = clickedButton.id;
    let radio = document.getElementById(itemID);
    radio.value = "true";
}


