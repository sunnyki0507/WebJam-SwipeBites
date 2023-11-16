let GLOBAL_INPUT, GLOBAL_DATA;

const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'insomnia/8.4.1',
        Authorization: 'Bearer 4J-bQ9eSyxSktKKdSOk2ZO6b9q9XOb-RroAujtxCfY-IXJqMuzVBLZs-eGhQrP-YWiRVPX_mKzQhoRcdkK83xCVfRpVRPS9JiB1cjI7DgJk0KTUb1-EMOT-5dK1TZXYx'
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

    // alert(locationInput)
    // alert(price)

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

async function loadData() {
    document.getElementById("name").innerHTML = GLOBAL_DATA["name"];
    document.getElementById("rating").innerHTML = GLOBAL_DATA["rating"];
    document.getElementById("count").innerHTML = GLOBAL_DATA["review_count"];
    document.getElementById("categories").innerHTML = GLOBAL_DATA["categories"].map(category => category.title).join(', ');
}

function get() {
    // const data = {
    //     location: "irvine",
    //     price: [1,2]
    // };

    const priceString = GLOBAL_INPUT.price.join(',');
    const url = `/api?location=${encodeURIComponent(GLOBAL_INPUT.location)}&price=${encodeURIComponent(priceString)}`;

    return fetch(url, options)
        .then(response => {
            // alert('Response status: ' + response.status);
            return response.json();
        })
        .then(response => {
            // alert('Data received: ' + JSON.stringify(response));
            return response;
        })
        .catch(err => console.error(err));
}

async function begin_swipe() {
    GLOBAL_INPUT = await get_input();
    GLOBAL_DATA = await get();
    alert("Location: " + GLOBAL_INPUT.location +
        "\nPrice: " + GLOBAL_INPUT.price.join(',') +
        "\nOutput: " + GLOBAL_DATA["name"])
    window.location.href = '/swipe';
}