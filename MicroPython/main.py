"""
Created by: Peter Zerbinos
Created on: Oct 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import sleep
import random

# variables
random_number = -1
score_number = 0

# rock paper scissors after shake
while True:
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 2)

    # if randomNumber was 0
    if random_number == 0:
        display.clear()
        display.show_leds(
            """
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """
        )
        sleep(5)
    