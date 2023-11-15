const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'insomnia/8.4.1',
        Authorization: 'Bearer 4J-bQ9eSyxSktKKdSOk2ZO6b9q9XOb-RroAujtxCfY-IXJqMuzVBLZs-eGhQrP-YWiRVPX_mKzQhoRcdkK83xCVfRpVRPS9JiB1cjI7DgJk0KTUb1-EMOT-5dK1TZXYx'
    }
};

function get_details(id) {
    fetch(`https://api.yelp.com/v3/businesses/${encodeURIComponent(id)}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function get_business(location, price) {
    const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}`;

    fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function returnValues() {
    let locationInput = document.getElementById("locationInput").value;

    let priceInput = [
        document.getElementById("$").checked,
        document.getElementById("$$").checked,
        document.getElementById("$$$").checked,
        document.getElementById("$$$$").checked
    ];

    let priceArr = [];
    for (let i = 0; i < priceInput.length; i++) {
        if (priceInput[i]) {
            priceArr.push(i + 1);
        }
    }

    //SMH IT DOESNT WORK
    get_business(locationInput, priceArr)
        .then(dataObj => {
            console.log(dataObj);
            document.getElementById("locationInput").value = "";
            document.getElementById("priceInput").value = "selectPrice";
        });
}