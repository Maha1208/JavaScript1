var v_name=/^[A-Za-z]{3,20}$/;
var v_email=/^[A-Za-z0-9+_.-]+@[a-zA-z](.+)$/;
var v_username=/^[\w]{1,15}$/;
var v_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
//validate
function validate(form,event){
    var name = form.name.value;
    var email = form.email.value;
    var username = form.username.value;
    var password = form.password.value;
    var errors = [];
    event.preventDefault()

     if (!v_name.test(name)) 
     {
      errors[errors.length] = "You valid Name .";
     }

     if (!v_email.test(email)) 
     {
      errors[errors.length] = "You must enter a valid email address";
     }

     if (!v_username.test(username))
     {
      errors[errors.length] = "You valid UserName no special char ";
     }

     if (!v_password.test(password)) 
     {
      errors[errors.length] = "You must enter a valid Password ";
     }

     if (errors.length > 0) 
     {
      reportErrors(errors);
      return false;
     }
     alert('successfully Login');
    }

    //error alert msg
    function reportErrors(errors)
    {
     var msg = "Please Enter Valide Data...\n";
     for (var i = 0; i<errors.length; i++)
    {
     var numError = i + 1;
      msg += "\n" + numError + ". " + errors[i];
    }
     alert(msg);
    }