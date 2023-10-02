#!/usr/bin/env python3
""" Let's execute multiple coroutines at the same time with async """
import asyncio
from typing import List
import random

task_wait_random = __import__('0-basic_async_syntax').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Function that returns the list """
    tasks = [asyncio.create_task(task_wait_random(max_delay)) for _ in range(n)]
    completed_tasks = await asyncio.gather(*tasks)
    return completed_tasks
