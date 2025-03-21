distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.CENTIMETERS)
    if distance <= 10:
        # Move Backward (1 inch)
        # Right wheel backward
        pins.servo_write_pin(AnalogPin.P1, 180)
        # Left wheel backward
        pins.servo_write_pin(AnalogPin.P2, 0)
        # Move back for 300ms (~1 inch)
        basic.pause(300)
        # Turn Right
        # Right wheel stop
        pins.servo_write_pin(AnalogPin.P1, 180)
        # Left wheel forward
        pins.servo_write_pin(AnalogPin.P2, 180)
        # Turn right for 400ms
        basic.pause(400)
        # Move Forward Again
        # Right wheel forward
        pins.servo_write_pin(AnalogPin.P1, 0)
        # Left wheel forward
        pins.servo_write_pin(AnalogPin.P2, 180)
    else:
        # Move Forward Normally
        # Right wheel forward
        pins.servo_write_pin(AnalogPin.P1, 0)
        # Left wheel forward
        pins.servo_write_pin(AnalogPin.P2, 180)
basic.forever(on_forever)
