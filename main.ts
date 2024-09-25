input.onPinTouchEvent(TouchPin.P0, input.buttonEventValue(ButtonEvent.Up), function () {
    basic.setLedColor(0xff0000)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventValue(ButtonEvent.Down), function () {
    basic.setLedColor(0x00ff00)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
pins.setEvents(DigitalPin.P0, PinEventType.Edge)
