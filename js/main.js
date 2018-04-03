var userObj = {};
var addressObj = {};
var invoiceObj = {};
	
var load=function(url,div){

	req = new XMLHttpRequest();
	req.open("GET",url,false);
	req.send(null);
	
	div.innerHTML = req.responseText;

}



	var activeItem = document.getElementById("custom-nav");
	var changeActive = activeItem.getElementsByClassName("tab");
	for (var i = 0; i < changeActive.length; i++) {
  changeActive[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

var saveUser = function(){

	
	userObj.userName = document.getElementById("name").value;
	userObj.userMail = document.getElementById("email").value;
	userObj.userPasswd = document.getElementById("passwd").value;
	userObj.userConfirmPasswd = document.getElementById("confirm-passwd").value;
	
if (userObj.userName == "") {
					document.getElementById("alert-box").innerHTML = 'No puedes dejar el nombre vacio';
					document.getElementById("alert-box").classList.remove("hidden");
				} else	if (userObj.userPasswd!=userObj.userConfirmPasswd) {
					document.getElementById("alert-box").innerHTML = 'Los passwds no coinciden';
					document.getElementById("alert-box").classList.remove("hidden");
				}
}

function clearError(){
	document.getElementById("alert-box").classList.add("hidden");
}

var nextForm = function(formToShow){
		if (userObj.userName == "" ) {
					document.getElementById("alert-box").innerHTML = 'No puedes dejar el nombre vacio';
					document.getElementById("alert-box").classList.remove("hidden");
				} else if (userObj.userPasswd!=userObj.userConfirmPasswd) {
					document.getElementById("alert-box").innerHTML = 'Los passwds no coinciden';
					document.getElementById("alert-box").classList.remove("hidden");}

	else{
       $('form').addClass('hidden');
        $(formToShow).removeClass("hidden");
}

}

var saveAdd = function(){

	addressObj.userStreet = document.getElementById("data-form-calle").value;
	addressObj.userCity = document.getElementById("data-form-city").value;
	addressObj.userZipcode = document.getElementById("data-form-zipcode").value;
addressObj.userPutation = document.getElementById("data-form-putation").value;
console.log(addressObj);

}

var saveInvoice = function(){

	invoiceObj.userStreet = document.getElementById("invoice-data-form-calle").value;
	invoiceObj.userCity = document.getElementById("invoice-data-form-city").value;
	invoiceObj.userZipcode = document.getElementById("invoice-data-form-zipcode").value;
    	invoiceObj.userPutation = document.getElementById("invoice-data-form-putation").value;
console.log(invoiceObj);

}

var checkInfo = function(){
	$('.form-wrapper').html("<h2>Datos personales</h2>"+
		"Nombre:"+userObj.userName+"<br/>"+
		 "Email:"+userObj.userMail+"<br/>"+
		"<h2>Direccion</h2>"+
		"Calle: "+addressObj.userStreet+"<br/>"+
		"Ciudad: "+addressObj.userCity+"<br/>"+
		"Zipcode: "+addressObj.userZipcode+"<br/>"+
		"Delegacion: "+addressObj.userPutation+"<br/>"+
		"<h2>Direccion de facturacion</h2>"+
			"Calle: "+invoiceObj.userStreet+"<br/>"+
		"Ciudad: "+invoiceObj.userCity+"<br/>"+
		"Zipcode: "+invoiceObj.userZipcode+"<br/>"+
		"Delegacion: "+invoiceObj.userPutation+"<br/>"
		);
}

function toggleChecked(checkbox){
    

    $(checkbox).toggleClass("checked")
    console.log("bind")
    $('#invoice-data-form').removeClass('hidden');
    addressObj.userStreet = document.getElementById("data-form-calle").value;
    	addressObj.userCity = document.getElementById("data-form-city").value;
	addressObj.userZipcode = document.getElementById("data-form-zipcode").value;
addressObj.userPutation = document.getElementById("data-form-putation").value;
    $('#invoice-data-form-calle').val($('#invoice-data-form-calle').val() + addressObj.userStreet);
    $('#invoice-data-form-city').val($('#invoice-data-form-city').val() + addressObj.userCity);
    $('#invoice-data-form-zipcode').val($('#invoice-data-form-zipcode').val() + addressObj.userZipcode);
    $('#invoice-data-form-putation').val($('#invoice-data-form-putation').val() + addressObj.userPutation);

}