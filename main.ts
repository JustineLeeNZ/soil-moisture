let reading = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        basic.showIcon(IconNames.Umbrella)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    basic.pause(5000)
})
