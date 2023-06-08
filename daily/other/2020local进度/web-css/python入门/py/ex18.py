#命名、变量、代码和函数，创建函数
# this one is like your scripts with argv
def print_two(*args):#def创建了print_two的函数，以下缩进为函数定义
    arg1,arg2=args#*args是未解包参数，这一步是解包*号是将所有参数放到args列表中
    print(f"arg1:{arg1},arg2:{arg2}")

# ok,that *args is actually pointless,we can just do this
def print_two_again(arg1,arg2):#跳过解包动作，直接使用名称作为变量名
    print(f"arg1:{arg1},arg2:{arg2}")

# this just takes one argument
def print_one(arg1):
    print(f"arg1:{arg1}")

# this one takes no arguments
def print_none():
    print("I got nothin'.")


print_two("Zed","Shaw")
print_two_again("Zed","Shaw")
print_one("First!")
print_none()
