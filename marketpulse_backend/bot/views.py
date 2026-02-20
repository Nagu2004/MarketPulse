from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from google import genai
import datetime
import pyjokes
import requests
import json
import os

WEATHER_API_KEY = "e5a477fe377156d570abf3d52d33a0ea"
GEMINI_API_KEY = "AIzaSyAIoB9D9fGxNkYtf0dCusF_TPN11mBLSJI"  

base_url = "http://api.openweathermap.org/data/2.5/weather"


@csrf_exempt
def chatbotdata(request):

    # -------- GET --------
    if request.method == "GET":
        return JsonResponse({"message": "Chatbot API is running"})

    # -------- POST --------
    if request.method == "POST":

        body = json.loads(request.body)
        user_input = body.get("message", "").lower()
        print("input_user" ,user_input)

       

        def chatbot(user_input):
            client = genai.Client(api_key="AIzaSyAIoB9D9fGxNkYtf0dCusF_TPN11mBLSJI")

            response = client.models.generate_content(
                model="gemini-3-flash-preview", contents=user_input
            )
            return (response.text)

        def cur_time():
            time = datetime.datetime.now().strftime("%I:%M %p")
            return f"Current time: {time}"

        def today_date():
            date = datetime.date.today()
            return f"Today date is {date}"

        def joke():
            return f"The Joke is: {pyjokes.get_joke()}"

        def weather(city):
            params = {
                "q": city,
                "appid": WEATHER_API_KEY,
                "units": "metric"
            }

            try:
                response = requests.get(base_url, params=params, timeout=10)
                response.raise_for_status()
                data = response.json()

                return (
                    f"Weather in {data['name']} is {data['weather'][0]['description']}. "
                    f"Temperature: {data['main']['temp']}°C, "
                    f"Humidity: {data['main']['humidity']}%"
                )

            except requests.exceptions.RequestException as e:
                return f"Weather error: {str(e)}"


        if "time" in user_input:
            reply = cur_time()

        elif "date" in user_input:
            reply = today_date()

        elif "joke" in user_input:
            reply = joke()

        elif "weather" in user_input:
            city = user_input.replace("weather", "").strip()
            if not city:
                reply = "Please specify a city."
            else:
                reply = weather(city)
        elif "bye" in user_input or "see you later" in user_input:
            reply="Have a good Day Byee...!"

        else:
            reply = chatbot(user_input)

        return JsonResponse({"reply": reply})

    return JsonResponse({"error": "Method not allowed"})