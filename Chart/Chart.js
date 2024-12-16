console.log("Memulai script...");

const ctx = document.getElementById("salesChart").getContext("2d");

const salesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "2022",
        data: [
          4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207,
          5945,
        ],
        backgroundColor: "rgba(0, 204, 255, 0.6)",
        borderColor: "rgb(34, 58, 167)",
        borderWidth: 1,
      },
      {
        label: "2023",
        data: [
          2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287,
          8689,
        ],
        backgroundColor: "rgba(179, 255, 0, 0.6)",
        borderColor: "rgb(0, 255, 42)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Laporan Penjualan Bulanan Tahun 2022 dan 2023",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

console.log("Chart berhasil dibuat.");
