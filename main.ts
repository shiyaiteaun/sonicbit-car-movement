let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (distance <= 5) {
        // Stop motors first
        // Right wheel stop
        pins.servoWritePin(AnalogPin.P1, 90)
        // Left wheel stop
        pins.servoWritePin(AnalogPin.P2, 90)
        // Display "AWAKEN" using LEDs (stays on screen)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            `)
        // Move Backward while "AWAKEN" is displayed
        // Right wheel backward
        pins.servoWritePin(AnalogPin.P1, 180)
        // Left wheel backward
        pins.servoWritePin(AnalogPin.P2, 0)
        // Move back for 300ms (~1 inch)
        basic.pause(300)
        // Turn Right while still displaying "AWAKEN"
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
        // Clear the screen after avoidance
        basic.clearScreen()
    } else {
        // Move Forward Normally
        // Right wheel forward
        pins.servoWritePin(AnalogPin.P1, 0)
        // Left wheel forward
        pins.servoWritePin(AnalogPin.P2, 180)
    }
})
