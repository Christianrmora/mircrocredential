"""
Christian Mora
dsy 17 - intro to Python
Monday, Jan 30
"""
#Example using the print() function
print('Christian Mora')
print('----- example 1 -------')
name = 'Peter Pan'
number = 2.5
print('My name is: ',name, 'and my lucky number is: ', number)
# example using input() function
print('--------- example 2---------')
lastName = input('Enter a last name: ')

num1 = int(input('Enter a  number: '))
print('Last name = ',lastName, ' \n Enter number = ',num1, '\n The double of the number is = ', num1*2)
print('-------- example 3 -----------')
h = float(input('Enter a height: '))
w= float(input('Enter a width: '))
hyp= (h**2 + w**2)**0.5
print('Hypotenuse= ', hyp)


print('\n-------- example 4 --------\n')
#assign a value
number1 = 8
print('Number = ', number1)
#self add =+
number1 += 3
print('Self add= ', number1)
# self subtraction
number1 -= 5
print('Self Subtract= ', number1)
number1 %= 4
print('Remainder after the division with 4 = ', number1)
# %s using market on print()
print('The height = %s and width = %s. The calculations for the hypotenuse is %s ' %(h,w,hyp)) 



print('\n-------- example 5 ------------\n')
# find  character in a string using index
msg = 'Queensborough'
# print the 3rd and 7th character in string msg
print('The 3rd character is= ', msg[2])
print('The 7th character is = ', msg[6])
# slice in a string
print('From the 5th to the 10th character: ', msg[4:9])
lenMsg = len(msg)
print('The length is = ',lenMsg)
# upper() method
msgUpper = msg.upper()
print(msgUpper)
# replace () method
msgReplace = msg.replace('e','$')
print(msgReplace)
# in operator
msgIn = 'n' in msg
print('Is n in the mesdsage?',msgIn)

print('\n-------- example 6 ------------\n')
# create list of animals
animals = ['cat','dog','parrot','fish','rat']
print('2nd animal = ', animals[1])
# delete the 3rd item in the list
del animals[4]
print(animals)
# asks the user to input an animal. The new animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
print(animals)





































print('\n-------- CLASS ACTIVITY --------\n')
radius = float(input('Enter the radius: '))
height = float(input('Enter the height: '))
area = (3.1416 + (radius**2))
circum = (2*3.1416*radius)
volume = (area*height)
print('Area = ', area,'Circumfrance = ',circum, 'Volume = ', volume)

