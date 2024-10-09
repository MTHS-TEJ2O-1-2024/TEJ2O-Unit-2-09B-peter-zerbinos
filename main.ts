/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program runs Rock, Paper, Scissors
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

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