document.getElementById("calculateButton").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const timePeriod = parseFloat(document.getElementById("timePeriod").value);
    const compoundingFrequency = parseFloat(document.getElementById("compoundingFrequency").value);

    let investmentValue = principal;
    let labels = [];
    let dataInvestment = [];
    let dataProfit = [];

    for (let period = 1; period <= timePeriod * compoundingFrequency; period++) {
        investmentValue *= (1 + interestRate / compoundingFrequency);
        labels.push(period / compoundingFrequency);
        dataInvestment.push(investmentValue);
        dataProfit.push(investmentValue - principal);
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `After ${timePeriod} years, your investment will be approximately ₹${investmentValue.toFixed(2)}`;

    updateChart(labels, dataInvestment, dataProfit);
});

function updateChart(labels, dataInvestment, dataProfit) {
    var ctx = document.getElementById("chart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Investment", "Profit"],
            datasets: [{
                data: [dataInvestment[dataInvestment.length - 1], dataProfit[dataProfit.length - 1]],
                backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)"]
            }]
        }
    });
}


