# Java

## Introduction to Java

### What is java

Java, A high level programming language that was orginated by suns microsystem in 1995. It is object oriented programming language which means it based on the concept of objects which can represent the real world entities like Car.
Java comes in the three editions: JAVA SE(Standard edition), JAVA EE(Entreprise Edition), JAVA ME(Micro edition).
Java is comparable to C++ and C#.

### Java components

Java consists of the following main components

- JDK(Java Development Kit), a kit or bundle that includes all the necessary tools to developing java applications. It includes the Java compiler, runtime environment, and various other tools and libraries.
  java compiler: translate the java source code to the bytecode whcih can be excuted by the JVM.

- Java Runtime Environment(JRE). It is an standalon application that allows to run the java programs on a computer. It includes the JVM( java virtual machine) and other necessary tools and libralies for running the java application

- JVM (Java virtual Machine): It is a virtual machine that runs on the top of OS and can excute the Java Bytecode. When you compile a Java program, the Java compiler translates the source code into bytecode, which is a compact and platform-independent representation of the code.

The JRE includes the prebuilt class files that referred to the standard library.

### Java compilation

- The source code is compiled to generate the bytecode.
- The bytes are either passed to the bytecode compiler or Byte intrepreter.
  The bytecode interpreter is reads and executes bytecode directly without converting into machine code. while A bytecode compiler is translates bytecode into machine code that can be directly executed by the CPU.

### Java editions

- JAVA SE: Java standard editions: Java platform for developing the standard alon application which run on the desktop
- JAVA EE: Java entreprise editions: Java platform for developing the entreprise oriented application. It can also be abbriated as Jakarta EE. It based on SE but provides more API.
- JAVA ME: Java micro edition: Java platform for developing applications targeting embedded and mobile devices.

## Java program structure

- a program is made of one or more classes
- a class contain one or more methods(functions)
- a method contain program statements
  Here is the example of the sample program to display the Hello World

```java
    public class HelloWorld{
        //Java class to display hello world
        public static void main(String[]  args){
            System.out.println("Hello, World!");
        }
    }
```

- Each class has class header and class body. In above example `public class HelloWorld` is class header
  - `public` is know a the access specifier and it used to define where your class will be used.
  - `class` is keyword that is used to create a class
  - `HelloWorld` is a name of the class
- and anything inclosed in curly bracket `{...}` is class body, so
  ```java
      public static void main(String[] args){
        System.out.println("Hello, World!");
      }
  ```
  is class body
  - which is a method that have `public static void main` method header and any data enclosed in `{....}` is the method botth. `public` is also access modifier, `static` is non-access modifier.`void` is return type which method doesn't return anything and `main` is a functional name.
- Java program can have comments which a piece of text in a program that is not executed as part of the code.
  **Single-line comments:** These comments start with `//` and continue until the end of the line. Single-line comments are used to add short notes or explanations to the code.
  it means `//Java class to display hello world` in hello word program will not be excuted.
  **Multi-line comments:** These comments start with `/*` and end with `*/`. Anything between these two markers is treated as a comment, and it can span multiple lines. Multi-line comments are used to add longer explanations or documentation to the code.
  and comments can be placed anywhere in the program.

- In Java it is a conventional that Class name should be the same as the source file name.

### Identifier

- identifier, a name used to identify a class, method, variable, or any other user-defined item for example name `HelloWorld`, `main`. An identifier must start with a letter, dollar sign ($), or an underscore (\_), and can contain letters, digits, dollar signs, and underscores.

- identifier are case sensitive which `Total` and `total` are different.

**some of the convenction for identifier for the class**

- Class names should be nouns and should start with an uppercase letter.
- Each word in a class name should start with an uppercase letter. This is known as "CamelCase" naming.
- Class names should be descriptive and should reflect the purpose of the class.
  **some of the convenction for identifier for the method and variables**
- Method names should be verbs and should start with a lowercase letter while variable names are nouns.
- Each word in a method name should start with an uppercase letter except for the first letter. This is known as "CamelCase" naming example **calculateSum**.
- Method names should be descriptive and should reflect the purpose of the method.

**some of the convenction for identifier for constants**

- Constant variables should be in uppercase letters.
- Each word in a constant variable name should be separated by an underscore.
- Constant variables should be descriptive and should reflect the purpose of the constant for example `DEFAULT_USER_CHOICE`.

#### Reserved words

Java has a set of reserved words that have a specific meaning in the language and cannot be used as identifiers. These reserved words are also known as keywords. Here is a list of all the reserved words in Java:`abstract`,`assert`,`boolean`,`break`,`byte`,`case`,`catch`,`char`,`class`,`const`,`continue`,`default`,`do`,`double`,`else`,`enum`,`extends`,`final`,`finally`,`float`,`for`,`goto`,`if`,`implements`,`import`,`instanceof`,`int`,`interface`,`long`,`native`,`new`,`package`,`private`,`protected`,`public`,`return`,`short`,`static`,`strictfp`,`super`,`switch`,`synchronized`,`this`,`throw`,`throws`,`transient`,`try`,`void`,`volatile`,`while`.

#### Variables

Variables are reserved memory locations which which can store a value.
syntax to declare

```java
    dataType variableName;
```

Data type determines which kind of value the variable will hold.

##### Data types

1.  Primitive data type
    **byte**: This is an 8-bit integer data type that can hold values from -128 to 127.
    **short**: This is a 16-bit integer data type that can hold values from -32768 to 32767.
    **int**: This is a 32-bit integer data type that can hold values from -2147483648 to 2147483647.
    **long**: This is a 64-bit integer data type that can hold values from -9223372036854775808 to 9223372036854775807.
    **float**: This is a single-precision floating-point data type that can hold values with a decimal point.
    **double**: This is a double-precision floating-point data type that can hold larger values with a decimal point.
    **char**: This is a single 16-bit Unicode character data type.
    **boolean**: This is a data type that can hold only two values: true or false.
    In addition to primitive data types, Java also has a special data type called null, which represents a null value or a reference to an object that does not exist.
    example

    ```java
        int a=14;
        char uppercaseA="A";
        boolean a=true;
        static final float PI=3.14f;
    ```

2.  Reference/ Object data type
    A reference data type is a variable that holds a reference to an object in memory, rather than the object itself.
    **We can have type casting**

Type casting is when you assign a value of one primitive data type to another type.

- **widening casting** done automatically when passing a smaller size type to a larger size type example

```java
   int a=5;
   double b=a;//the integer is converted to double automaticaly
```

- **narrow casting** Narrowing casting must be done manually by placing the type in parentheses in front of the value.

```java
   double a=5.0d;
   int b=(int)a; //the double is converted to int manually
```

We have three kinds of variables (Scope)

1. local variable

   - these are declared inside mothods,constructor or blocks
   - local variables are created when a method, constructor, or block enter in excution and destroyed once it exits. This means they are available in scope which they declared in.
   - access modifiers can not be user for the local variables

2. Instance variable

   - Instance variable are declare in the class but outside of methods, constructor or any block.
   - When the space for object is allocated on the heap. The slot for each instance variable is also declared.
   - They are created when the object are created and also destroyed when object are destoyed.
   - access modifier can be given for instance variable name

3. Class/Static variable

- Class variable are same as instance variable except that they declared using static keyword and there only one copy for the variable. No matter how many instance is created from the class they will access the same variable.

### Access modifier

Java provides a number of access modifier to control access level for classes, , methods, constructor instance and class variables.

- **Default**, they will be accessible to the package.
- **Private**, variable and methods are accessible inside class only.
  Outer class can not be private.
- **Public**, Visible to the package and outside to
- **Protected** Visible to the package and all subclasses

### Expression in java

- In java an expression is a combination of one or more variables, values, and operators that results in a value.
- expression in java is made of one or more operands and operator.
  In java we have the following operators
  - **Arthimetic operators**, `+` for addition,`-` for substration, `*` for multiplication, `/` for division and `%` for modulus used calculating the remainder when division is performed.
  - **Relational operator** which evaluates to true when used in expression such as `>` greater than , `<` less than, `>=` greater than or equal, `<=` less than or equal, `==` equal.
  - **bitwise operators** are used to perform operations on the individual bits of an integer value. `&` (bitwise AND): Performs a bit-by-bit AND operation on two operands, `|` (bitwise OR): Performs a bit-by-bit OR operation on two operands,`^` (bitwise XOR): Performs a bit-by-bit XOR operation on two operands, `~` (bitwise NOT): Inverts the bits of a single operand,`<<` (left shift): Shifts the bits of a single operand to the left by a specified number of places.`>>` (right shift): Shifts the bits of a single operand to the right by a specified number of places.
  - **logical operators** are used to perform logical operations on boolean values. There are three logical operators in Java:`&&` (logical AND): Returns true if both operands are true, and false otherwise.`||` (logical OR): Returns true if either operand is true, and false otherwise, `!`(logical NOT): Returns the opposite of the operand,the `?:`**ternary operator** (also known as the conditional operator) is a shorthand way to write an if-else statement.
  - **assignment operator** = is used to assign a value to a variable. It has the lowest precedence of all the operators, so it is usually evaluated last in an expression.
  - In Java, there are a few **miscellaneous operators** that do not fit into any of the other categories. These include:
    - **The instanceof operator:** This operator is used to determine whether an object is an instance of a particular class or interface. It has the form:
      ```java
      object instanceof class
      ```
    - **The lambda operator:** `->` This operator is used to create lambda expressions, which are anonymous functions that can be used as method arguments or assigned to variables. It has the form:
      ```java
      (arguments) -> expression
      ```

### Flow control in java

Flow control refers to the mechanisms that a program uses to execute different parts of its code based on certain conditions. Flow control allows a program to make decisions, repeat actions, and handle errors, among other things.

There are several flow control constructs in Java, including:

**1. If**
an if statement flow control can span multiple lines by enclosing the block of code in curly braces {}. These block of code will be excuted only when certain condition is passed
Syntax:

```java
if(condition){
  //Block of code inside {} will be excuted if condition is true
  System.out.println("Condition is true")
}
```

**2. If else**
unlinke if , an if-else statement allows you to specify two blocks of code: one that is executed if a condition is true, and another that is executed if the condition is false.

```java
if(condition){
  //Block of code inside {} will be excuted if condition is true
  System.out.println("Condition is true")
}
else{
  //Block of code inside {} will be excuted if condition is false
  System.out.println("Condition is false")
}
```

It is also possible to chain multiple `if-else` statements together using the `else if`:
example

```java
int number=4; //declare the integer number


if(number>4)
{
   //Block of code inside this {} will be excuted if condition is number>4
   System.out.println("Number is greater than four.")
}
else if(number==4)
{
   //Block of code inside this {} will be excuted if first first if condition evaluated to false and number equal to 4
   System.out.println("Number is equal to four.")
}
else{
   //Block of code inside this {} all other condition have been false
   System.out.println("Number less than four.")
}
```

**3. Switch**
Switch statement is a control structure that allows you to specify multiple blocks of code to be executed based on the value of an expression.

```java
switch (expression) {
    case value1:
        // code to execute if expression == value1
        break;
    case value2:
        // code to execute if expression == value2
        break;
    ...
    default:
        // code to execute if expression does not match any of the values
}
```
