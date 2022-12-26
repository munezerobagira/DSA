T=int(input())
for i in range(T):
    idata=int(input())
    sum=0;
    while(idata!=0):
        sum=sum+idata%10
        idata=int(idata/10)
    print(sum)