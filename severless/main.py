import requests
import json
import functions_framework

WeatherUrl = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"

@functions_framework.http
def severless(request):
    response = requests.get(WeatherUrl)

    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    if response.ok:
        # clementi weather
        output = response.json()["items"][0]["forecasts"][11]
        return (output, 200, headers)
    else:
        return ({"error": "error retrieving weather"}, 500, headers)