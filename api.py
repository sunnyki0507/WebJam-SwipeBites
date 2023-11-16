import requests
import random

def get_details(business_id):
    url = f"https://api.yelp.com/v3/businesses/{business_id}"

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.1",
        "Authorization": "Bearer 4J-bQ9eSyxSktKKdSOk2ZO6b9q9XOb-RroAujtxCfY-IXJqMuzVBLZs-eGhQrP-YWiRVPX_mKzQhoRcdkK83xCVfRpVRPS9JiB1cjI7DgJk0KTUb1-EMOT-5dK1TZXYx"
    }

    response = requests.request("GET", url, data=payload, headers=headers)

    return response.json()

def get_business(location, price):
    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location":location,"price":price}

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.1",
        "Authorization": "Bearer 4J-bQ9eSyxSktKKdSOk2ZO6b9q9XOb-RroAujtxCfY-IXJqMuzVBLZs-eGhQrP-YWiRVPX_mKzQhoRcdkK83xCVfRpVRPS9JiB1cjI7DgJk0KTUb1-EMOT-5dK1TZXYx"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    if response.status_code == 200:
        businesses = response.json().get("businesses", [])
        data = get_details(random.choice(businesses).get("id"))
        return data
    else:
        print("Error:", response.status_code)
        return None