input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 30) {
        basic.showNumber(input.temperature())
        basic.showString("T.alta")
    }
    while (input.temperature() < 8) {
        basic.showNumber(input.temperature())
        basic.showString("T.baja")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showIcon(IconNames.Sad)
    }
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showIcon(IconNames.Sad)
    }
})
