// When button A is pressed, display a happy face for a second, then go back to sleep.
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Asleep)
})
// When button B is pressed, display a sad face for a second, then go back to sleep.
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showIcon(IconNames.Asleep)
})
// Initialize micro:bit with a sleeping face.
basic.showIcon(IconNames.Asleep)
