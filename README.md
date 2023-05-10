# Zip Code Lookup

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4500](http://localhost:4500) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install cors`

Needed for to make calls to microservice without clicking button

### `npm install express`

### `npm install dotenv`

### `npm install express-async-handler`

### `npm install nodemon`

### `npm install node-fetch`

## What this App Does

This microservice app looks up the city of the user and it returns a JSON object of the user's location.

## How to REQUEST Data
Requesting data is very simple by using the fetch method to request data from the backend server, which is from Big Data Cloud API. In order
to have this working, you need to install cors to make calls to my Zip code server. 

The URL that I used is: `https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en`

The code to fetch data from Big Data Cloud API is: 
```JS
// Call microservice without clicking button
    const handleZip = async (event) => {
        
        const URL = 'http://localhost:4500/zipcode'
        event.preventDefault();
        const result = await fetch(URL)
        const data = await result.json();
        console.log(data);
    }
```

In order for the code above to work, you need to add this code to the server file to make calls:
```JS
import cors from "cors";
app.use(cors());
..
..
..
```
## How to RECEIVE Data
When your application calls my UI on port 4500, my UI will take in the location of the user and it will send you the data of the current 
geolocation of that user.
```JS   
        ...
        ...
        const data = await result.json();
        ...
    }
```
# Successful Response will look like this: 
```JS
{
  "latitude": 32.81999969482422,
  "longitude": -116.91999816894531,
  "continent": "North America",
  "lookupSource": "ip geolocation",
  "continentCode": "NA",
  "localityLanguageRequested": "en",
  "city": "San Diego",
  "countryName": "United States of America (the)",
  "countryCode": "US",
  "postcode": "92021",
  "principalSubdivision": "California",
  "principalSubdivisionCode": "US-CA",
  "plusCode": "8545R39J+X2",
  "locality": "Winter Gardens",
  "localityInfo": {
    "administrative": [
      ...
      ...
      ...
      ...
}
```
## UML Diagram
![UML Diagram](https://user-images.githubusercontent.com/13703308/236877383-c2a2fdf7-7b51-4d1d-b9f6-94c472b8c0c0.png)
