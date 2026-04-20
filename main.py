def on_button_pressed_a():
    global Rocket_pos
    if Rocket_pos > 0:
        led.toggle(Rocket_pos, 4)
        Rocket_pos += -1
        led.toggle(Rocket_pos, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Rocket_pos
    if Rocket_pos < 4:
        led.toggle(Rocket_pos, 4)
        Rocket_pos += 1
        led.toggle(Rocket_pos, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

astroid_pos_x = 0
astroid_pos_y = 0
Rocket_pos = 0
rocket_speed_1 = 550
rocket_speed_2 = 100
led.toggle(2, 4)
Rocket_pos = 2

def on_every_interval():
    global astroid_pos_y, astroid_pos_x, rocket_speed_2
    astroid_pos_y = 0
    astroid_pos_x = randint(0, 4)
    led.toggle(astroid_pos_x, astroid_pos_y)
    if rocket_speed_2 < 30:
        rocket_speed_2 += -30
loops.every_interval(rocket_speed_1, on_every_interval)

def on_every_interval2():
    global rocket_speed_2
    if astroid_pos_y == 4 and astroid_pos_x == Rocket_pos:
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
loops.every_interval(rocket_speed_2, on_every_interval2)

def on_every_interval3():
    global astroid_pos_y
    led.toggle(astroid_pos_x, astroid_pos_y)
    astroid_pos_y += 1
    led.toggle(astroid_pos_x, astroid_pos_y)
loops.every_interval(rocket_speed_2, on_every_interval3)
