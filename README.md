# Zip Code Lookup

Open [http://localhost:4500/zipcode](http://localhost:4500/zipcode) to view the JSON response in your browser.

# Section 1: How to request/receive data to/from Zip Code Microservice
## What this App Does

This microservice app looks up the city of the user and it returns a JSON object of the user's location.

## How to REQUEST Data
To request data, call `http://localhost:4500/zipcode` using the GET method.  

Parameters are not needed as the zipcode microserivce automatically take in the user's longitude and latitude and then respond with information of the user's city and zip code . However, VPN should NOT be used as it can hide the longitude and latitude. Users must allow location on their browser for the microservice to work. 

## How to RECEIVE Data
When your application calls my UI using the GET method through `http://localhost:4500/zipcode`, my microservice server will take in the longitude and latitude of the user and it will send you the data of the current 
geolocation of that user in JSON. 

# Section 2: Example code and successful response 
## Example JavaScript Code to call my Zip Code microservice
```JS
    const handleZip = async (event) => {
        
        const URL = 'http://localhost:4500/zipcode'
        event.preventDefault();
        const result = await fetch(URL)
        const data = await result.json();
        console.log(data);
    }
```
## Example of a successful response will look like this: 
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
![Updated - UML Diagram - CS361](https://github.com/stevenbertolucci/zipcode-microservice/assets/13703308/2fa59e36-62a4-4bbb-ad7d-d3124c135453)

