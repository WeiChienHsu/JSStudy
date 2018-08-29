# Writing to an excel 
# sheet using Python
import sys, json
import xlwt
from xlwt import Workbook
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["clmic_db"]
mycol = mydb["clmicmodels"]






def createExcel():

    # Workbook is created
    wb = Workbook()

    # add_sheet is used to create sheet.
    sheet1 = wb.add_sheet('HAMILTON')

    sheet1.write(0, 1, 'B')
    sheet1.write(0, 2, 'C')
    sheet1.write(0, 3, 'D')
    sheet1.write(0, 4, 'E')

    sheet1.write(1, 1, '1')
    sheet1.write(1, 2, '2')
    sheet1.write(1, 3, '3')
    sheet1.write(1, 4, '4')

    wb.save('example.xls')
    return "Excel File is Created."

def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    print type(json.loads(lines[0]))
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    print lines

    for x in mycol.find({ "id": lines}):
        print x

    #create a numpy array
    #np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    #lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    #print lines_sum

    #print "hahahahaha"
    print createExcel()

if __name__ == "__main__":
    main()