import csv
import json

f = open('fuckedup2.csv', 'r')
reader = csv.reader(f, delimiter=')',skipinitialspace=True)

# make empty list
aList = []

# modify data
for row in reader:
	print row[0]


	# lat = row[0]
	# lng = row[1]

	# print"{lat:"
	# print lat
	# print ","
	# print"lng:"
	# print lng
	# print "},"
