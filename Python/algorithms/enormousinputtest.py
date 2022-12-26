n, k=map(int, input().split())
counter=0
for temp in range(n):
    t=int(input())
    if(t%k==0):
        counter=counter+1
print(counter)