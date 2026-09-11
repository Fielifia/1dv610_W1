const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fs = require('node:fs')
const path = require('node:path')
let currentDirectory = process.cwd()



function showMenu() {
    console.log('|||=== RECIPE MENU ===|||')
    console.log('1. Starter')
    console.log('2. Main Course')
    console.log('3. Dessert')

    rl.question('Make your choice:', makeCourseChoice)
}

function makeCourseChoice(choice) {
    switch(choice.trim()) {
        case '1':
            console.log('Starter')
            showStarterMenu()
            break
        case '2':
            console.log('Main Course')
            showMainCourseMenu()
            break
        case '3':
            console.log('Dessert')
            showDessertMenu()
            break
    }
}
function makeDessertChoice(choice) {
    switch(choice.trim()) {
        case '1':
            console.log('Go back')
            showMenu()
            break
    }
}

function makeMainCourseChoice(choice) {
    switch(choice.trim()) {
        case '1':
            console.log('Go back')
            showMenu()
            break
    }
}
function makeStarterChoice(choice) {
    switch(choice.trim()) {
        case '1':
            console.log('Go back')
            showMenu()
            break
    }
}

function showStarterMenu() {
    console.log('|||=== STARTER MENU ===|||')
    console.log('1. Meat')
    console.log('2. Chicken')
    console.log('3. Fish')
    console.log('4. Veggie')
    console.log('5. Go back')

    rl.question('Make your choice:', makeStarterChoice)
}

function showMainCourseMenu() {
    console.log('|||=== MAIN COURSE MENU ===|||')
    console.log('1. Meat')
    console.log('2. Chicken')
    console.log('3. Fish')
    console.log('4. Veggie')
    console.log('5. Go back')

    rl.question('Make your choice:', makeMainCourseChoice)
}
function showDessertMenu() {
    console.log('|||=== DESSERT MENU ===|||')

    console.log('1. Go back')

    rl.question('Make your choice:', makeDessertChoice)
}

function goBack() {

}

showMenu()