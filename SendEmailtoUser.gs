var START_ROW = 2;
var START_COLUMN = 1;

function SendEmailtoUser() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Form Responses 1");
  var data1 = sheet1.getRange(START_ROW,START_COLUMN,sheet1.getLastRow()-1,6).getValues()

  data1.forEach(function(row,i){

    var name = row[1];
    var number = row[2];
    var category = row[4];
    var problem = row[5];
    var email = row[3];

    var subject = "Query recieved for ", category;

    var EmailBody = "Dear " + name + "," + "<br><br>"+
                        "We recieved your problem with the following details" + "<br><br>"+
                        "Description : " + problem + "<br><br>"+
                        "Category : " + category + "<br><br>"+
                        "A Customer Service Executive will contact you shortly "+ "<br><br>"
                        "Regards,"+ "<br><br>"+
                        "XYZ Solutions."+ "<br><br>";


    GmailApp.sendEmail(email,subject,"",{htmlBody: EmailBody});
  });

}




