function manip() {
    var ten_avg = (parseInt(document.getElementById("10_1").value) + parseInt(document.getElementById("10_2").value) + parseInt(document.getElementById("10_3").value))/6;
    
    let t11 = parseFloat(document.getElementById("11_1").value,1)/4.5;
    var e11 = parseFloat(document.getElementById("11_2").value,1)/4.5;
    var m11 = parseFloat(document.getElementById("11_3").value,1)/4.5;
    var p11 = parseFloat(document.getElementById("11_4").value,1)/3.5;
    var c11 = parseFloat(document.getElementById("11_5").value,1)/3.5;
    var b11 = parseFloat(document.getElementById("11_6").value,1)/3.5; 

    let t12 = parseInt(document.getElementById("12_1").value);
    var e12 = parseInt(document.getElementById("12_2").value);
    var m12 = parseInt(document.getElementById("12_3").value);
    var p12 = parseInt(document.getElementById("12_4").value);
    var c12 = parseInt(document.getElementById("12_5").value);
    var b12 = parseInt(document.getElementById("12_6").value); 

    var tt = parseFloat(ten_avg + t11 + t12,1);
    var et = parseFloat(ten_avg + e11 + e12,1);
    var mt = parseFloat(ten_avg + m11 + m12,1);
    var pt = parseFloat(ten_avg + p11 + p12,1);
    var ct = parseFloat(ten_avg + c11 + c12,1);
    var bt = parseFloat(ten_avg + b11 + b12,1);

    var cutoff = Math.round(mt + pt/2 + ct/2);
    var total = Math.round((ten_avg*6)+t11+e11+m11+p11+c11+b11+t12+e12+m12+p12+c12+b12);
 console.log(cutoff,total);

 document.getElementById("ten_avg").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg1").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg2").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg3").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg4").innerHTML = ten_avg.toFixed(1);
 document.getElementById("ten_avg5").innerHTML = ten_avg.toFixed(1);

 document.getElementById("t11").innerHTML = t11.toFixed(1);
 document.getElementById("t12").innerHTML = t12;
 document.getElementById("tt").innerHTML = Math.round(tt);

 document.getElementById("e11").innerHTML = e11.toFixed(1);
 document.getElementById("e12").innerHTML = e12;
 document.getElementById("et").innerHTML = Math.round(et);

 document.getElementById("m11").innerHTML = m11.toFixed(1);
 document.getElementById("m12").innerHTML = m12;
 document.getElementById("mt").innerHTML = Math.round(mt);

 document.getElementById("p11").innerHTML = p11.toFixed(1);
 document.getElementById("p12").innerHTML = p12;
 document.getElementById("pt").innerHTML = Math.round(pt);

 document.getElementById("c11").innerHTML = c11.toFixed(1);
 document.getElementById("c12").innerHTML = c12;
 document.getElementById("ct").innerHTML = Math.round(ct);

 document.getElementById("b11").innerHTML = b11.toFixed(1);
 document.getElementById("b12").innerHTML = b12;
 document.getElementById("bt").innerHTML = Math.round(bt);

 document.getElementById("total").innerHTML = total;
 document.getElementById("cutoff").innerHTML = cutoff;

}
function PrintDiv() 
   {  
       var divContents = document.getElementById("content2").innerHTML;  
       var printWindow = window.open('', '', 'height=200,width=400');  
       printWindow.document.write('<html><head><title>Cutoff Calculation VCET</title>');  
       printWindow.document.write('</head><body >');  
       printWindow.document.write(divContents);  
       printWindow.document.write('</body></html>');  
       printWindow.document.close();  
       printWindow.print();  
    }  