 function validate()
{
return (verifyNull() && verifyEmail());
}


function verifyNull(){
        var isValid = true;
        if(!document.getElementById('username').value.trim().length){
            isValid = false;
            alert('Enter your Email address');
        }
        else if(!document.getElementById('password').value.trim().length){
        isValid = false;
            alert('Please enter the password');
        }
      return isValid;
    }
    function verifyEmail(){
        var x = document.getElementById('email').value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
        return false;
        }
       return true;
    }