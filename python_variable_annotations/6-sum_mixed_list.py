#!/usr/bin/env python3
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of integers and floats in a mixed list.

    Args:
        mxd_lst (List[Union[int, float]]): 
        A list of integers and floating-point numbers.

    Returns:
        float: The sum of the numbers in the mixed list.
    """
    return sum(mxd_lst)
