const request = require('request')


const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FpZGE4NjAiLCJhIjoiY2tnMHlqanFvMm93ajJyczM4Z2YyaTdqOCJ9.PpOGg8pXHaLPCqkUWS1HNQ'
    request({url,json:true},(error,{body})=>{
        if (error){
            callback('Unable to connet to the lovation services!',undefined)
        }else if(body.features.length===0){
            callback('Unable to find location! try another search',undefined)
    
        }else 
        {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    
    })
    
    
    }
    module.exports= geocode



    //geocoding address--> long,latt--> weather 
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/brooklyn.json?access_token=pk.eyJ1Ijoic2FpZGE4NjAiLCJhIjoiY2tnMHlqanFvMm93ajJyczM4Z2YyaTdqOCJ9.PpOGg8pXHaLPCqkUWS1HNQ'
// request({url:geocodeURL,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather services!')
//     } else if (response.body.features.length===0)
//     {
//         console.log('Unable to connect.Try again with s new search term')
//     }
//     else{
//     const latitude = response.body.features[0].center[1]
//     const longtitude = response.body.features[0].center[0]
//     console.log(latitude,longitude)
//     }
// })
