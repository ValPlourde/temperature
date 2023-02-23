let Température = 0
basic.forever(function () {
    Température = input.temperature()
    basic.showNumber(Température)
    basic.pause(1000)
})
