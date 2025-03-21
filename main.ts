let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (distance <= 10) {
        // Display "AWAKEN" on the screen
        basic.showString("AWAKEN")
        // Move Backward (1 inch)
        // Right wheel backward
        pins.servoWritePin(AnalogPin.P1, 180)
        // Left wheel backward
        pins.servoWritePin(AnalogPin.P2, 0)
        // Move back for 300ms (~1 inch)
        basic.pause(300)
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
        // Display "AWAKEN" on the screen
        basic.showString("AWAKEN")
        // Move Forward Normally
        // Right wheel forward
        pins.servoWritePin(AnalogPin.P1, 0)
        // Left wheel forward
        pins.servoWritePin(AnalogPin.P2, 180)
    }
})
