# this demostrate the implemation of stack data structure
'''
    The stack is ds tha follows the Last in first out prinicple meaning that what inserted after is what goes out first
    It has the following operations
    - push: which insert the element at top of stack
    - pop: which removes the element from the top of the stack
    - isEmpty: Which chek if the stack is empy
    - isFull: check if the stack is full
    - Peek: get the value of the top elellment without removing it.
'''




class Stack:
    
    def __init__(self, maxLength=100):
        self.data=[]
        self.maxLength=maxLength
        # self.index=0
        self.TOP=-1
    '''
    Uncomment below clines TO make the stack iterable you can
    '''
    # def __iter__(self):
    #     return self
    # # def __next__(self):
    #     if(self.index<=self.TOP):
    #         temp=self.data[self.index]
    #         print(temp)
    #         self.index=self.index+1
    #         return temp
    #     else:
    #         raise StopIteration
    def push(self, item):
        if(self.TOP<self.maxLength-1):
            self.data.append(item)
            self.TOP=self.TOP+1
        else:
            print("Stack is full")
    def pop(self):
        if(self.TOP>0):
            self.data.pop()
            self.TOP=self.TOP-1
        else:
            print("Stack is empty")
    def peek(self):
        if(self.TOP>0):
            return  self.data[self.TOP]
        print("Stack is empty")
    def isEmpty(self):
        if(self.TOP<0):
            return True
    def isFull(self):
        if(self.TOP>=self.maxLength-1):
            return True
stack=Stack(4)
print(stack)
print(stack.isEmpty())
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(150)
print(stack.isFull())
stack.push(200)
stack.pop()
print(stack.peek())

# print("All Elements in stack")
# for element in stack:
#     print(element)