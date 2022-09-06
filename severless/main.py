import requests
import json
import functions_framework

WeatherUrl = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"

@functions_framework.http
def severless(request):
    response = requests.get(WeatherUrl)

    if response.ok:
        # clementi weather
        output = response.json()["items"][0]["forecasts"][11]
        return json.dumps({"statusCode":200, "response":output})
    else:
        return json.dumps({
            "statusCode": 500,
            "response": "{}"
        })