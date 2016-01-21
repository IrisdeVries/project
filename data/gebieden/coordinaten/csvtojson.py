import csv
import json

f = open('leeftijdsgroep.csv', 'r')
reader = csv.reader(f, delimiter='	',skipinitialspace=True)

# make empty list
leeftijd = []
aList = {}
namen = ["gebied", "leeftijdEen", "leeftijdTwee", "leeftijdDrie", "leeftijdVier", "leeftijdVijf", "leeftijdZes", "leeftijdZeven", "leeftijdAcht"]

# modify data
for row in reader:
	row[0] = row[0].replace(",", ".")
	row[1] = row[1].replace(",", ".")
	row[2] = row[2].replace(",", ".")
	row[3] = row[3].replace(",", ".")
	row[4] = row[4].replace(",", ".")
	row[5] = row[5].replace(",", ".")
	row[6] = row[6].replace(",", ".")
	row[7] = row[7].replace(",", ".")
	# row[8] = row[8].replace(",", ".")
	print row[7]









	# aList[namen[0]] = row[0]
	# aList[namen[1]] = row[1]
	# aList[namen[2]] = row[2]
	# aList[namen[3]] = row[3]
	# aList[namen[4]] = row[4]
	# aList[namen[5]] = row[5]
	# aList[namen[6]] = row[6]
	# aList[namen[7]] = row[7]
	# aList[namen[8]] = row[8]
	# print aList





    # var movies = [
    #     { title: "xxx", year: 1972, length: 175, budget: 6000000, rating: 9.1, xx: 9},
    #     { title: "The Shawshank Redemption", year: 1994, length: 142, budget: 25000000, rating: 9.1 },
    #     { title: "The Lord of the Rings: The Return of the King", year: 2003, length: 251, budget: 94000000, rating: 9 },
    #     { title: "The Godfather: Part II", year: 1974, length: 200, budget: 13000000, rating: 8.9 },
    #     { title: "Shichinin no samurai", year: 1954, length: 206, budget: 500000, rating: 8.9 },
    #     { title: "Buono, il brutto, il cattivo, Il", year: 1966, length: 180, budget: 1200000, rating: 8.8 },
    #     { title: "Casablanca", year: 1942, length: 102, budget: 950000, rating: 8.8 },
    #     { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, length: 208, budget: 93000000, rating: 8.8 },
    #     { title: "The Lord of the Rings: The Two Towers", year: 2002, length: 223, budget: 94000000, rating: 8.8 },
    #     { title: "Pulp Fiction", year: 1994, length: 168, budget: 8000000, rating: 8.8 }
    # ];


#     >>> d = {'key':'value'}
# >>> print d
# {'key': 'value'}
# >>> d['mynewkey'] = 'mynewvalue'
# >>> print d
# {'mynewkey': 'mynewvalue', 'key': 'value'}