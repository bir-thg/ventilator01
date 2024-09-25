pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    basic.setLedColor(0x00ff00)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    basic.setLedColor(0xff0000)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
basic.forever(function () {
	
})
