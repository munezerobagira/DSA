T=int(input())
for i in range(T):
    n= input()
    counter=0
    for digit in list(n):
        if(digit=='4'):
            counter=counter+1
    print(counter)