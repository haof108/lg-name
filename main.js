var username = ["Trần Lê Phương Anh","Nguyễn Thị Thùy Duyên","Lê Hoàng Ngọc Hà","Nguyễn Nam Hải","Trương Văn Hào","Huỳnh Thị Bảo Hân","Nguyễn Ngọc Gia Hân","Nguyễn Thị Thu Hoàng","Trần Quang Huy","Trần Đặng Kim Huyền","Trương Hồng Bảo Khanh","Trương Hồng Bảo Khánh","Nguyễn Hữu Minh Khoa","Nguyễn Văn Khoa","Phan Thị Khánh Ly","Nguyễn Ngọc Mai","Phan Nguyễn Hà My","Nguyễn Trần Khánh Ngân","Phan Ngọc Tuyết Ngân","Võ Thị Khánh Ngọc","Hứa Đình Khôi Nguyên","Nguyễn Thị Thảo Nguyên","Đỗ Nguyễn Trọng Nhân","Hồ Yến Nhi","Phùng Hoàng Bảo Như","Phan Kiều Oanh","Đặng Nguyễn Ngọc Phương","Trần Quang","Vương Trần Minh Quân","Trần Lê Uyên Thảo","Nguyễn Đức Thịnh","Trần Thị Thanh Thúy","Mai Nguyễn Anh Thư","Nguyễn Chí Tín","Hồ Lê Bảo Trân","Nguyễn Trần Anh Tuấn","Trần Thị Kiều Vy","Phan Chu Anh Quân","Thái Tấn Anh Khoa"]
var matkhau =["16082008","07112008","02022008","26122008","18082008","25062008","02072008","14122008","17072008","12122008","27052008","27052008","10062008","15012008","13052008","31072008","17052008","23012008","31122008","07082008","16112008","26092008","30112008","17032008","14082008","23082008","26112008","14072008","26122008","31012008","06112008","19092008","03012008","16012008","01092008","28032008","18042008","29072008","11012008"]

function kiemtra(){
    console.log(username[0]);
    console.log(1);
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu
  const email = document.getElementById('emailForm').value;
  const password = document.getElementById('passwordForm').value;
  const school =document.getElementById('SchoolForm').value;
  // Kiểm tra xem đăng nhập có thành công hay không
  let ok = true;
  for(let i = 0;i<39;i++){
    console.log(username[i]);
    console.log(matkhau[i]);
  }
  for(let i = 0;i<39;i++){
    if (email === username[i]){
        if(matkhau[i] === password) {
          window.location.assign('https://haof108.github.io/newyear95/nn.html', '_blank');
          
        let lastWord = email.split(" ").pop();
          console.log(lastWord);
          localStorage.setItem("schoolit",school);
          localStorage.setItem("name",lastWord);
          ok = false;
        }
        else document.querySelector('.error-message').innerHTML = 'Email hoặc mật khẩu không chính xác';
      }
    
  }
  if(ok === true)  document.querySelector('.error-message').innerHTML = 'Email hoặc mật khẩu không chính xác'; 
}
function admin(){  
  window.open('https://www.facebook.com/haof08', '_blank');
}
function password(){
  
  const iconElement = document.querySelector('.form-item-icon2');
  const iconElementan = document.querySelector('.form-item-icon3');
  const passwordInput = document.querySelector('#passwordForm');
  iconElement.style.display = 'none';
  iconElementan.style.display= 'block';
  passwordInput.type='text';
}
function password2(){
  
  const iconElement = document.querySelector('.form-item-icon2');
  const iconElementan = document.querySelector('.form-item-icon3');
  const passwordInput = document.querySelector('#passwordForm');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'none ';
  passwordInput.type='password';
}
function thongbao(){
document.getElementById("thong-bao2").innerHTML = 'Hiện tại website không hỗ trợ cho tính năng này';
document.getElementById("thong-bao").style.display = "block";
document.getElementById("lammo").style.display="block";
document.getElementById("close-btn").style.display = 'block';

}
function tatthongbao(){
  document.getElementById("thong-bao").style.display = "none";
document.getElementById("lammo").style.display="none";
document.getElementsByClassName("close-btn").style.display="none";
}
// JS web 2
var ok = false;
function nhac(){
document.getElementById("audio-player").play();
setTimeout(function() {
if(ok===true){
  document.querySelector('#notification3').classList.remove('show');  
}
if(ok===false){
document.querySelector('#notification3').classList.add('show');
console.log('Hello, world!');
var cm = document.querySelector("#text");
// document.querySelector('text').style.width = "96px";
cm.style.height ="81px";
cm.style.width="96%";
ok=true; 

startTimer();
date();
}
}, 5000)
}
function messicon()
{
setTimeout(function() {

document.querySelector('.admin').style.display = 'block';
document.querySelector('.admin2').style.display = 'block';
 document.querySelector('.tinnhan').style.display='block';
 document.querySelector('.tinnhan').style.color='black';
document.querySelector("#time").style.display = 'block';
 document.querySelector('.iconmes').style.display = 'block';
document.querySelector('.iconmes').style.opacity = '1';

}, 5400)
}
function bell(){
  const iconElement = document.querySelector('#notification3');
  const iconElementan = document.querySelector('#notification2');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'block';
}


function bell2(){
const iconElement = document.querySelector('#notification3');
  const iconElementan = document.querySelector('#notification2');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'none';
  
}
// var ok = false;
function startTimer() {
var time = 0;
setInterval(function() {
  time++;
  var minutes = Math.floor(time / 60);
  if(minutes>0){
  document.getElementById("time").style.left = '74%';
  document.getElementById("time").innerHTML = minutes+' '+'phút trước';
  }
}, 1000);
}
function date(){
var currentTime = new Date();
var hourrs = currentTime.getUTCHours() + 7;
if(hourrs>=24) {
hourrs -= 24;
}
var minutees = currentTime.getUTCMinutes();
console.log(hourrs + ":" + minutees);
if(minutees<10){
document.getElementById("date").innerHTML = hourrs+":"+'0'+minutees;
}
else{
  document.getElementById("date").innerHTML = hourrs+":"+minutees;
}
}
function messhome(){
document.getElementById("messhome").style.display ="block";
document.querySelector(".toggle").style.zIndex ="0";
// document.querySelector(".iconmes").style.zIndex ="0";
}
function dieuhuong(){
  // document.querySelector(".toggle").style.zIndex ="1";
  document.getElementById("messmain").style.display ="none";
  document.getElementById("messhome ").style.display ="block";
  console.log("nhớ fix lại là 1 còn bên noti mes là 0");
}
function messmain(){
  document.getElementById("messmain").style.display ="block";
  console.log(1);
}