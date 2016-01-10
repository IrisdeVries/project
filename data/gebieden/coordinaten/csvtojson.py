import csv
import json

f = open('OudNoord.csv', 'r')
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
