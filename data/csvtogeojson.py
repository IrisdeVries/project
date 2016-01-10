import csv
import json

f = open('NoordWest.csv', 'r')
reader = csv.reader(f, delimiter=',',skipinitialspace=True)

# make empty list
aList = []

# modify data
for row in reader:
	lat = row[0]
	lng = row[1]

	print"{lat:"
	print lat
	print ","
	print"lng:"
	print lng
	print "},"



        # tempor = []
        # date = row[0][4:13]
        # sdate = ''
        # for char in date:
        #     if len(sdate) == 0:
        #         sdate += '/'
        #     sdate += char
        # tempor.append(sdate)

        # # get temperature
        # temp = row[1:2][0]
        # tempor.append(temp)
        # aList.append(tempor)

# with open('formatted_nieuw_weer.txt', 'w') as fp:
# 	json.dump(aList, fp)
