function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
       
    };

    emailjs.send('service_kvup7bu','template_yj4c6zl',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}