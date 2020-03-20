# Thermostat

A thermostat application made in made with Javascript and tested with Jasmine.

The application is optimised for mobile devices first and foremost. So if you're viewing this application in chrome, make sure to turn on responsive design within the dev toolbars.

run the specrunner.html in your browser is all you need to run the tests.

This application makes a call to the openweathermap API to get real temperature data from different cities.

You will need to go to

www.openweathermap.org

Sign up and copy your free API key.

in the root of your project, create a folder called APIKEY

within the APIKEY folder create a file called data.js

Within data.js type the followoing and type your api key in strings where YOUR_API_KEY_HERE is:

```
const APIKEY = YOUR_API_KEY_HERE;
```

Enjoy the thermostat :)
