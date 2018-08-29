# Writing to an excel 
# sheet using Python
import xlwt
from xlwt import Workbook

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

if __name__ == "__main__":
    createExcel()