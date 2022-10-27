from operator import itemgetter

class Street:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class House:
    def __init__(self, id, name, square, id_street):
        self.name = name
        self.id = id
        self.square = square
        self.id_street = id_street

class HouseStreet:
    def __init__(self, id_house, id_street):
        self.id_house = id_house
        self.id_street = id_street

streets = [Street(1, 'Lenina street'), 
    Street(2, 'Kirova'), 
    Street(3, 'Sovetsya street'),
    ]

houses = [House(1, 12, 1000, 1),
    House(2, 21, 2000, 1),
    House(3, 33, 1500, 1),
    House(4, 54, 4000, 2),
    House(5, 5, 1500, 2),
    House(6, 65, 200, 3),
    House(7, 53, 900, 3),
    House(8, 81, 200, 3)
    ]

houses_streets = [HouseStreet(1, 1),
    HouseStreet(2, 1),
    HouseStreet(3, 1),
    HouseStreet(4, 2),
    HouseStreet(5, 2),
    HouseStreet(6, 3),
    HouseStreet(7, 3),
    HouseStreet(8, 3)
    ]

def task1():
    result = {}
    for street in streets:
        if 'street' in street.name: 
            house_data = []
            for house in houses:
                if house.id_street == street.id:
                    cur_house_data = [house.name, house.square]
                    house_data.append(cur_house_data)
            result[street.name] = house_data
    return result

def task2():
    result = {}
    # Будем сортировать по площади домов на улице
    for street in streets:
        count = 0
        for house in houses:
            if house.id_street == street.id:
                count+=1
                if street.name in result:
                    result[street.name] += house.square
                else:
                    result[street.name] = house.square
        if (result[street.name] != 0):
            result[street.name] /= count
            result[street.name] = round(result[street.name], 2)
    return sorted(result.items(), key = itemgetter(1),reverse=False)

def task3():
    # Свойства класса дом не имеют полей, которые содержат буквы. 
    # Поэтому будем вытаскивать не по первой букве, а по первой цифре (например, 5)
    result = {}
    for house in houses:
        if str(abs(house.name))[0] == '5':
            for house_street in houses_streets:
                if house_street.id_house == house.id:
                    for street in streets:
                        if street.id == house_street.id_street:
                            result[house.name] = street.name
    return result

def main():
    print('\tTask 1')
    print(task1())

    print('\n\tTask 2')
    print(task2())

    print('\n\tTask 3')
    print(task3())

if __name__ == "__main__":
    main()
