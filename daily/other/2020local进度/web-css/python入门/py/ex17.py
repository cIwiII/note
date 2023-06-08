#更多文件操作，将一个文件内容复制到另一个文件
from sys import argv
from os.path import exists#导入exists,其作用是将字符串作为参数，有则true,无false

script,from_file,to_file=argv

print(f"Copying from {from_file} to {to_file}")

#we could do these two on one line,how?
in_file=open(from_file)#打开原文件
indata=in_file.read()#读取原文件内容，通常read()执行完就会被关闭

print(f"The input file is {len(indata)} bytes long")

print(f"Does the output file exist? {exists(to_file)}")
print("Ready,hit RETURN to continue,CTRL-C to abort.")
input()

out_file=open(to_file,'w')#打开另一个空白文件，即将写入
out_file.write(indata)#写入

print("Alright,all done.")

out_file.close()#关闭两个文件
in_file.close()

##first make a sample file
##echo "this is a file.">ex16.txt
##查看文件
##cat ex16.txt
#This is a file
