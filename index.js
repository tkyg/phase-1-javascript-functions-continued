// Your code here
// function saturdayFun(activity = "roller-skate"){
//     switch (activity){
//         case "bathe my dog":
//             return "This Saturday, I want to bathe my dog!"
//                 default:
//                     return `This Saturday, I want to ${activity}!`
//     }
// }

// function mondayWork( activity = 'go to the office'){
//     switch (activity){
//         case "work from home":
//             return "This Monday, I will work from home."
//             default:
//                 return `This Monday, I will ${activity}.`
//     }
// }

 
// function wrapAdjective(title1 = "*", title2 = "You are"){
//     return function (title3){
//       return `${title2} ${title1}${title3}${title1}!`;
//     }
// }

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("swim")

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("go play golf")

function wrapAdjective(symbol = "*", title = "You are"){
    return function (adjective = "special"){
        return `${title} ${symbol}${adjective}${symbol}!`
    }
}