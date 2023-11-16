let GLOBAL_INPUT, GLOBAL_DATA;

const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'insomnia/8.4.1',
        Authorization: 'Bearer Inyqz1xFVnNhXr3sZDEx0kutyooWX-fSlCrDyT55wzUYi40-4mIW3IBscUSITVlCug_fMyGQsa_JtIF9eywjIOHqJHoM23i5CGLWnxg_Gy-jLKDIQVbx6HyMduNVZXYx'
    }
};

function get_input() {
    let locationInput = document.getElementById("locationInput").value;

    let price = [];
    let count = "$";
    for (let x = 0; x < 4; ++x) {
        if (document.getElementById(count).checked) {
            price.push(x + 1);
        }
        count += "$";
    }

    return {
        location: locationInput,
        price: price
    };
}

function radioValue(clickedButton) {
    let itemID = clickedButton.id;
    let radio = document.getElementById(itemID);
    radio.value = "true";
}

function loadData(){
    // document.getElementById("name").innerHTML = toString(GLOBAL_DATA["name"]);
    // document.getElementById("rating").innerHTML = GLOBAL_DATA["rating"];
    // document.getElementById("count").innerHTML = GLOBAL_DATA["review_count"];
    // document.getElementById("categories").innerHTML = GLOBAL_DATA["categories"].map(category => category.title).join(', ');

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

function get_data() {
    const priceString = GLOBAL_INPUT.price.join(',');
    const url = `/api?location=${encodeURIComponent(GLOBAL_INPUT.location)}&price=${encodeURIComponent(priceString)}`;

    return fetch(url, options)
        .then(response => {
            alert('Response status: ' + response.status);
            return response.json();
        })
        .then(response => {
            alert('Data received: ' + JSON.stringify(response));
            return response;
        })
        .catch(err => console.error(err));
}

async function begin_swipe() {
    GLOBAL_INPUT = await get_input();
    GLOBAL_DATA = await get_data();

    alert("Location: " + GLOBAL_INPUT.location +
        "\nPrice: " + GLOBAL_INPUT.price.join(',') +
        "\nOutput: " + GLOBAL_DATA["categories"].map(category => category.title).join(', '))

    window.location.href = '/swipe';
}