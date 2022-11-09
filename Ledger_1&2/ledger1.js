var temp = 0, temp1 = 0;


function checkEmptyInput() {
    var isEmpty = false,
        cname = document.getElementById("cname").value,
        date = document.getElementById("date").value,
        amt = document.getElementById("amt").value;




    if (cname === "") {
        alert("Customer Name Cannot Be Empty");
        isEmpty = true;
    }
    else if (date === "") {
        alert("Date Cannot Be Empty");
        isEmpty = true;
    }
    else if (amt === "") {
        alert("Amount Cannot Be Empty");
        isEmpty = true;
    }

    return isEmpty;
}



function deposit() {

    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),


            cname = document.getElementById("cname").value,
            date = document.getElementById("date").value,
            amt = document.getElementById("amt").value,
            note = document.getElementById("note").value;

        cell1.innerHTML = cname;
        cell2.innerHTML = date;
        cell3.innerHTML = amt;
        cell5.innerHTML = note;

        temp += parseInt(amt);
        document.getElementById("dlbl").innerHTML = temp;

        total();

    }
    return temp;



}


function credit() {

    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),


            cname = document.getElementById("cname").value,
            date = document.getElementById("date").value,
            amt = document.getElementById("amt").value,
            note = document.getElementById("note").value;


        cell1.innerHTML = cname;
        cell2.innerHTML = date;
        cell4.innerHTML = amt;
        cell5.innerHTML = note;

        temp1 += parseInt(amt);
        document.getElementById('clbl').innerHTML = temp1;

        total();
    }
    return temp1;


}

function total() {
    document.getElementById('total').innerHTML = temp-temp1;
}