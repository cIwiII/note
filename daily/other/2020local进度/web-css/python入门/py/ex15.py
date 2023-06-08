#读取文件
from sys import argv#从sys模板软件包库中调用模板argv

script,filename=argv#给模板argv输入参数，运行时输入文件名

txt=open(filename)#打开文件，如果没有打开方式就是默认read只读模式

print(f"Here's your file {filename}:")#询问是否是打开这个文件
print(txt.read())#打开的方式是读取，无需任何参数


print("Type the filename again:")#再次输入要打开的文件名的提示
file_again=input(">")#输入文件名

txt_again=open(file_again)#脚本执行打开

print(txt_again.read())#打开方式为读取

#命令也叫函数(function)和方法(method)
