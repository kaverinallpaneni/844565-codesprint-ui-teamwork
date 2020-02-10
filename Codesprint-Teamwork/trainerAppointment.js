
function save(){
   console.log("inside save")
    //validating name
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let name = fname.value+" "+lname.value;
    
    if((fname.value.length >= 3) && (fname.value.length <= 20)){
        console.log("inside if")
    }else{
        fname.focus();
        alert("fname");
        return false;
    }
    if((lname.value.length >= 3) && (lname.value.length <= 20)){
        let name = fname.value+" "+lname.value;
       
    }else{
            lname.focus();
            alert("lname");
            return false;
    }   

    //validating age
    let age = document.getElementById("ageid");
    if((age.value <= 15 && age.value >= 100) || age.value === null ){
        age.focus;
		alert("age");
        return false;
    }
	//validating mail
    let email = document.getElementById("mailid").value;
    let mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
	if(email.value === null){
		email.focus();
		alert("email");
        return false;
	}

    //phone 
    let phone = document.getElementById("one").value+
                document.getElementById("two").value+
                document.getElementById("three").value+
                document.getElementById("four").value+
                document.getElementById("five").value+
                document.getElementById("six").value+
                document.getElementById("seven").value+
                document.getElementById("eight").value+
                document.getElementById("nine").value+
                document.getElementById("ten").value;
    if(phone.length != 10 || phone.value === null){
		alert("phone");
        return false;
    }


    
    
    

   

    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;
    let address = street+","+city+","+state+","+country+"-"+pincode;
if( pincode === null || street === null || city === null ||state === null || pincode.length != 6 || street.length <3 || city.length < 3 || country === "Country"){
        pincode.focus();
		alert("pincode");
        return false;
    }else{
        
        let address = street+","+city+","+state+","+country+"-"+pincode;
    }
        
    let  trainerpref;
    let pref =  document.getElementById("pref");
	if(pref.value === null){
		alert("preference");
		return false;
	}
		
    if(pref.value === "name"){
        trainerpref = document.getElementById("prefname").value;
    }else if(pref.value === "others"){
        trainerpref = document.getElementById("prefother").value;
    }else{
        trainerpref = pref.value;
    }
if(pref.value === null ){
    pref.focus();
    return false;
}

    //physio
    let physio = document.getElementById("physio").value;
    if(physio === null){
        physio.focus();
		alert("physio");
        return false;
        
    }

    //timings
    let timimgs=[];
    timimgs.push(document.getElementById("monday").value)
    timimgs.push(document.getElementById("tuesday").value)
    timimgs.push(document.getElementById("wednesday").value)
    timimgs.push(document.getElementById("thursday").value)
    timimgs.push(document.getElementById("friday").value)
    timimgs.push(document.getElementById("saturday").value)
    timimgs.push(document.getElementById("sunday").value)
    if(timimgs.length != 7){
    document.getElementById("monday").focus();
		alert("timings");
        return false;
    }
    timimgs.forEach(element => { 
        if(element === null){
        document.getElementById("monday").focus();
        return false;
        }    
    });
    //package
    let package1 = document.getElementById("package").value;

    if(package1 === null ){
        document.getElementById("package").focus();
		alert("package");
        return false;
    }


    let obj = {
        "name" : name,
        "address" : address,
        "city" : city,
        "trainerpref":trainerpref,
        "package" : package1,
        "mobile" : phone
    }
    if(localStorage.getItem("orders") === null){
        orders = [];
    }
    else{
        orders=[]; 
        orders = JSON.parse(localStorage.getItem("orders"));
        
    }
    console.log(obj);
    orders.push(obj);
    localStorage.setItem("orders",JSON.stringify(orders));

    
}