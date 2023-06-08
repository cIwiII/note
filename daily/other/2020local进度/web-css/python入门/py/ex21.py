#函数可以返回某些东西，创建数学运算函数展示。
def add(a,b):
    print(f"ADDING {a}+{b}")#函数功能，显示参数，以及结果
    return a+b#return返回值

def subtract(a,b):
    print(f"SUBTRACTING {a}-{b}")
    return a-b

def multiply(a,b):
    print(f"MULTIPLYIING {a}*{b}")
    return a*b

def divide(a,b):
    print(f"DIVIDIING {a}/{b}")
    return a/b


print("Let's do some math with just function!")

age=add(30,5)
height=subtract(78,4)
weight=multiply(90,2)
iq=divide(100,2)

print(f"Age: {age},Height: {height},Weight: {weight},IQ:{iq}")


#A puzzle for the extra,type it in anyway.
print("Here is a puzzle.")

what=add(age,subtract(height,multiply(weight,divide(iq,2))))

print("That becomes:",what,"can you do it by hand?")
