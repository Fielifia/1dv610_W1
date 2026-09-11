const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fs = require('node:fs')
const path = require('node:path')
let currentDirectory = process.cwd()

function showCategoryMenu(title, categories, handleChoice) {
    console.log(`|||=== ${title} MENU ===|||`)

    categories.forEach((category, index) => {
        console.log(`${index + 1}. ${category}`)
    })

    console.log(`${categories.length + 1}, Go back`)

    rl.question('Make your choice: ', handleChoice)
}


function showMenu() {
    showCategoryMenu(
        'MAIN',
        ['Starter', 'Main Course', 'Dessert'],
        makeStarterChoice,
    )
}

function showStarterMenu() {
    showCategoryMenu(
        'STARTER',
        ['Meat', 'Chicken', 'Fish', 'Veggie'],
        makeStarterChoice
    )
}

function showMainCourseMenu() {
    showCategoryMenu(
        'MAIN COURSE',
        ['Meat', 'Chicken', 'Fish', 'Veggie'],
        makeMainCourseChoice
    )
}

function showDessertMenu() {
    showCategoryMenu(
        'DESSERT',
        ['Ice Cream', 'Cake', 'Pie'],
        makeDessertChoice
    )
}

function makeStarterChoice(choice) {
    switch (choice.trim()) {
    case '1':
        console.log('Go back')
        showMenu()
        break
    }
}



function makeCourseChoice(choice) {
    switch (choice.trim()) {
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


function makeMainCourseChoice(choice) {
    switch (choice.trim()) {
    case '1':
        console.log('Go back')
        showMenu()
        break
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
    switch (choice.trim()) {
    case '1':
        console.log('Go back')
        showMenu()
        break
    }
}

function goBack() { }

showMenu()
