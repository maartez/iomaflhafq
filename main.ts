input.onButtonPressed(Button.A, function () {
    slang.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    slang.turn(Direction.Right, 90)
})
let slang: game.LedSprite = null
slang = game.createSprite(1, 2)
basic.forever(function () {
    slang.move(1)
    basic.pause(2000)
})
