# pylint: disable=missing-module-docstring


def get_second_largest(nums: list):
    nums.sort(key=int)
    index_max = nums.index(nums[-1])
    return nums[index_max - 1]


print(get_second_largest([10, 1, 2, 80, 8, 18, 3, 6, 71, 71, 80]))
print(get_second_largest([1]))


def reverse_string(s: str) -> str:
    # return "".join(s[i] for i in range(len(s)-1, -1, -1))
    return s[::-1]


def is_positive(a: int):
    if a > 0:
        return "YES"
    elif a == 0:
        raise Exception("Zero Error")

    raise Exception("Negative Error")


print(reverse_string("manu"))
