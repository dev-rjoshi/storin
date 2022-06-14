function validate(){$name=$('#fullname').val();$fname=$('#fname').val();$lname=$('#lname').val();$email=$('#email').val();$company=$('#company').val();$describeme=$('#selectbox1').val();if($name==''){alert("Please enter your name");$('#name').focus()
return false;}
if($fname==''){alert("Please enter your first name");$('#fname').focus()
return false;}
if($lname==''){alert("Please enter your last name");$('#lname').focus()
return false;}
if($email==''){alert("Please enter your email");$('#email').focus()
return false;}
var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(reg.test($email)==false)
{alert("Please enter valid email");return false;}
if($company==''){alert("Please enter company name");$('#company').focus()
return false;}
if($describeme==''){alert("Please select describe me");$('#selectbox1').focus()
return false;}}