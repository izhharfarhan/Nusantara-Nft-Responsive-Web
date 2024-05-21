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

const options = {
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 6,
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: 0,
        },
    },
    series: [
        {
            name: "Floor price (ETH)",
            data: [0.002, 0.016, 0.0017, 0.06, 0.023, 0.0322],
            color: "#1A56DB",
        },
    ],
    xaxis: {
        categories: [
            "01 February",
            "02 February",
            "03 February",
            "04 February",
            "05 February",
            "06 February",
            "07 February",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
};

if (
    document.getElementById("area-chart") &&
    typeof ApexCharts !== "undefined"
) {
    const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options
    );
    chart.render();
}


Highcharts.chart('chart-container', {
    chart: {
        type: 'column', // Mengatur tipe grafik menjadi bar chart
        backgroundColor: 'rgba(229, 231, 235, 0.2)',
        width: 750, // Lebar grafik
        height: 150 // Tinggi grafik
    },
    title: {
        text: null // Menghapus judul grafik
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar'],
        labels: {
            style: {
                fontSize: '0.8rem', // Ukuran label sumbu X
            }
        }
    }],
    yAxis: [{ // Sumbu Y pertama (kiri)
        title: {
            text: 'Volume (ETH)',
            style: {
                fontSize: '0.8rem' // Ukuran judul sumbu Y pertama
            }
        },
        labels: {
            style: {
                fontSize: '0.8rem' // Ukuran label sumbu Y pertama
            }
        },
        tickPositions: [0, 0.08, 0.16] // Nilai-nilai yang ditampilkan di sumbu Y pertama
    }, { // Sumbu Y kedua (kanan)
        title: {
            text: 'Average price (ETH)',
            style: {
                fontSize: '0.8rem' // Ukuran judul sumbu Y kedua
            }
        },
        labels: {
            style: {
                fontSize: '0.8rem' // Ukuran label sumbu Y kedua
            }
        },
        opposite: true, // Meletakkan sumbu Y di sebelah kanan
        tickPositions: [0.025, 0.075, 0.125], // Nilai-nilai yang ditampilkan di sumbu Y kedua
        gridLineColor: 'gray', // Warna garis antara sumbu Y pertama dan kedua
        gridLineWidth: 1 // Lebar garis antara sumbu Y pertama dan kedua
    }],
    plotOptions: {
        column: {
            pointWidth: 50 // Lebar setiap bar
        }
    },
    series: [{
        name: 'Tokyo',
        data: [0.118, 0.068],
        color: 'black', // Warna grafik bar
        showInLegend: false // Menghapus label seri dari legenda
    }]
});