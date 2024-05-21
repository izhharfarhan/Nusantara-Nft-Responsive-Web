document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    const coinmarketcapWidget = document.getElementById(
        "coinmarketcap-widget-marquee"
    );

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");

                    // Tambahkan logika untuk menangani penempatan elemen div di belakang navbar saat hamburger menu aktif
                    const isActive = this.classList.contains("active");

                    if (isActive) {
                        coinmarketcapWidget.classList.remove("z-0"); // Hapus kelas z-0 saat hamburger menu aktif
                    } else {
                        coinmarketcapWidget.classList.add("z-0"); // Tambahkan kelas z-0 untuk menempatkan elemen di belakang saat hamburger menu tidak aktif
                    }
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");
                    coinmarketcapWidget.classList.remove("z-0"); // Hapus kelas z-0 saat menutup menu navbar
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");
                    coinmarketcapWidget.classList.remove("z-0"); // Hapus kelas z-0 saat menutup menu navbar
                }
            });
        }
    }
});