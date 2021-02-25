basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("O2")
    } else {
        basic.showString("CO2")
    }
})
