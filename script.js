document.getElementById('username').focus();

var submitbttn = document.getElementById('submitbttn');
submitbttn.addEventListener('click',bttnClicked);

function bttnClicked() {
  console.log('Clicked');
  validate();
}



function validate(){
 var valid;
 var html = "";
 var uName = document.getElementById('username').value;
 var age = document.getElementById('age').value;
 var pWord1 = document.getElementById('pword1').value;
 var pWord2 = document.getElementById('pword2').value;
 var email1 = document.getElementById('email1').value;
 var email2 = document.getElementById('email2').value;
 var radio = document.querySelector('input[name="gender"]:checked');


if(uName.length < 4){
 document.getElementById('feedback').innerHTML = "<span class='text-danger'> Username must have at least 4 characters</span>";
 valid = false;
}
else if(uName.length == 0){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Username must have at least 4 characters</span>";
  valid = false;
}
else if(age < 4 || age > 110){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Age range allowed ( 4-110 ) years olds</span>";
  valid = false;
}
else if(pWord1.length && pWord2.length < 4){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Password must have at least 4 characters</span>";
  valid = false;
}
else if(pWord1 !== pWord2){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Passwords don't match</span>";
  valid = false;
}
else if(email1 !== email2){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Emails don't match</span>";
  valid=false;
}
else if(email1.indexOf("@")== -1 || email1.indexOf(".")== -1){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Email needs to contain ('@' and '.') </span>";
  valid=false;
}
else if(email2.indexOf("@")== -1 || email2.indexOf(".")== -1){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Email needs to contain ('@' and '.') </span>";
  valid=false;
}
else if(radio === null){
  document.getElementById('feedback').innerHTML = "<span class='text-danger'> Please choose a gender </span>";
  valid=false;
  
}

else {
  document.getElementById('feedback').innerHTML = "<span class='text-success'> Proceeding ...</span>";
  var radio = document.querySelector('input[name="gender"]:checked').value;
  console.log(radio);
  valid=false;
  
}
}




var regTestSelect = document.getElementById('regtester');
regTestSelect.addEventListener('change', test)


function test(){

    var CASE_ALL_CORRECT = "correct";
    var CASE_PWORD_MISMATCH = "pword_mismatch";
    var CASE_PWORD_TOO_SHORT = "pword_short";
    var CASE_UNAME_TOO_SHORT = "uname_short";
    var CASE_EMAIL_NOT_AT = "not_at";
    var CASE_EMAIL_NOT_DOT = "not_dot";
    var CASE_EMAIL_MISMATCH = "email_mismatch";
    var CASE_TOO_YOUNG = "too_young";
    var CASE_TOO_OLD = "too_old";
    var CASE_NO_GENDER = "no_gend";
    
    
    testCase = document.getElementById('regtester').value;
    
    
    // All possible inputs 
    
    // everything is correct
    if(testCase === CASE_ALL_CORRECT){
      document.getElementsByName('gender')[0].checked = true
      document.getElementById('username').value = "Morrisv";
      document.getElementById('age').value= 31;
      document.getElementById('pword1').value="abcde";
      document.getElementById('pword2').value="abcde";
      document.getElementById('email1').value="foo@bar.com";
      document.getElementById('email2').value="foo@bar.com";
    }
    // Passwords dont match
    else if (testCase === CASE_PWORD_MISMATCH){
      document.getElementsByName('gender')[0].checked = true
      document.getElementById('username').value = "Morrisv";
      document.getElementById('age').value = 31;
      document.getElementById('pword1').value = "abcde";
      document.getElementById('pword2').value = "abcdefff";
      document.getElementById('email1').value = "foo@bar.com";
      document.getElementById('email2').value = "foo@bar.com";
      
    }
    // password is too short (>4)
    else if (testCase === CASE_PWORD_TOO_SHORT){
      document.getElementsByName('gender')[0].checked = true
      document.getElementById('username').value = "Morrisv";
      document.getElementById('age').value = 31;
      document.getElementById('pword1').value = "abc";
      document.getElementById('pword2').value = "abc";
      document.getElementById('email1').value = "foo@bar.com";
      document.getElementById('email2').value = "foo@bar.com";
      
    }
    // username is too short (>4)
    else if (testCase === CASE_UNAME_TOO_SHORT){
      document.getElementsByName('gender')[0].checked = true
      document.getElementById('username').value = "Mor";
      document.getElementById('age').value = 31;
      document.getElementById('pword1').value = "abcde";
      document.getElementById('pword2').value = "abcdef";
      document.getElementById('email1').value = "foo@bar.com";
      document.getElementById('email2').value = "foo@bar.com";
  
    }
    // no @ in the email
  else if(testCase === CASE_EMAIL_NOT_AT){
    document.getElementsByName('gender')[0].checked = true
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 31;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foobar.com";
    document.getElementById('email2').value="foobar.com";
  }
  // no dot in the email
  else if(testCase === CASE_EMAIL_NOT_DOT){
    document.getElementsByName('gender')[0].checked = true
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 31;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foo@barcom";
    document.getElementById('email2').value="foo@barcom";
  }
  // emails dont match 
  else if(testCase === CASE_EMAIL_MISMATCH){
    document.getElementsByName('gender')[0].checked = true
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 31;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foo@bar.com";
    document.getElementById('email2').value="fuu@bar.com";
  }
  // user is too young
  else if(testCase === CASE_TOO_YOUNG){
    document.getElementsByName('gender')[0].checked = true
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 2;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foo@bar.com";
    document.getElementById('email2').value="foo@bar.com";
  }
  // user is too old
  else if(testCase === CASE_TOO_OLD){
    document.getElementsByName('gender')[0].checked = true
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 150;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foo@bar.com";
    document.getElementById('email2').value="foo@bar.com";
  }
  // unchosen gender option
  else if(testCase === CASE_NO_GENDER){
    document.getElementsByName('gender')[0].checked = false
    document.getElementById('username').value = "Morrisv";
    document.getElementById('age').value= 31;
    document.getElementById('pword1').value="abcde";
    document.getElementById('pword2').value="abcde";
    document.getElementById('email1').value="foo@bar.com";
    document.getElementById('email2').value="foo@bar.com";
  }
    
    
    
    
    
    // Proceeding
    else{
      console.log('no valid test case, testCase : '+ testCase);
    }
    console.log(testCase)
    validate();
  
  
}
// end of test()
