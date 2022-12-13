""" Objects practice """


def generate_rectangle(a, b):
    return dict(length=a, width=b, perimeter=2 * (a + b), area=a * b)


def get_count(objects):

    filtered = [o for o in objects if o["x"] == o["y"]]
    return len(filtered)


def test_generate_rectangle():
    user_rect = generate_rectangle(2, 3)
    assert user_rect["area"] == 6
    assert user_rect["length"] == 2
    assert user_rect["width"] == 3
    assert user_rect["perimeter"] == 10


def test_get_count():
    data = [
        {"x": 1, "y": 1},
        {"x": 1, "y": 1},
        {"x": 3, "y": 3},
        {"x": 1, "y": 4},
    ]
    assert get_count(data) == 3


test_get_count()
test_generate_rectangle()


class Polygon:
    """Barebones polygon with simple perimeter calculation"""

    def __init__(self, sides) -> None:
        self.sides = sides

    def perimeter(self):
        return sum(self.sides)


def test_polygon_perimeter():
    u_rectangle = Polygon([10, 20, 10, 20])
    square = Polygon([10, 10, 10, 10])
    pentagon = Polygon([10, 20, 30, 40, 43])
    assert u_rectangle.perimeter() == 60
    assert square.perimeter() == 40
    assert pentagon.perimeter() == 143


test_polygon_perimeter()
