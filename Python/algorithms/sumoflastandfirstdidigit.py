T=int(input())
for i in range(T):
    N=input()
    first, last=map(int,[list(N)[0], list(N)[-1]])
    print(first+last)