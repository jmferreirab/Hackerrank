""" 10 days of Javascript problem adapted to python.

    Statement: Modify and return the array so that all even
    elements are doubled and all odd elements are tripled.
    You must use arrow functions.

    Note that python does not have arrow functions.
    Lambdas with list comprehension are fairly close yet not the same.
 """


def double_evens_triple_odds(elements):
    """Even elements are doubled and all odd elements are tripled"""

    # pylint: disable-next=unnecessary-lambda-assignment
    lambda_func = lambda x: x * 2 if x % 2 == 0 else x * 3
    return [lambda_func(x) for x in elements]


print(double_evens_triple_odds([1, 2, 3, 4]))
