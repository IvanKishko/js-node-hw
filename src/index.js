const keys = ["A", "S", "D", "W", "F", "SHIFT", "Q", "E"];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function updateKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyDisplay.textContent = keys[currentKeyIndex];
}

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  if (pressedKey === keys[currentKeyIndex]) {
    PNotify.success({
      text: `Правильно! Ви натиснули "${pressedKey}".`,
      delay: 500,
    });
    updateKey();
  } else {
    PNotify.error({
      text: `Неправильно! Ви натиснули "${pressedKey}", а потрібно "${keys[currentKeyIndex]}".`,
      delay: 500,
    });
  }
});

updateKey();

//todo TASK 2
const chart = document.getElementById("sales-chart");
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      borderColor: "#2196f3",
      borderWidth: 2,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    legend: {
      display: true,
      position: "top",
    },
  },
  x: {
    title: {
      display: true,
      text: "Дні місяця",
    },
  },
  y: {
    title: {
      display: true,
      text: "Продажі (грн)",
    },
  },
};

const salesChart = new Chart(chart, config);
