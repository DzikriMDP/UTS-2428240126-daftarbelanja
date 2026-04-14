let nama = document.getElementById("nama");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
  console.log(nama.value)
  console.log(jumlah.value)
  console.log(keterangan.value)

  localStorage.setItem("nama", nama.value)
  localStorage.setItem("jumlah", jumlah.value)
  localStorage.setItem("keterangan", keterangan.value)

  if (localStorage.getItem("Barang") === null) {
    localStorage.setItem("Barang", "[]")
  }
    let Data = JSON.parse(localStorage.getItem("Barang"))
  console.log(Data)

  Data.push({
    nama: nama.value,
    jumlah: jumlah.value,
    keterangan: keterangan.value
  })
  console.log(Data)

  localStorage.setItem("Barang", JSON.stringify(Data))
  TambahBarang()
}

function TampilBarang() {
  let hasil = JSON.parse(localStorage.getItem("Barang"))

  document.getElementById("hasil").innerHTML = ""

  hasil.forEach((element) => {
    document.getElementById("list-barang").innerHTML += `<div class="col-lg-4 col-md-6">
          <h5 class="card-title">${element.nama}</h5>
          <p class="card-text">Jumlah: ${element.jumlah}</p>
          <p class="card-text">Keterangan: ${element.keterangan}</p>
      </div>`
  });

}
TampilBarang();
