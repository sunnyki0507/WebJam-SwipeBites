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
    const data = await get();
    // alert("Data: " + data);
    document.getElementById("name").innerHTML = data["name"];
    document.getElementById("rating").innerHTML = data["rating"];
    document.getElementById("count").innerHTML = data["review_count"];
    document.getElementById("categories").innerHTML = data["categories"].map(category => category.title).join(', ');
}

function get() {
    const data = {
        location: "irvine",
        price: [1,2]
    };

    // const data = get_input();

    const priceString = data.price.join(',');
    const url = `/api?location=${encodeURIComponent(data.location)}&price=${encodeURIComponent(priceString)}`;

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