import requests
import random

def get_details(business_id):
    url = f"https://api.yelp.com/v3/businesses/{business_id}"

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.1",
        "Authorization": "Bearer Inyqz1xFVnNhXr3sZDEx0kutyooWX-fSlCrDyT55wzUYi40-4mIW3IBscUSITVlCug_fMyGQsa_JtIF9eywjIOHqJHoM23i5CGLWnxg_Gy-jLKDIQVbx6HyMduNVZXYx"
    }

    response = requests.request("GET", url, data=payload, headers=headers)

    return response.json()

def get_business(location, price):

    print("hserserset", location)
    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location":location,"price":price}

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.1",
        "Authorization": "Bearer Inyqz1xFVnNhXr3sZDEx0kutyooWX-fSlCrDyT55wzUYi40-4mIW3IBscUSITVlCug_fMyGQsa_JtIF9eywjIOHqJHoM23i5CGLWnxg_Gy-jLKDIQVbx6HyMduNVZXYx"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    if response.status_code == 200:
        businesses = response.json().get("businesses", [])
        data = get_details(random.choice(businesses).get("id"))
        return data
    else:
        print("Error:", response.status_code)
        return None