let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (distance <= 2) {
        // Move Backward
        // Right wheel backward
        pins.servoWritePin(AnalogPin.P1, 180)
        // Left wheel backward
        pins.servoWritePin(AnalogPin.P2, 0)
        // Move back for 300ms
        basic.pause(300)
        // Stop
        // Right wheel stop
        pins.servoWritePin(AnalogPin.P1, 90)
        // Left wheel stop
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(100)
        // Turn Right
        // Right wheel stop
        pins.servoWritePin(AnalogPin.P1, 180)
        // Left wheel forward
        pins.servoWritePin(AnalogPin.P2, 180)
        // Turn right for 400ms
        basic.pause(400)
        // Move Forward Again
        // Right wheel forward
        pins.servoWritePin(AnalogPin.P1, 0)
        // Left wheel forward
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        // Right wheel forward
        pins.servoWritePin(AnalogPin.P1, 0)
        // Left wheel forward
        pins.servoWritePin(AnalogPin.P2, 180)
    }
})
