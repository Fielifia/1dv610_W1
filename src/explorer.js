const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const recipes = {
    starter: {
        meat: {

        },

        fish: {

        },

        chicken: {

        },

        veggie: {

        },
    },

    mainCourse: {
        meat: {

        },

        fish: {

        },

        chicken: {

        },

        veggie: {

        },
    },

    dessert: {

    }
}

function showMenu() {
    console.log('|||=== RECIPE MENU ===|||')
    console.log('1. Starter')
    console.log('2. Main Course')
    console.log('3. Dessert')

    rl.question('Make your choice:', makeChoice)
}

function makeChoice(choice) {
    switch(choice.trim()) {
        case '1':
            console.log('Starter')
            showMenu()
            break
        case '2':
            console.log('Main Course')
            showMenu()
            break
        case '3':
            console.log('Dessert')
            showMenu()
            break
    }
}

showMenu()