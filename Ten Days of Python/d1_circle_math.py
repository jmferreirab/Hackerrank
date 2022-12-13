# pylint: disable=missing-module-docstring
import sys
import math

PI = math.pi


def perimeter(radius: float) -> float:
    return 2 * PI * radius


def area(radius: float) -> float:
    return radius**2 * PI


def main():
    if len(sys.argv) == 2:
        user_input = list(sys.argv)
        radius = int(user_input[1])
        print(str(perimeter(radius)))
        print(str(area(radius)))
    else:
        print("User must provide a parameter")


if __name__ == "__main__":
    main()
