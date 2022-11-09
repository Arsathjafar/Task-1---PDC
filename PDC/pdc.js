var rIndex,
    table = document.getElementById("table");



function checkEmptyInput() {
    var isEmpty = false,
        rnum = document.getElementById("rnum").value,
        rdate = document.getElementById("rdate").value,
        inum = document.getElementById("inum").value,
        idate = document.getElementById("idate").value,
        cnum = document.getElementById("cnum").value,
        cdate = document.getElementById("cdate").value,
        bname = document.getElementById("bname").value,
        fdate = document.getElementById("fdate").value;


    if (rnum === "") {
        alert("Receipt Number Cannot Be Empty");
        isEmpty = true;
    }
    else if (rdate === "") {
        alert("Receipt Date Cannot Be Empty");
        isEmpty = true;
    }
    else if (inum === "") {
        alert("Invoice Number Cannot Be Empty");
        isEmpty = true;
    }
    else if (idate === "") {
        alert("Invoice Date Cannot Be Empty");
        isEmpty = true;
    }
    else if (cnum === "") {
        alert("Cheque number Cannot Be Empty");
        isEmpty = true;
    }
    else if (cdate === "") {
        alert("Cheque received date Cannot Be Empty");
        isEmpty = true;
    }
    else if (bname === "") {
        alert("Bank name Cannot Be Empty");
        isEmpty = true;
    }
    else if (fdate === "") {
        alert("Cheque future date Cannot Be Empty");
        isEmpty = true;
    }


    return isEmpty;
}

var r = 1;
var temp = {};


function addHtmlTableRow() {

  
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            cell8 = newRow.insertCell(7),
            cell9 = newRow.insertCell(8),
            cell10 = newRow.insertCell(9),

            rnum = document.getElementById("rnum").value,
            rdate = document.getElementById("rdate").value,
            inum = document.getElementById("inum").value,
            idate = document.getElementById("idate").value,
            cnum = document.getElementById("cnum").value,
            cdate = document.getElementById("cdate").value,
            bname = document.getElementById("bname").value,
            fdate = document.getElementById("fdate").value,
            status = document.getElementById("list").value,
            note = document.getElementById("note").value;

        

        cell1.innerHTML = rnum;
        cell2.innerHTML = rdate;
        cell3.innerHTML = inum;
        cell4.innerHTML = idate;
        cell5.innerHTML = cnum;
        cell6.innerHTML = cdate;
        cell7.innerHTML = bname;
        cell8.innerHTML = fdate;
        cell9.innerHTML = status;
        cell10.innerHTML = note;

        document.getElementById("rnum").value = "";
        document.getElementById("rdate").value = "";
        document.getElementById("inum").value = "";
        document.getElementById("idate").value = "";
        document.getElementById("cnum").value = "";
        document.getElementById("cdate").value = "";
        document.getElementById("bname").value = "";
        document.getElementById("fdate").value = "";
        document.getElementById("list").value = "Select the cheque";
        document.getElementById("note").value = "";
        selectedRowToInput();

        temp[r] = { "rnum": rnum, "rdate": rdate, "inum": inum, "idate": idate, "cnum": cnum, "cdate": cdate, "bname": bname, "fdate": fdate, "status": status };
        var futureDate = temp[r]["fdate"];

        var dt = new Date();
        var d = dt.getDate();
        if (d < 10) d = '0' + d;
        var m = dt.getMonth() + 1;
        var y = dt.getFullYear();

        var current = y + "-" + m + "-" + d;
        if (current === temp[r]["fdate"]) {
            alert("The Cheque is bounced on tomorrow");
        }
        r += 1;
        
    }
}

function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("rnum").value = this.cells[0].innerHTML;
            document.getElementById("rdate").value = this.cells[1].innerHTML;
            document.getElementById("inum").value = this.cells[2].innerHTML;
            document.getElementById("idate").value = this.cells[3].innerHTML;
            document.getElementById("cnum").value = this.cells[4].innerHTML;
            document.getElementById("cdate").value = this.cells[5].innerHTML;
            document.getElementById("bname").value = this.cells[6].innerHTML;
            document.getElementById("fdate").value = this.cells[7].innerHTML;
            document.getElementById("list").value = this.cells[8].innerHTML;
            document.getElementById("note").value = this.cells[9].innerHTML;
        };
    }
}


function editHtmlTbleSelectedRow() {
    var rnum = document.getElementById("rnum").value,
        rdate = document.getElementById("rdate").value,
        inum = document.getElementById("inum").value,
        idate = document.getElementById("idate").value,
        cnum = document.getElementById("cnum").value,
        cdate = document.getElementById("cdate").value,
        bname = document.getElementById("bname").value,
        fdate = document.getElementById("fdate").value,
        status = document.getElementById("list").value,
        note = document.getElementById("note").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = rnum;
        table.rows[rIndex].cells[1].innerHTML = rdate;
        table.rows[rIndex].cells[2].innerHTML = inum;
        table.rows[rIndex].cells[3].innerHTML = idate;
        table.rows[rIndex].cells[4].innerHTML = cnum;
        table.rows[rIndex].cells[5].innerHTML = cdate;
        table.rows[rIndex].cells[6].innerHTML = bname;
        table.rows[rIndex].cells[7].innerHTML = fdate;
        table.rows[rIndex].cells[8].innerHTML = status;
        table.rows[rIndex].cells[9].innerHTML = note;
    }
    document.getElementById("rnum").value = "";
    document.getElementById("rdate").value = "";
    document.getElementById("inum").value = "";
    document.getElementById("idate").value = "";
    document.getElementById("cnum").value = "";
    document.getElementById("cdate").value = "";
    document.getElementById("bname").value = "";
    document.getElementById("fdate").value = "";
    document.getElementById("list").value = "Select the cheque";
    document.getElementById("note").value = "";
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    document.getElementById("rnum").value = "";
    document.getElementById("rdate").value = "";
    document.getElementById("inum").value = "";
    document.getElementById("idate").value = "";
    document.getElementById("cnum").value = "";
    document.getElementById("cdate").value = "";
    document.getElementById("bname").value = "";
    document.getElementById("fdate").value = "";
    document.getElementById("list").value = "";
    document.getElementById("note").value = "";
}

