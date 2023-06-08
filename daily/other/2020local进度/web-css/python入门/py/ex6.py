#字符串和文本
types_of_people=10
x=f"There are {types_of_people} types of people."

binary="binary"
do_not="don't"
y=f"There who know {binary} and those who {do_not}."

print(x)
print(y)

print(f"I said:{x}")
print(f"I also said:'{y}'")

hilarious=False#判定句，可以试着改为hilarious=True
joke_evaluation="Isn't that joke so funny？{}!"

print(joke_evaluation.format(hilarious))

w="There is the leftside of..."
e="a string with a right side."

print(w+e)
input()
