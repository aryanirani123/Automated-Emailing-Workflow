//Categories
var cat1 = "Service Requests"
var cat2 = "Product Information"
var cat3 = "Franchise Enquiry"
var cat4 = "Order Status"

//Backed Email Addresses
var email1 = "aryanirani123@gmail.com";
var email2 = "aryanirani9968@gmail.com";
var email3 = "aryanirani123@gmail.com";
var email4 = "aryanirani9968@gmail.com"


function SendEmailtoBackend(){

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Form Responses 1");
  var data1 = sheet1.getRange(START_ROW,START_COLUMN,sheet1.getLastRow()-1,6).getValues()

  data1.forEach(function(row,i){

    var name = row[1]
    var number = row[2];
    var category = row[4];
    var problem = row[5];
    var user_email = row[3];
    var subject_email = "New Email recieved through Form"
    Logger.log(category)

    if (category == cat1){

      var body1 = "Hello Team " + cat1 +  "<br><br>"+
                        "The query form was filled with the following details" + "<br><br>"+
                        "Description : " + problem + "<br><br>"+
                        "Name : " + name + "<br><br>"+
                        "Email : " + user_email + "<br><br>"+
                        "Phone number : " + number + "<br><br>"+
                        "Resolve this issue as soon as possible "+ "<br><br>";
      GmailApp.sendEmail(email1,subject_email,"",{htmlBody:body1})

    }


    else if(category == cat2){

      var body2 = "Hello Team " + cat2 +  "<br><br>"+
                        "The query form was filled with the following details" + "<br><br>"+
                        "Description : " + problem + "<br><br>"+
                        "Name : " + name + "<br><br>"+
                        "Email : " + user_email + "<br><br>"+
                        "Phone number : " + number + "<br><br>"+
                        "Resolve this issue as soon as possible "+ "<br><br>";

      GmailApp.sendEmail(email2,subject_email,"",{htmlBody:body2})

    }

    else if(category == cat3){

      var body3 = "Hello Team " + cat3 +  "<br><br>"+
                        "The query form was filled with the following details" + "<br><br>"+
                        "Description : " + problem + "<br><br>"+
                        "Name : " + name + "<br><br>"+
                        "Email : " + user_email + "<br><br>"+
                        "Phone number : " + number + "<br><br>"+
                        "Resolve this issue as soon as possible "+ "<br><br>";

      GmailApp.sendEmail(email3,subject_email,"",{htmlBody:body3})
    }

    else if(category == cat4){

      var body4 = "Hello Team " + cat4 +  "<br><br>"+
                        "The query form was filled with the following details" + "<br><br>"+
                        "Description : " + problem + "<br><br>"+
                        "Name : " + name + "<br><br>"+
                        "Email : " + user_email + "<br><br>"+
                        "Phone number : " + number + "<br><br>"+
                        "Resolve this issue as soon as possible "+ "<br><br>";

      GmailApp.sendEmail(email4,subject_email,"",{htmlBody:body4})

    }
  });  
}