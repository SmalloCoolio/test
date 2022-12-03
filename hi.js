function validateForm(){
  let x = document.getElementById("ten").value;
  let y = document.getElementById("tuoi").value;
  let z = document.getElementById("dienthoai").value;
  
  if (x == ""){
    alert("Hãy viết tên bạn trước!");
    return false;
  }
  else if (y == ""){
    alert("Hãy viết tuổi bạn trước!");
    return false;
  }
  else if (z == ""){
    alert("Hãy viết số điện thoại!");
    return false;
  }
  else {
    return true;
  }
}