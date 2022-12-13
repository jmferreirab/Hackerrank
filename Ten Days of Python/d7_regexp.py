# pylint: disable=missing-module-docstring
import re


def match_start_end_same_vowel(s: str):
    patt = r"^([aeiou])(?:.*?\1)?$"
    return re.match(patt, s)


def test_match_start_end_same_vowel():
    assert match_start_end_same_vowel("ana") is not None
    assert match_start_end_same_vowel("arma") is not None
    assert match_start_end_same_vowel("zelenz") is None


test_match_start_end_same_vowel()
