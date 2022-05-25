//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
/*add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

shoppingCart.unshift('meat')
console.log(shoppingCart)



shoppingCart.push('sugar')
console.log(shoppingCart)




shoppingCart.push()
console.log(shoppingCart)



shoppingCart.splice(3,3)
console.log(shoppingCart)



shoppingCart.splice(2, 1, "Green Tea")
console.log(shoppingCart)


