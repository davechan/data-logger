radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "z") {
        z = value
    } else if (name == "d") {
        d = value
    } else {
    	
    }
})
let d = 0
let z = 0
let y = 0
let x = 0
radio.setGroup(99)
basic.forever(function () {
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("z", z)
    serial.writeValue("d", d)
})
