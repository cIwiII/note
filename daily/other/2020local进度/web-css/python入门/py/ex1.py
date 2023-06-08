#第一个程序，输出
print("hello world!")
print("hello again")
print("I like typing this.")
print("This is fun.")
print('yay! Printing.')
print("I'd much rather you 'not'.")
print('I "said" do not touch this.')
#只打印其中一行，如第二行为cat fie|head -2|tail -6   -6为倒数第六
#第二种cat file| sed -n'2{p;q}'
#第三种cat file |awk 'NR==2'
input("please Enter结束或关闭")
