input.onButtonPressed(Button.A, function () {
    led.toggle(Rocket_pos, 4)
    Rocket_pos += -1
    led.toggle(Rocket_pos, 4)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(Rocket_pos, 4)
    Rocket_pos += 1
    led.toggle(Rocket_pos, 4)
})
let astroid_pos_x = 0
let astroid_pos_y = 0
let Rocket_pos = 0
Rocket_pos = 2
led.toggle(Rocket_pos, 4)
loops.everyInterval(1500, function () {
    astroid_pos_y = 0
    astroid_pos_x = randint(0, 4)
    led.toggle(astroid_pos_x, astroid_pos_y)
})
loops.everyInterval(200, function () {
    led.toggle(astroid_pos_x, astroid_pos_y)
    astroid_pos_y += 1
    led.toggle(astroid_pos_x, astroid_pos_y)
})
