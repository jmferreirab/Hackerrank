# pylint: disable=missing-module-docstring


class Rectangle:
    """A rectangle"""

    def __init__(self, w: int, h: int):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

    def perimeter(self):
        return 2 * self.w + 2 * self.h


class Square(Rectangle):
    """A square that inherits from Rectangle"""

    def __init__(self, side: int):
        super().__init__(side, side)


the_square = Square(11)
print(the_square.area())
print(the_square.perimeter())

the_rectangle = Rectangle(6, 11)
print(the_rectangle.area())
print(the_rectangle.perimeter())


def test_rectangle_area():
    r = Rectangle(6, 11)
    assert r.area() == 66


def test_rectangle_perimeter():
    r = Rectangle(6, 11)
    assert r.perimeter() == 34


def test_square_area():
    r = Square(11)
    assert r.area() == 121


def test_square_perimeter():
    r = Square(11)
    assert r.perimeter() == 44
