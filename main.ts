input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
music.playMelody("C5 D B E G A F C5 ", 120000)
music.playMelody("C5 C C5 C C5 C C5 C ", 120)
basic.forever(function () {
    basic.showNumber(69)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showNumber(2)
    basic.showString("love u jacob <333")
    basic.showString("you and i <33")
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Silly)
    if (false) {
        basic.showString("slay")
    } else {
        led.plot(4, 4)
    }
})
