#读写文件，以下为一个简单的三行 文本编辑器
#close:（保存后）关闭文件。
#read:读取文件内容，可以赋值给一个变量
#readline:只读取文本中的一行
#truncate:清空文件，小心使用
#write('stuff');将“stuff”写入文件
#seek(0):将读写位置移到文件开头
from sys import argv

script,filename=argv#输入本脚本名和即将要创建的文件名

print(f"We're going to erase {filename}.")
print("If you don't want that, hit CTRL-C(^C).")
print("If you do want that, hit RETURN.")

input("?")#没有输入就空白回车就行

print("Opening the file...")#打开文件中——提示语
target=open(filename,'w')#打开方式为写入

print("Truncatiing the file.  Goodbye!")
target.truncate()#已经打开的文件，执行清空文件，在'w'模式下可以不需要本行

print("Now I'm going to ask you for three lines.")#现在写入三行文本内容

line1=input("line1:")#打印提示语，写入文本
line2=input("line2:")
line3=input("line3:")

print("I'm going to write threse to the file.")

target.write(line1)#target代表已经打开的文件实例，写入文本
target.write("\n") #试着用一个target.write()将line123打印出来，替换原来6行
target.write(line2)
target.write("\n")
target.write(line3)
target.write("\n")

print("And finally,we close it.")
target.close()#保存并关闭文件
