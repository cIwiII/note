#循环和列表,[表示打开列表
the_count=[1,2,3,4,5]
fruits=['apples','oranges','pears','apricots']
change=[1, 'pennies', 2,'dimes', 3,'quarters']

# 第一种 for 循环通过一个列表
#this first kind of for-loop goes through a list
for number in the_count:#    for i in b  ，表示数据b循环格式化赋值给语句中的i
    print(f"This is count {number}")

# 和上面一样same as above
for fruit in fruits:
    print(f"A  fruit of type: {fruit}")

#我们还可以查看混合名单,also we can goo through mixed lists too
#注意我们必须使用{}因为我们不知道里面有什么
#notice we have to use {} since we don't know what's in it
for i in change:
    print(f"I got {i}")

#我们也可以建立一个列表，先从一个空的开始
#we can also build lists, first start wth an empty one
elements=[]

#然后使用 range 函数进行0到5次计数
#then use the range function to do 0 to 5 counts
for i in range(0,6):
    print(f"Addinng {i} to the list.")
    #Append 是一个列表可以理解的函数append is a function that lists understand
    elements.append(i)

#现在我们也可以把它们打印出来now we can print them out too
for i in elements:
    print(f"Element was: {i}")
