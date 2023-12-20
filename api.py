import random
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Use os.getenv to access the API key
api_key = os.getenv("API_KEY")

# Check if API key is available
if not api_key:
    raise ValueError("API_KEY is not set in the environment variables.")

def get_details(business_id):
    url = f"https://api.yelp.com/v3/businesses/{business_id}"

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.1",
        "Authorization": f"Bearer {api_key}"
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
        "Authorization": f"Bearer {api_key}"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    if response.status_code == 200:
        businesses = response.json().get("businesses", [])
        data = get_details(random.choice(businesses).get("id"))
        return data
    else:
        print("Error:", response.status_code)
        return None