#!/usr/bin/env python3
"""
Args:
    multiplier (float): The multiplier value.

Returns:
    Callable[[float], float]: A function that takes a float
    and returns its product with the multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create and return a multiplier function"""
    def multiplier_function(x: float) -> float:
        """The multiplier value"""
        return x * multiplier

    return multiplier_function
