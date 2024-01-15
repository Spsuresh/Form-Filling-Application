document.getElementById("myForm").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phonenumber").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;


  if (name === "" || email === "" || phone === "" || address === "" || pincode === "") {
    alert("Please fill in all fields.");
    event.preventDefault(); 
    return;
  }


  if (phone.length !== 10) {
    alert("Phone number should be 10 digits.");
    event.preventDefault(); 
    return;
  }

});