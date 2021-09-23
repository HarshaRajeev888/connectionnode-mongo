//USE OF CALLBACK
//***************


// const fruits = [
//     {name:"Apple", content: "Rich fibre content"},
//     {name:"Lemon", content: "Rich od vitamine c"}
// ]

// function getFruits(){
//   setTimeout(()=>{
//       let output ='';
//       fruits.forEach((fruit)=>{
//              output+= `<li>${fruit.name}</li>`
//       })
//       document.body.innerHTML=output
//   },1000)

// }

// function createFruit(fruit,callback){
//     setTimeout(()=>{
//         fruits.push(fruit)
//         callback()
//     },1500)

// }

// createFruit({name:"Banana", content:"Rich of vitamine e"},getFruits)


//------------------------------------------------------------------------------------------------
//USE OF PROMISE
//*  *  *  *  *


// const fruits = [
//     { name: "Apple", content: "Rich fibre content" },
//     { name: "Lemon", content: "Rich od vitamine c" }
// ]

// function getFruits() {
//     setTimeout(() => {
//         let output = '';
//         fruits.forEach((fruit) => {
//             output += `<li>${fruit.name}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)

// }

// function createFruit(fruit) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fruits.push(fruit)
//             const error = false;  
//             // =true (error msg will show)
//             // =false (output  will print)
//             if(!error){
//                 resolve()
//             }else{
//                 reject("error, something went wrong")
//             }

//         }, 1500)
//     })


// }

// createFruit({ name: "Banana", content: "Rich of vitamine e" }).then(getFruits)
// .catch((err)=>{
// console.log(err)
// })

//--------------------------------------------------------------------------------------------------------
//USE OF ASYNC & AWAIT
//*  *  *  *  *   *   *

const fruits = [
    { name: "Apple", content: "Rich fibre content" },
    { name: "Lemon", content: "Rich od vitamine c" }
]

function getFruits() {
    setTimeout(() => {
        let output = '';
        fruits.forEach((fruit) => {
            output += `<li>${fruit.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000)

}

function createFruit(fruit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fruits.push(fruit)
            const error = false;  
            // =true (error msg will show)
            // =false (output  will print)
            if(!error){
                resolve()
            }else{
                reject("error, something went wrong")
            }

        }, 1500)
    })


}
async function afruits(){
    await createFruit({ name: "Banana", content: "Rich of vitamine e" })
    
    getFruits()
}
afruits()

