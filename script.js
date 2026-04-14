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
    let Data = JSON.parse(localStorage.getItem("Barang"));
  console.log(Data);

  Data.push({
    nama: nama.value,
    jumlah: jumlah.value,
    keterangan: keterangan.value,
  });
  console.log(Data);

  localStorage.setItem("Barang", JSON.stringify(Data));
  TambahBarang();
}

function TampilBarang() {
  let hasil = JSON.parse(localStorage.getItem("Barang"));

  document.getElementById("hasil").innerHTML = ""

  hasil.forEach((element) => {
    document.getElementById("hasil").innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${element.nama}</h5>
          <p class="card-text">Jumlah: ${element.jumlah}</p>
          <p class="card-text">Keterangan: ${element.keterangan}</p>
        </div>
      </div>`;
  });

}
TampilBarang();
