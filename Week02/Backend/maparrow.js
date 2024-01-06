//map, filter,arrow functions

//given an array, give me back a new array in which all the values are multiplied by 2

const input = [1,2,3,4,5]

// const newArray = []

// for ( let i=0; i<input.length; i++ ) {
//     newArray.push(input[i]*2)
// }

// console.log(input)
// console.log(newArray)

//other option using MAP

function transform(i){
    return i*2
}

const ans =input.map(transform)

console.log(ans)


//Other way filter

//Given a input array given an input array, give me back all the even value in the array


// for(let i=0; i<input.length; i++){
//     if(input[i]%2==0){
//         console.log(input[i])
//     }
// }


//FILTER

function filterlogic (n){
    if(n%2==0){
        return true
    }
    else
    return false
}


const ans3 = input.filter(filterlogic)
console.log(ans3)