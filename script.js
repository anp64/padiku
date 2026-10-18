"use strict";

const daftarArtikel = [
    {
        id: 1,
        judul: "Cara Menyemai Benih Padi yang Benar",
        kategori: "Budidaya",
        tanggal: "2023-06-01",
    },
    {
        id: 2,
        judul: "Mengenali dan Mengendalikan Wereng",
        kategori: "Hama",
        tanggal: "2023-06-01",
    },
    {
        id: 3,
        judul: "Cara Mengeringkan Gabah Setelah Panen",
        kategori: "Pasca Panen",
        tanggal: "2023-06-01",
    },
    {
        id: 4,
        judul: "Pemanfaatan Sekam Padi untuk Media Tanam",
        kategori: "Pasca Panen",
        tanggal: "2023-06-01",
    },

]

console.log("data dummy berhasil dimuat", daftarArtikel);

function tampilkanArtikel() {

    const tbody = document.getElementById("tabel-artikel");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (daftarArtikel.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted py-3">Belum ada artikel.</td></tr>`;
        return;
    }

    daftarArtikel.forEach(function(artikel, index) {
        const baris = 
        `<tr>
            <td>${index + 1}</td>
            <td>${artikel.judul}</td>
            <td><span class="badge badge-padiku">${artikel.kategori}</span></td>
            <td>${artikel.tanggal}</td>
            <td><a href="#" class="btn btn-sm btn-padiku">baca</a></td>
        </tr>
        `;

        tbody.innerHTML += baris;
    });
}

$(document).ready(function() {

    
    tampilkanArtikel();

    $("#btn-tambah").click(function() {
        const artikelBaru = {
            id: daftarArtikel.length + 1,
            judul: "Artikel Dummy baru dari jquery",
            kategori: "umum",
            tanggal: "hari ini",
        };
        daftarArtikel.push(artikelBaru);
        tampilkanArtikel();
    });

    
    $("#form-login").on("submit", function(event) {
        event.preventDefault(); 

        const email = $("#input-email").val().trim();
        const password = $("#input-password").val().trim();

        if (email === "" || password === "") {
            $("#alert-login").fadeIn();
        } else {
            $("#alert-login").fadeOut();
            alert("Login berhasil!");
            
            setTimeout(function() {
                alert("login berhasil");
            }, 400);
        }
    });
    
});