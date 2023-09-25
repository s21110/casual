input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # . .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # . . # .
        . # . # .
        . # # # .
        # . . . #
        `)
})
