function manip() {
    var ten_avg = (parseInt(document.getElementById("10_1").value) + parseInt(document.getElementById("10_2").value) + parseInt(document.getElementById("10_3").value))/6;
    var username = document.getElementById("username").value;
    var reg_no = document.getElementById("reg_no").value; 
    let t11 = parseFloat(document.getElementById("11_1").value)/4.5;
    var e11 = parseFloat(document.getElementById("11_2").value)/4.5;
    var m11 = parseFloat(document.getElementById("11_3").value)/4.5;
    var p11 = parseFloat(document.getElementById("11_4").value)/3.5;
    var c11 = parseFloat(document.getElementById("11_5").value)/3.5;
    var b11 = parseFloat(document.getElementById("11_6").value)/3.5; 

    let t12 = parseInt(document.getElementById("12_1").value)*3;
    var e12 = parseInt(document.getElementById("12_2").value)*3;
    var m12 = parseInt(document.getElementById("12_3").value)*3;
    var p12 = parseInt(document.getElementById("12_4").value);
    var c12 = parseInt(document.getElementById("12_5").value);
    var b12 = parseInt(document.getElementById("12_6").value); 

    var tt = parseFloat(ten_avg + t11 + t12);
    var et = parseFloat(ten_avg + e11 + e12);
    var mt = parseFloat(ten_avg + m11 + m12);
    var pt = parseFloat(ten_avg + p11 + p12);
    var ct = parseFloat(ten_avg + c11 + c12);
    var bt = parseFloat(ten_avg + b11 + b12);

    var cutoff = mt + pt/2 + ct/2;
    var total = ((ten_avg*6)+t11+e11+m11+p11+c11+b11+t12+e12+m12+p12+c12+b12);
 console.log(cutoff,total);

 document.getElementById("username_view").innerHTML = username;
 document.getElementById("ten_avg").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg1").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg2").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg3").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg4").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg5").innerHTML = ten_avg.toFixed(1);

 document.getElementById("t11").innerHTML = t11.toString().slice(0,4);
 document.getElementById("t12").innerHTML = t12;
 document.getElementById("tt").innerHTML = Math.round(tt);

 document.getElementById("e11").innerHTML = e11.toString().slice(0,4);
 document.getElementById("e12").innerHTML = e12;
 document.getElementById("et").innerHTML = Math.round(et);

 document.getElementById("m11").innerHTML = m11.toString().slice(0,4);
 document.getElementById("m12").innerHTML = m12;
 document.getElementById("mt").innerHTML = Math.round(mt);

 document.getElementById("p11").innerHTML = p11.toString().slice(0,4);
 document.getElementById("p12").innerHTML = p12;
 document.getElementById("pt").innerHTML = Math.round(pt);

 document.getElementById("c11").innerHTML = c11.toString().slice(0,4);
 document.getElementById("c12").innerHTML = c12;
 document.getElementById("ct").innerHTML = Math.round(ct);

 document.getElementById("b11").innerHTML = b11.toString().slice(0,4);
 document.getElementById("b12").innerHTML = b12;
 document.getElementById("bt").innerHTML = Math.round(bt);

 document.getElementById("total").innerHTML = Math.ceil(total);
 document.getElementById("cutoff").innerHTML = cutoff.toString().slice(0,5);

}
function validateForm() {
   if (document.getElementById("username").value==null) {
      alert("Null values not allowed");
   } 
 }
function PrintDiv() 
   {  
       var divContents = document.getElementById("content2").innerHTML;  
       var printWindow = window.open('', '', 'height=auto,width=auto');  
       printWindow.document.write('<html><head><title>Cutoff Calculation VCET</title>');  
       printWindow.document.write('</head><body><center> <div> <h1>VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY</h1><h2>(Autonomous)</h2><h3>(Approved by AICTE,New Delhi & Affilicated to Anna University,Chennai) Accredited by NAAC with \'A\' Grade</h3><h2>Thindal,Erode-638012,Tamilnadu,India</h2><h2><span>ADMISSION 2021-22</span></h2></div>');
       printWindow.document.write(divContents);  
       printWindow.document.write('</center></body></html>');  
       printWindow.document.close();  
       printWindow.print();  
    }  
