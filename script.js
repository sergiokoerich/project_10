
let n1 = prompt('Enter the first number')
let n2 = prompt('Enter the second number')

n1 = Number(n1)
n2 = Number(n2)

let som = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let rest = n1 % n2

alert('The sum of the numbers is: ' + som)
alert('The subtraction of the numbers is: ' + sub)
alert('The multiplication of numbers is: ' + mult)
alert('The division of numbers is: ' + div)
alert('The rest of the division of numbers is: ' + rest)

if(som % 2 == 0){
    alert('The sum of the two numbers is even')
}else {
    alert('The sum of the two numbers is odd')
}

if(n1 == n2){
    alert('The two numbers entered are the same')
}else {
    alert('The two numbers entered are different')
}


