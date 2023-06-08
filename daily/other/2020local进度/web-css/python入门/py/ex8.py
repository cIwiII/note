#打印，打印
formatter="{} {} {} {}"

print(formatter.format(1,2,3,4))#为什么数字不用引号
print(formatter.format("one","two","there","four"))
print(formatter.format(True,False,False,True))#关键字符不用引号
print(formatter.format(formatter,formatter,formatter,formatter))
print(formatter.format(
    "Try your",
    "Own text here",
    "Maybe a poem",
    "Or a song about fear"
    ))
