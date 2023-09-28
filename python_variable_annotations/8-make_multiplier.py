#!/usr/bin/env python3
from typing import Callable
"""
    Create and return a multiplier function.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that takes a float 
        and returns its product with the multiplier.
    """


def make_multiplier(multiplier: float) -> Callable[[float], float]:

    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function
