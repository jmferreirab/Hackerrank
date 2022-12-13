"""
# https://www.hackerrank.com/challenges/js10-switch
# https://www.hackerrank.com/challenges/js10-loops

"""


def first_of_set(s: str):
    letter = s[0]
    result = None

    if letter in "aeiou":
        result = "A"
    elif letter in "bcdfg":
        result = "B"
    elif letter in "hjklm":
        result = "C"
    elif letter in "npqrstvwxyz":
        result = "D"

    return result


def vowels_and_consonants(s: str):

    vowels = []
    consonants = []

    for letter in s:
        if letter in "aeiou":
            vowels.append(letter)
        else:
            consonants.append(letter)

    for el in vowels + consonants:
        print(el)

    return


vowels_and_consonants("manuel")
