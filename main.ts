pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 0) {
        basic.setLedColor(0xff0000)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        basic.setLedColor(0x00ff00)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
