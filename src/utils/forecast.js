const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=882f3ad4b4548f2508310fa027c5d48a&query='+ latitude + ',' + longitude +'&units=f'
 request({ url , json:true},(error,{body})=>{
   
   // with no internet connection
    if(error){
     callback('unable to connect',undefined)
     }
  else if(body.error){
     callback('unable to load the forecast.try another serach',undefined)
 }
 
 else {
 callback(undefined,body.current.weather_descriptions + '.It is currently ' 
                    + body.current.temperature +
     ' degrees out.It feels like ' + body.current.feelslike + ' degrees out')
 }
    

})
 
}

module.exports = forecast




// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)