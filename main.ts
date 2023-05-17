let a = 0
let b = 0
let c = 0
basic.forever(function () {
    a = input.acceleration(Dimension.X)
    b = input.acceleration(Dimension.Y)
    c = input.acceleration(Dimension.Z)
    basic.showString("a=" + a)
    basic.showString("b=" + b)
    basic.showString("c=" + c)
    basic.pause(5000)
})
