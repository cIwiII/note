#11提问
print("How old are you?",end=' ')
age=input()#iput()为等待待用户输入的内容，x=int(input())将input()的值换位整数
print("How tall are you?",end=' ')#加end=' '意思为告诉python不用换行跑到下一行
height=input()
print("How much do you weight?",end=' ')
weight=input()

print(f"So,you're {age} old,{height} tall and {weight} heavy.")
