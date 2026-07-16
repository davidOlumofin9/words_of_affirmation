




// let details = {
//     name: "john paul",
//     age: 81,
//     course:"Diploma in politics",
//     specialty: "International Relations",
//     "salary": {
//     basic: 7000,
//     rent: 30000,
//     food: 1000
//   },
//   isverified : true,
//     intrests : ["coding","drama","skit"]

// }

// console.log(details.age);

//! PROMISE 

//.then() used to wait for a promise
//.catch(e) in the case there is an error it wont crash
//.finally()




const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');

const URL =  "https://dummyjson.com/quotes/random";

//the fetch function

//assync await
const getRandomquote = async () => {
  const resp = await fetch(URL);
  const dts = await resp.json();

    let quote = dts.quote; 
    let author = dts.author;

    quoteEl.textContent = quote; 
    authorEl.textContent = author; 

};

 btnEl.onclick = (e) => { 
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  quoteEl.style.color = "#" + randomColor;
    getRandomquote();
    
    
};





    // .then()
    // fetch("/data.json").then((res)=>{
    //     return res.json();
    // })
    // .then((data)=> {
    //     console.log(data);
    // }).catch((e => {
    //     console.log('an error occured');
    //     console.log(e.message)
    // }))

    // const resp = fetch("/data.json");
    // console.log(resp);