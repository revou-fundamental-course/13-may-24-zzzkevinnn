function validation(){ 
    if (input != ''){
        
    }else {
        alert("Input kosong");
    }
}

function hitungLuas() {
    let alas = document.getElementById("Alas").value
    let tinggi = document.getElementById("Tinggi").value
    let luasSegitiga = 0.5 * alas *tinggi
    document.getElementById("hasilLuas").innerHTML = luasSegitiga;
}

function hitungKeliling() {
    let nilaiA = document.getElementById("nilai-a").value
    let nilaiB = document.getElementById("nilai-b").value
    let nilaiC = document.getElementById("nilai-c").value
    let kelilingSegitiga = parseInt(nilaiA) + parseInt(nilaiB) + parseInt(nilaiC) ; 
    // let kelilingSegitiga = nilaiA + parseIntparsenilaiB) + parseInt(nilaiC) ; 
    document.getElementById("hasilKeliling").innerHTML = kelilingSegitiga;
}
let kelilingSegitiga = false;
function buttonGanti() {
    
    if (kelilingSegitiga == false) {
        kelilingSegitiga = true
        document.getElementById("keliling-segitiga").style.display = 'block'
        document.getElementById("luas-segitiga").style.display = 'none'
    }else{ 
        kelilingSegitiga = false;
        document.getElementById("keliling-segitiga").style.display = 'none'
        document.getElementById("luas-segitiga").style.display = 'block'
    }
}

document.getElementsByClassName("reset")

