var ctx = document.getElementById('myChart').getContext('2d');

var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas Mensais',
        data: [65, 59, 80, 81, 56, 55], // Aqui você coloca seus dados
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)', // Azul claro
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)', // Azul
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// line chart


var ctxa = document.getElementById('line-chart').getContext('2d');

var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Lucro',
        data: [200, 300, 400, 600, 500, 700], // Dados de lucro
        borderColor: 'rgb(75, 192, 192)', 
        fill: false
    }, {
        label: 'Despesas',
        data: [100, 150, 200, 250, 300, 350], // Dados de despesas
        borderColor: 'rgb(255, 99, 132)', 
        fill: false
    }]
};

var myChart = new Chart(ctxa, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctxz = document.getElementById('radar-chart').getContext('2d');

var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        data: [2000, 1500], // Dados de lucro e despesas
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'], // Cores para as fatias
        borderColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'], // Cores das bordas
        borderWidth: 1
    }]
};

var myChart = new Chart(ctxz, {
    type: 'pie',
    data: data

});


var ctxzy = document.getElementById('mixed-chart').getContext('2d');

var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Lucro',
        data: [200, 300, 400, 600, 500, 700], // Dados de lucro
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Verde para as barras
        borderColor: 'rgb(75, 192, 192)', 
        type: 'bar' // Tipo de gráfico: barras
    }, {
        label: 'Despesas',
        data: [100, 150, 200, 250, 300, 350], // Dados de despesas
        borderColor: 'rgb(255, 99, 132)', // Vermelho para as linhas
        fill: false, 
        type: 'line' 
    }]
};

var myChart = new Chart(ctxzy, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});