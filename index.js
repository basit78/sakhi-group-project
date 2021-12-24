var a = document.getElementById('name');
var b = document.getElementById('email');
var c = document.getElementById('company');
var d = document.getElementById('country');
var e = document.getElementById('subject');
var f = document.getElementById('message');


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
var Submit = () => {
    if (a.value == '') {
        a.style.borderColor = 'red'
    }
    else if (b.value == '') {
        b.style.borderColor = 'red'
    }
    else if (c.value == '') {
        c.style.borderColor = 'red'
    }
    else if (d.value == '') {
        d.style.borderColor = 'red'
    }
    else if (e.value == '') {
        e.style.borderColor = 'red'
    }
    else if (f.value == '') {
        f.style.borderColor = 'red'
    }
    else {
        a.style.border = 'none'
        b.style.border = 'none'
        c.style.border = 'none'
        d.style.border = 'none'
        e.style.border = 'none'
        f.style.border = 'none'
         

        var temparams = {
            from_name:b.value,
            to_name: a.value,
            name:   `Name : ${a.value}`,
            email:   `Email : ${b.value}`,
            company:   `Company : ${c.value}`,
            country:   `Country : ${d.value}`,
            subject: `Subject : ${e.value}`,
            message: `Message : ${f.value}`,

        }

        emailjs.send('gmail', 'template_kdtoqrw', temparams).then((res) => {
            console.log("Success", res.status)
            alert("Responce has been sent sucessfully")
            a.value=""
            b.value=""
            c.value=""
            d.value=""
            e.value=""
            f.value=""
        }).catch(() => {
            console.log("email is not exist")
        })
    }

}