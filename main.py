def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.SAD)
    basic.pause(1000)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.ASLEEP)