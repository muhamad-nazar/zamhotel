//Untuk Gambar di Heores
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".heroes-image");

    image.addEventListener("mousemove", (e) => {
        let rect = image.getBoundingClientRect();
        let x = (e.clientX - rect.left) / rect.width - 0.5;
        let y = (e.clientY - rect.top) / rect.height - 0.5;

        image.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${y * -20}deg) scale(1.1)`;
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
});

//Untuk Gambar di Features
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const image = card.querySelector(".features-image");

        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = (e.clientX - rect.left) / rect.width - 0.5;
            let y = (e.clientY - rect.top) / rect.height - 0.5;

            image.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${y * -15}deg) scale(1.1)`;
        });

        card.addEventListener("mouseleave", () => {
            image.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
        });
    });
});

//Untuk Elang Dan Gambar di Features
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const image = card.querySelector(".features-image");
        const leftEagle = card.querySelector(".elang-kiri");
        const rightEagle = card.querySelector(".elang-kanan");
        const button = card.querySelector(".detail-button");

        // Efek 3D saat hover
        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = (e.clientX - rect.left) / rect.width - 0.5;
            let y = (e.clientY - rect.top) / rect.height - 0.5;

            image.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${y * -15}deg) scale(1.1)`;
        });

        card.addEventListener("mouseleave", () => {
            image.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
        });

        // Efek elang & tombol muncul saat hover
        card.addEventListener("mouseenter", () => {
            leftEagle.style.opacity = "1";
            leftEagle.style.transform = "translateX(0)";

            rightEagle.style.opacity = "1";
            rightEagle.style.transform = "translateX(0)";

            button.style.opacity = "1";
            button.style.transform = "translate(-50%, -50%) scale(1)";
        });

        card.addEventListener("mouseleave", () => {
            leftEagle.style.opacity = "0";
            leftEagle.style.transform = "translateX(50px)";

            rightEagle.style.opacity = "0";
            rightEagle.style.transform = "translateX(-50px)";

            button.style.opacity = "0";
            button.style.transform = "translate(-50%, -50%) scale(0.8)";
        });
    });
});


//Untuk Navbar Sticky
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".navbar-brand img");

    function updateNavbar() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            header.classList.remove("transparent");
            logo.src = "asset/img/logo/zam-white.png"; // Ganti logo saat scroll
        } else {
            header.classList.add("transparent");
            header.classList.remove("scrolled");
            logo.src = "asset/img/logo/zam.png"; // Balikin logo awal
        }
    }

    updateNavbar(); // Jalankan saat halaman dimuat
    window.addEventListener("scroll", updateNavbar);
});


// Bottom Nav
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".bottom-bar a");

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Hapus class active dari semua menu
        menuItems.forEach((el) => el.classList.remove("active"));

        // Tambahkan class active ke menu yang diklik
        this.classList.add("active");
      });
    });
});

// Fungsi untuk Kode Undangan
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const kodeUndangan = urlParams.get("kode");

    if (kodeUndangan) {
        const inputField = document.getElementById("kodeUndangan");
        inputField.value = kodeUndangan;
        inputField.disabled = true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const kodeUndangan = urlParams.get("kode");

    if (kodeUndangan) {
        const inputField = document.getElementById("kode");
        inputField.value = kodeUndangan;
        inputField.disabled = true;
    }
});