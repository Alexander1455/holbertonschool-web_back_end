#!/usr/bin/env python3
""" A simple asynchronous coroutine. """
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Run multiple coroutines at the same time with async """
    var = [task_wait_n(max_delay) for i in range(n)]
    finish = [await task for task in asyncio.as_completed(var)]
    return finish
