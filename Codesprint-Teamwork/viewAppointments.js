function get(){
    var orders = [];
    orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders)
    var table = document.getElementById("mybody");
    if(orders == null){
        document.getElementById("nodata").innerHTML="No Data Available";
    }else{
		console.log(orders);
		var table = document.getElementById("mybody");
    for(let i=0;i<orders.length;i++){
        var row = '<tr> <td>'+
            (i+1) +
        '</td> <td>'+
        orders[i].name+
        '</td> <td>'+
        orders[i].address+
        ' </td><td>'+
        orders[i].city+
        '</td><td>'+
        orders[i].package+
        '</td><td>'+
        orders[i].trainerpref+
        '</td><td>'+
        orders[i].mobile+
        ' </td></tr>';
        table.innerHTML += row;
    }
}
   
}
