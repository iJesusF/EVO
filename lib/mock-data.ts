import type { FireAlarmDevice } from "./types";
const base = [
  ["02","Area A","FA-201","201","Lobby","A-0201-SMK-01","Smoke Detector","SIGA-OSD","Ceiling","1","FP-1","NAC-1","1","Verify lobby sequence","Programmed","High","Yes","",""],
  ["02","Area A","FA-201","202","Electrical","A-0202-PULL-01","Pull Station","SIGA-278","Wall","1","FP-1","","2","","Tested","High","Yes","Passed functional test",""],
  ["02","Area B","FA-202","203","Corridor","B-0203-HORN-01","Horn Strobe","G1AVRF","Wall","2","FP-1","NAC-2","3","Check candela","Not Started","Medium","No","","Candela missing"],
  ["02","Area C","FA-203","","Storage","C-0204-SMK-01","Smoke Detector","SIGA-OSD","Ceiling","2","FP-2","","4","","Issue","Review","No","","Missing room number"],
  ["02","Area C","FA-203","205","Office","C-0205-HEAT-01","Heat Detector","SIGA-HRD","Ceiling","3","FP-2","","5","","Accepted","High","Yes","Signed off",""],
  ["02","Area D","FA-204","206","Lab","C-0205-HEAT-01","","","Ceiling","3","FP-2","NAC-3","6","Duplicate ID needs QC","Installed","Review","No","","Duplicate device ID"]
];
export const mockDevices: FireAlarmDevice[] = base.map((row, index) => ({ __rowId: `mock-${index}`, __rowIndex: index + 2, Level: row[0], Area: row[1], Drawing: row[2], "Room No.": row[3], "Room Name": row[4], "Device ID": row[5], "Device Type": row[6], Model: row[7], Mount: row[8], Loop: row[9], FP: row[10], NAC: row[11], "Programming Order": row[12], "Programming Notes": row[13], Status: row[14], Confidence: row[15], Verified: row[16], "Commissioning Notes": row[17], Observations: row[18] }));
