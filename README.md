# Zip Code Lookup

Runs the app in the development mode.\
Open [http://localhost:4500/zipcode](http://localhost:4500/zipcode) to view it in your browser.

## What this App Does

This microservice app looks up the city of the user and it returns a JSON object of the user's location.

## How to REQUEST Data
To request data, call `http://localhost:4500/zipcode` using the GET method.  

Parameters are not needed as the zipcode microserivce automatically take in the user's longitude and latitude and then respond with information of the user's city and zip code . However, VPN should NOT be used as it can hide the longitude and latitude. Users must allow location on their browser for the microservice to work. 


An example code in JavaScript to fetch data from my zip code microservice is: 
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

## How to RECEIVE Data
When your application calls my UI using the GET method through `http://localhost:4500/zipcode`, my microservice server will take in the longitude and latitude of the user and it will send you the data of the current 
geolocation of that user in JSON. 

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
