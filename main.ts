input.onButtonPressed(Button.A, function () {
    Vitesse = -20
    Vitesse_Neg = -12
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    Vitesse = 0
    Vitesse_Neg = 0
})
let Vitesse_Neg = 0
let Vitesse = 0
Vitesse = 0
Vitesse_Neg = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 1000 && pins.analogReadPin(AnalogReadWritePin.P2) < 1000) {
        wuKong.setAllMotor(Vitesse, Vitesse)
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 1000 && pins.analogReadPin(AnalogReadWritePin.P2) < 1000) {
        wuKong.setAllMotor(0, Vitesse_Neg)
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 1000 && pins.analogReadPin(AnalogReadWritePin.P2) >= 1000) {
        wuKong.setAllMotor(Vitesse_Neg, 0)
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 1000 && pins.analogReadPin(AnalogReadWritePin.P2) >= 1000) {
        wuKong.setAllMotor(0, 0)
    }
})
