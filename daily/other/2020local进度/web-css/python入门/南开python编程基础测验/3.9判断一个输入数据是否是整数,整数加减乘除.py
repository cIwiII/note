#用户输入两个数据，如果两个数据都是整数（即都由数字组成），则输出其减法运
#算结果；如果两个数据都不是整数，则将这两个数据作为两个字符串、输出这两个字
#符串连接的结果；如果一个数据不是整数、另一个数据是整数，则将不是整数的数据
#作为字符串、输出字符串和整数重复运算的结果。要求判断一个输入数据是否是整数
#的功能用函数实现。
def isInteger(x):
    for c in x:
        if c<'0' or c>'9':
            return False
    return True

s1 = input()
s2 = input()
i1 = isInteger(s1)
i2 = isInteger(s2)
if i1==True and i2==True:
    print(int(s1)-int(s2))
elif i1==False and i2==False:
    print(s1+s2)
elif i1==True and i2==False:
    print(s2*int(s1))
else:
    print(s1*int(s2))
