
function return_values() {
    let locationInput = document.getElementById("locationInput").value;

    let price = [];
    let count = "$";
    for (let x = 0; x < 4; ++x) {
        if (document.getElementById(count).checked) {
            price.push(x + 1);
        }
        count += "$";
    }
}

function radioValue(clickedButton) {
    let itemID = clickedButton.id;
    let radio = document.getElementById(itemID);
    radio.value = "true";
}



function loadData(){
   // alert(retrieve("name"));
    document.getElementById("name").innerHTML = "Leanne";
    document.getElementById("rating").innerHTML = "4";
    document.getElementById("count").innerHTML = "3.5";
    document.getElementById("categories").innerHTML = "chicken, noodles";
}

let url1 = "https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg"
let url2 = "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg";
let url3 = "https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill";
let url4 = "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J";
let url = [url1, url2, url3, url4];
let current = 0; // Declare the variable outside the functions

function currentImage() {
    let image = document.getElementById("url");
    image.src = url[current];
}

function leftButton() {
    let image = document.getElementById("url");
    // Use the global variable
    if (current === 0) {
        current = 3;
    } else {
        --current;
    }

    image.src = url[current];
}

function rightButton() {
    let image = document.getElementById("url");
    if (current === 3) {
        current = 0;
    } else {
        ++current;
    }
    image.src = url[current];
}