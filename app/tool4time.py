from datetime import datetime, timedelta, timezone, date
import os

from tool4log import logger

tz = timezone(timedelta(hours=+8))


def is_time_debug() -> bool:
    return os.path.exists("database/time.debug")


def debug_time() -> str:
    with open("database/time.debug") as f:
        return f.readline()


def now() -> datetime:
    if is_time_debug():
        return datetime.strptime(debug_time(), "%Y-%m-%d %H:%M:%S").astimezone(tz)
    else:
        return datetime.now().astimezone(tz)


def now_str() -> str:
    return now().strftime("%Y-%m-%d %H:%M:%S")


def now_stamp() -> float:
    return now().timestamp()


def today() -> datetime:
    return now().today()


def this_year_str() -> str:
    return now().strftime("%Y")


def get_datetime_from_str(time: str) -> datetime:
    return datetime.strptime(time, '%Y-%m-%d %H:%M:%S').astimezone(tz)


def get_day_from_str(time: str) -> date:
    return get_datetime_from_str(time).date()


def get_timestamp_from_str(time: str) -> float:
    return datetime.timestamp(get_datetime_from_str(time))


# ################################# API For Server ################################# #


def parse_deadline_str(date_str: str) -> str:
    """解析截止日期的字符串, 将其转化为时间类型"""
    if ":" in date_str:
        time_pattern = "%Y.%m.%d:%H"
    else:
        time_pattern = "%Y.%m.%d"
    this_year = datetime.strptime(f"{now().year}.{date_str}", time_pattern)
    next_year = datetime.strptime(f"{now().year + 1}.{date_str}", time_pattern)
    if now() < this_year:
        return this_year.strftime("%Y-%m-%d %H:%M:%S")
    else:
        return next_year.strftime("%Y-%m-%d %H:%M:%S")


def is_work_time():
    # weekday返回的范围是0~6, 且周一返回0
    return 9 <= now().hour < 18 and 0 <= now().weekday() <= 4


if is_time_debug():
    # 对是否开启时间的DEBUG模式进行检测, 并给出警告
    logger.warning(f"Time API is in DEBUG mode and now is {now_str()}")

if __name__ == '__main__':
    delta = get_datetime_from_str("2020-2-13 12:00:00") - get_datetime_from_str("2020-2-14 12:00:00")
    print(delta.total_seconds())
