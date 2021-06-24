/*function myFunction()
{

var hello, x;

hello = document.getElementById("p01");
hello.innerHTML = "";

x = document.getElementById("demo").value;

try{
        if(x=="")
        throw "empty";

        if(isNaN(x))
        throw "not a number";

        x = Number(x);
        if(x<5) throw "too low"
}

catch(e)
{
    hello.innerHTML = "Input is" + e;
}

let x = document.getElementById("imgdr");
let dragg = new Draggabilly(x);




}*/
// 

// 
/////Async and await/////
// async function fn() {
//     console.log(1);
//     var result = await new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve(2);
//         }, 2000);
//     });
// 	console.log(result);
//     console.log(3);
//     console.log(await 4); // 4 会被直接返回
// }
// fn();


// let a = [1,4,2,3,54,3];
// let b = [];

// let result = a.map()

// for(let i = 0; i<a.length; i++)
// {
//     if(b.indexOf(a[i])=== -1)
//     {
//         b.push(a[i]);
//     }

// }

// console.log(b);

///Promise/////
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
  
  function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  
  watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })
  
  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  
  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })