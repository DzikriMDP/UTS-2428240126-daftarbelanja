let nama = document.getElementById("nama");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(nama.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    if (localStorage.getItem("Barang") === null) {
        localStorage.setItem("Barang", "[]");
    }

Data.push({
    nama: nama.value,
    jumlah: jumlah.value,
    keterangan: keterangan.value
});
console.log(Data);

localStorage.setItem("Barang", JSON.stringify(Data));
TambahBarang();
}

function TampilBarang() {
    let hasil = JSON.parse(localStorage.getItem("Barang"));
}
TampilBarang();