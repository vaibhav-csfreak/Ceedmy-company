import React, { useEffect } from "react";
import Chart from "chart.js";

function Reports() {
  useEffect(() => {
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    new Chart(document.getElementById("bar-chart"), {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "# of Ratings",

            label: "Ratings",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Ratings Recieved From Customers",
          fontSize: 25,
        },
        scales: {
          xAxes: [
            {
              barPercentage: 0.5,
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    var chart = new Chart(document.getElementById("myChart"), {
      type: "doughnut",
      data: {
        labels: ["Shirts", "Pants", "Trousers", "Lehenga-choli", "Blazers"],
        datasets: [
          {
            data: [10, 20, 30, 40, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Product based on category",
          fontSize: 25,
        },
      },
    });
  }, []);
  return (
    <div className="container w-300">
      <canvas id="bar-chart"></canvas>;<canvas id="myChart"></canvas>;
    </div>
  );
}

export default Reports;
