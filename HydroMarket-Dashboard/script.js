document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".sidebar li");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".sidebar .active").classList.remove("active");
            this.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".sidebar li");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".sidebar .active").classList.remove("active");
            this.classList.add("active");
        });
    });

    // Générer la courbe pour "Finance Flow"
    const ctx = document.getElementById("financeChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Mois
            datasets: [{
                label: "Revenus (MAD)",
                data: [1200, 1500, 1800, 2000, 2500, 2908], // Données fictives
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.2)",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
const ctx = document.getElementById("financeChart").getContext("2d");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Revenus (MAD)",
            data: [1200, 1500, 1800, 2000, 2500, 2908],
            borderColor: "#28a745",
            backgroundColor: "rgba(40, 167, 69, 0.2)",
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,  // Permet d'ajuster la hauteur
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  }

  // Close dropdown when clicking outside
  window.addEventListener('click', function(e) {
    const dropdown = document.getElementById("profileDropdown");
    const profilePic = document.querySelector('.profil-pic');
    if (dropdown.style.display === "flex" && 
        !profilePic.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
