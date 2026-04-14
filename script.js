let nama = document.getElementById("nama");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
  console.log(nama.value)
  console.log(jumlah.value)
  console.log(keterangan.value)

  if (localStorage.getItem("Barang") === null) {
    localStorage.setItem("Barang", "[]")
  }

    let Data = JSON.parse(localStorage.getItem("Barang"))
  console.log(data);

  Data.push({
    nama: nama.value,
    jumlah: jumlah.value,
    keterangan: keterangan.value
  })
  console.log(data)

  localStorage.setItem("Barang", JSON.stringify(data))

  TampilBarang();
}

function TampilBarang() {
  let hasil = JSON.parse(localStorage.getItem("Barang"))

  document.getElementById("hasil").innerHTML = ""

  hasil.forEach((element) => {
    document.getElementById("list-barang").innerHTML += `
          <h5 class="text-primary">${element.nama}</h5>
          <h6 class="text-primary">Jumlah: ${element.jumlah}</h6>
          <p class="text-primary">Keterangan: ${element.keterangan}</p>
      </div>`
  });

}
TampilBarang();
