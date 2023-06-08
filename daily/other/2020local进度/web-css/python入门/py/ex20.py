#函数和文件
from sys import argv

sccript,input_file=argv

def print_all(f):#打印读取文件
    print(f.read())

def rewind(f):#读写位置移动到开头
    f.seek(0)

def print_a_line(line_count,f):#打印文件的某一行
    print(line_count,f.readline())#readline()扫描文件每个字节，直到
    #找到一个\n并返回此前发现的内容即为一行

current_file=open(input_file)

print("First let's print the whole file:\n")

print_all(current_file)#打印目标(即current_file)打开的执行文件(open(input_file))

print("Now let's rewind, kind of like a tape.")

rewind(current_file)#将读写位置移动到打开文件的开头

print("Let's print three lines:")

current_line=1#打印序号
print_a_line(current_line,current_file)#打印current_file执行的和序号相同行

current_line=current_line+1
print_a_line(current_line,current_file)

current_line=current_line+1
print_a_line(current_line,current_file)


#有多的间隔空行，是因为readline()返回的文本中本来有空行，print()打印时又
#会添加一个\n，解决的办法是print(a.end"")这样就不会多打印一个\n了。
