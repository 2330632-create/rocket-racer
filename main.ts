input.onButtonPressed(Button.A, function () {
    if (Rocket_pos > 0) {
        led.toggle(Rocket_pos, 4)
        Rocket_pos += -1
        led.toggle(Rocket_pos, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Rocket_pos < 4) {
        led.toggle(Rocket_pos, 4)
        Rocket_pos += 1
        led.toggle(Rocket_pos, 4)
    }
})
let astroid_pos_x = 0
let astroid_pos_y = 0
let Rocket_pos = 0
led.toggle(0, 1)
led.toggle(0, 0)
let rocket_speed_1 = 550
let rocket_speed_2 = 100
led.toggle(2, 4)
Rocket_pos = 2
loops.everyInterval(rocket_speed_2, function () {
    if (astroid_pos_y == 4 && astroid_pos_x == Rocket_pos) {
        rocket_speed_2 = 500
        led.toggle(0, 0)
        led.toggle(4, 0)
        led.toggle(1, 0)
        led.toggle(3, 0)
        led.toggle(4, 1)
        led.toggle(0, 1)
        basic.pause(100)
        led.toggle(0, 0)
        led.toggle(4, 0)
        led.toggle(1, 0)
        led.toggle(3, 0)
        led.toggle(4, 1)
        led.toggle(0, 1)
    }
})
loops.everyInterval(rocket_speed_2, function () {
    led.toggle(astroid_pos_x, astroid_pos_y)
    astroid_pos_y += 1
    led.toggle(astroid_pos_x, astroid_pos_y)
})
loops.everyInterval(rocket_speed_1, function () {
    astroid_pos_y = 0
    astroid_pos_x = randint(0, 4)
    led.toggle(astroid_pos_x, astroid_pos_y)
    if (rocket_speed_2 < 30) {
        rocket_speed_2 += -30
    }
})
