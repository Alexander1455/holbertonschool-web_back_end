#!/usr/bin/env python3
"""
Calculate the sum of floats in a list.

Args:
    input_list (List[float]): A list of floating-point numbers.

Return:
    float: The sum of the numbers in the input list.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    return sum(input_list)
