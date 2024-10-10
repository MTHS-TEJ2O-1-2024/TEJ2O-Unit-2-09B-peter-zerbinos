/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program runs Rock, Paper, Scissors
*/

// variables
let randomNumber: number = 0
let scoreNumber = 0

//setup
randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//rock paper scissors after shake

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
        basic.pause(3000)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
        basic.pause(3000)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
        basic.pause(3000)
    }

    // pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

//score adder (A button)
input.onButtonPressed(Button.A, function() {
    scoreNumber = scoreNumber + 1
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})

//score viewer (B button)
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('Score: ' + (scoreNumber).toString())
    basic.showIcon(IconNames.Happy)
})
