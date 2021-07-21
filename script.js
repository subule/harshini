var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["bookName"] = document.getElementById("bookName").value;
    formData["bookId"] = document.getElementById("bookId").value;
    formData["author"] = document.getElementById("author").value;
    formData["price"] = document.getElementById("price").value;
    formData["genre"] = document.getElementById("genre").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.department;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("bookName").value = "";
    document.getElementById("bookId").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("genre").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("bookName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("bookId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("author").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.bookName;
    selectedRow.cells[1].innerHTML = formData.bookId;
    selectedRow.cells[2].innerHTML = formData.author;
    selectedRow.cells[3].innerHTML = formData.price;
    selectedRow.cells[4].innerHTML = formData.genre;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("bookName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("bookNameValidationError").classList.contains("hide"))
            document.getElementById("bookNameValidationError").classList.add("hide");
    }
    return isValid;
}
function search_bookname() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('bookName');
     
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                
        }
    }
}
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
const ratings = {
    Theperfectus:3.6,
    Half_Girlfriend : 3.3,
    Murder_Mystries : 1.9,
    Roomno_108: 4.3,
    Sherlock_Homes: 4.74,
  };
  
  // total number of stars
  const starTotal = 5;
  
  for(const rating in ratings) {  
    const starPercentage = (ratings[rating] / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
  }