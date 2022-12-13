# pylint: disable=missing-module-docstring
import sys

def factorial(n: int) -> int:
    if n == 1:
        return 1

    return factorial(n - 1) * n

def main():
    if len(sys.argv) == 2:
        user_input = list(sys.argv)
        user_input_1 = int(user_input[1])
        print(str(factorial(user_input_1)))
    else:
        print("User must provide a parameter")


if __name__ == "__main__":
    main()
