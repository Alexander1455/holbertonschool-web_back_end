#!/usr/bin/env python3
"""
    Create a tuple with the string k and the square of the int/float v.

    Args:
        k (str): A string.
        v (Union[int, float]): An integer or floating-point number.

    Returns:
    Tuple[str, float]: A tuple containing k and the square of v as a float.
    """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:

    return (k, float(v ** 2))
