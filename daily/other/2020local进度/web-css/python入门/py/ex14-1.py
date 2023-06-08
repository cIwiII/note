#提示和传递
from sys import argv#从软件包sysargv这个特性

script,user_name=argv
prompt='>'

print(f"嗨 {user_name},我是{script}智能数据库，目前在收集一些个人基本信息.")
print("你可以回答我一些问题吗？方便记录在案")
print(f"你是{user_name}?")
likes=input(prompt)

print(f"{user_name}你目前是居住在哪里呢?")
lives=input(prompt)

print("你家里面共计有多少台电脑呢?")
computer=input(prompt)

print(f"""
总结,您{likes}{user_name}先生.
目前您居住家在{lives}..
大概共计有{computer}台电脑.  对吗，感谢您的支持.
""")
