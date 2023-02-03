"""
Christian Mora
activity 18: while loop and for loop
Feb 2, 2023
"""

#example 1
print('---------- Example 1: continuing using while loop -----------')
i = 0
while i<6:
    print('i = ',i)
    i+=1
# example 2
print('-------- Example 2: check point using while loop ---------')
number = int(input('Enter a number between 0 and 10: '))
#create a while ask the user to enter a number if the number is not between 0 and 10
while number<0 or number>10:
    number = int(input('You must enter a number between 0 and 10: '))

print('Entered number = ', number)
# example 3: print odd numbers between 12 and 30
print('--------- Example 3: nest if statement in a while loop ----------')
y = 12
while y<30:
    if y%2 !=0:
        print('y = ', y)
    y+=1
# optional way to write example 3 using the continue keyboard
y = 12
while y<30:
    y+=1
    if y%2 ==0:
        continue
    print('again = ', y)

#example 4: e;se statement in a while loop
print('------ Example 4: else statement in a while loop --------')
m = 10
while m>0:
    print('m = ', m)
    m-=1
else:
    print('Happy New Year!')

#example 5
print("--------- Example 5: while loop ---------")
number1 = int(input('Enter number 1 = '))
number2 = int(input('Enter number 2 = '))
add = number1+number2
while add<=30:
    number1 +=1
    number2 +=2
    add = number1+number2
    if add>=30:
        break
    print('number 1 = ', number1), ', number 2 = ', number2, ', sum = ', add

print('OUTSIDE! number 1 = ', number1, ', number 2 = ', number2, ', sum = ', add)
# example 6
print('------ Example 6: math built in function -------')
import math
radius = int(input('Enter a radius: '))
area = math.pow(radius,2)*math.pi
area = round(area,2)
print('The area with radius %s is %s ' %(radius,area))

def example7():
    print('---------- Example 7 --------')
    print('Define function')

example7()

def example8(name):
        print('---------- Example 8 --------')
        print('Welcomee to functions %s'  %(name))

example8(23)

def example9(num1,num2):
    print('---------- Example 9 --------')
    total = num1 + num2
    return total

n1 = int(input('Enter num1 = '))
n2 = int(input('Enter num2 = '))
ex9_result = example9(n1,n2)
print('The sum of %s and %s is %s' %(n1,n2,ex9_result))

def is_divisible(x,y):
    print('-------- Example 10 ----------')
    if x%y ==0:
        return True
    else:
        return False
print('is %s and %s divisible? %s' %(n1,n2, is_divisible(n1,n2))) 


