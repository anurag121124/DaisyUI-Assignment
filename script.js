const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("change", () => {
        document.documentElement.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Revenue Line Chart
        const revenueCtx = document.getElementById("revenueChart")?.getContext("2d");
        if (revenueCtx) {
            new Chart(revenueCtx, {
                type: "line",
                data: {
                    labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024"],
                    datasets: [{
                        label: "Total Revenue ($)",
                        data: [45000, 58000, 62000, 75000, 82000, 95000],
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        tension: 0.3,
                        fill: true,
                    }, {
                        label: "Projected Revenue",
                        data: [45000, 58000, 62000, 75000, 82000, 110000],
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderDash: [5, 5],
                        tension: 0.3,
                        fill: true,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true }
                    },
                    plugins: { title: { display: true, text: "Quarterly Revenue Trends", } },
                },
            });
        }

        // Sales Distribution Pie Chart
        const salesCtx = document.getElementById("salesDistributionChart")?.getContext("2d");
        if (salesCtx) {
            new Chart(salesCtx, {
                type: "pie",
                data: {
                    labels: ["Online Store", "Marketplace Sales", "Direct Sales", "Affiliate Marketing"],
                    datasets: [{
                        data: [35, 25, 30, 10],
                        backgroundColor: [
                            "rgb(255, 99, 132)", // Pink
                            "rgb(54, 162, 235)", // Blue
                            "rgb(255, 205, 86)", // Yellow
                            "rgb(75, 192, 192)", // Green
                        ],
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { title: { display: true, text:"Sales Channel Distribution", }, legend:{ position:"bottom", }, },
                },
            });
        }
    });