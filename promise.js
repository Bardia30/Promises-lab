// //Promise MAKER
// function getWeather() {
//     return new Promise(function(resolve,reject){
//         //does some async here
//         setTimeout(function(){
//             //goes into second paramter of .then()
//             // reject("nothing");

//             resolve("Sunny");
//         }, 100)
//     })
// };

// function getWeatherIcon(weather){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             switch(weather){
//                 case 'Sunny':
//                     resolve("🎉");
//                     break;
//                 case "Cloudy":
//                     resolve("🤦‍♂️");
//                     break;
//                 case "Rainy":
//                     resolve("🤢");
//                     break;
//                 default:
//                     reject("NO WEATHER RETURNED");
//             }
//         },100)
//     })
// }

// //promise receiver
// // let promise = getWeather();

// // promise.then(
// //     function(data){
// //         console.log(`first param ${data}`);
// //     },
// //     function(data){
// //         console.log(`second param ${data}`)
// //     }

// // )



// // console.log(promise);

// //cleaned up version of above 

// function onSuccess(data) {
//     console.log(`Success: ${data}`);
// }

// function onError(error) {
//     console.log(`Error: ${error}`);
// }


// getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess,onError);


//another version 
// function fun1() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('404');
//         },100)
//     })
// }



// function fun2() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('❤');
//         },100)
//     })
// }


// function onSuccess(data){
//     console.log(data);
// }

// function onError(errorCode){
//     console.log(`ERROR: ${errorCode}`);
// }


// function onFinally(){
//     console.log("this is the end");
// }

// fun1()
//     .then(fun2)
//     .then(onSuccess)
//     .catch(onError)
//     .finally(onFinally)





//real world example with fetch api
// function fetchData() {
//     return new Promise((resolve, reject)=>{
//         fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//             .then(response => response.json())
//             .then(data => reject(data.properties.periods[1].shortForecast));
//     })
// }

// function displayData(weather) {
//     console.log(weather);
// }

// function onError(err){
//     console.log(`ERROR: ${err}`)
// }

// fetchData()
//  .then(displayData)
//  .catch(onError)



// function newPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve(15);
//     })
// }


// let promise = newPromise();


// promise.then((data)=>{
//     console.log(`here is the value: ${data}`)
// });

//another way 

// let newPromise = Promise.resolve(15);
// newPromise.then(data => console.log(`here is the value: ${data}`));


const zeroTo = ()=> {
    return new Promise((resolve,reject)=>{

        const timeItTakesToResolve = Math.round(Math.random()*1500);
        console.log(timeItTakesToResolve);
        setTimeout(()=>{
            if(timeItTakesToResolve<500){
    
                resolve(`the operation too ${timeItTakesToResolve}ms to complete`);
    
            } else {
                reject('the operation was not real quick')
            }
        }, timeItTakesToResolve)
    })
} 

const onSuccess = (data) =>{
    console.log(`data is: ${data}`)
}

const onError = (err) => {
    console.log(`ERROR: ${err}`)
}

zeroTo()
.then(onSuccess)
.catch(onError)