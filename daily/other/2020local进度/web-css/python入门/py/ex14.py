#提示和传递
from sys import argv#从软件包sysargv这个特性

script,user_name=argv
prompt='>'

print(f"Hi {user_name},I'm the {script} script.")
print("I'd like to ask you a few question.")
print(f"Do you like me {user_name}?")
likes=input(prompt)

print(f"Where do you live {user_name}?")
lives=input(prompt)

print("What kind of computer do you have?")
computer=input(prompt)

print(f"""
Alringht,so you said {likes} about liking me.
You live in {lives}.  Not sure where that is.
And you have a {computer} computer.  Nice.
""")
#argv  和  input()的区别，如果参数是用户执行命令时就要输入，那就用argv。
#如果是在脚本运行过程中需要用户输入就用input()
