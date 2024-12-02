const ctx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Nivel', 'Python', 'Java', 'Sql', 'Analise de dados', 'Mobile', 'Html','Css','Javascript'],
        datasets: [{
            label: 'Habilidades do time',
            data: [65, 59, 90, 81, 56, 55, 60, 55, 55],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, 
        {
            label: 'Outros',
            data: [28, 48, 40, 19, 96, 27, 54, 55, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100,
                grid: {
                    color: '#cccccc'
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            },
            filler: {
                propagate: false
            },
            title: {
                display: true,
                text: 'Gráfico Radar de Habilidades'
            },
            chartArea: {
                backgroundColor: 'white'
            }
        }
    },
    plugins: [{
        id: 'customBackgroundColor',
        beforeDraw: (chart) => {
            const ctx = chart.ctx;
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    }]
});
