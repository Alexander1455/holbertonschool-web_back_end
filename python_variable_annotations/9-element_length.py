#!/usr/bin/env python3
"""
    Calculate the length of elements in a list and return them as tuples.

    Args:
        lst (List[str]): A list of strings.

    Returns:
        List[Tuple[str, int]]: A list of tuples where each
        tuple contains a string and its length.
    """
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    return [(i, len(i)) for i in lst]
