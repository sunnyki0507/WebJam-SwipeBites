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
//get_details(get_business('irvine', '1,2'));
