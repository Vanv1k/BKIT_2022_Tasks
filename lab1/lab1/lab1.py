import math

print("Уравнение вида Ax^4+Bx^2+C")

def getValues(): #Ввод коэффициентов для уравнения с клавиатуры

    a = input("Введите коэф. A = ")
    b = input("Введите коэф. B = ")
    c = input("Введите коэф. C = ")

    return a, b, c 


while True: #Проверяем данные на правильность ввода внутри цикла
    try:
        temp = getValues()
        a = float(temp[0])
        b = float(temp[1])
        c = float(temp[2])
    except ValueError:
        continue
    break

#Решение уравнения:
x = [] #Решения уравнения
extraX = 0 #Подстановочная переменная для решения биквадратного уравнения
D = b**2 - 4*a*c 

if D == 0:
    extraX = (-b) / (2 * a)
    if extraX > 0:
        x.append(math.sqrt(extraX))
        if extraX != 0: #Учитывавем случай, когда корень равен 0
            x.append(-math.sqrt(extraX))
elif D > 0:
    extraX = (-b + math.sqrt(D)) / (2 * a)
    if extraX > 0:
        x.append(math.sqrt(extraX))
        if extraX != 0: #Учитывавем случай, когда корень равен 0
            x.append(-math.sqrt(extraX))
        extraX = (-b - math.sqrt(D)) / (2 * a)
    if extraX > 0:
        x.append(math.sqrt(extraX))
        if extraX != 0: #Учитывавем случай, когда корень равен 0
            x.append(-math.sqrt(extraX))

number_of_x = len(x) #Смотрим количество решений биквадратного уравнения

if number_of_x == 0:
    print("Нет корней")
elif number_of_x == 1:
    print('1 корень: {}' .format(x[0]))
elif number_of_x == 2:
    print('2 корня: {} и {}' .format(x[0], x[1]))
elif number_of_x == 3:
    print('3 корня: {}, {} и {}' .format(x[0], x[1], x[2]))
elif number_of_x == 4:
    print('4 корня: {}, {}, {} и {}' .format(x[0], x[1], x[2], x[3]))