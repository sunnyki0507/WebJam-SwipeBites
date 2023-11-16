const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'insomnia/8.4.1',
        Authorization: 'Bearer 4J-bQ9eSyxSktKKdSOk2ZO6b9q9XOb-RroAujtxCfY-IXJqMuzVBLZs-eGhQrP-YWiRVPX_mKzQhoRcdkK83xCVfRpVRPS9JiB1cjI7DgJk0KTUb1-EMOT-5dK1TZXYx'
    }
};

function get_business(location, price) {
    const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}`;

    return fetch(url, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

function get_details(id) {
    return fetch(`https://api.yelp.com/v3/businesses/${encodeURIComponent(id)}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

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

async function retrieve_data(attribute) {
    // const input = return_values();
    const location = "irvine";
    const price = [1, 2];

    const businessData = await get_business(location, price);

    if (businessData.businesses.length > 0) {
        const randomIndex = Math.floor(Math.random() * businessData.businesses.length);
        const detailsData = await get_details(businessData.businesses[randomIndex].id);

        let value = detailsData[attribute];
        return value;
    }
    else {
        console.error('No businesses found.');
        return null;
    }
}

async function main(attribute) {
    let output = await retrieve_data(attribute);
    console.log(output);
}

main("name");