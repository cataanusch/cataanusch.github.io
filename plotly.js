var trace1 = {
    x: ['From The Start', 'Falling Behind', 'Let You Break My Heart Again', 'Valentine', 'Promise', 'A Night To Remember', 'I Wish You Love', 'Like the Movies', 'Fragile', 'Lovesick'],
    y: [472.9, 220.6, 217.7, 216.1, 156.2, 99.7, 82.8, 81.2, 59.5, 56.2],
    type: 'bar',
    marker: {
        color: 'rgb(142,124,195)'
    }
};

var data = [trace1];

var layout = {
    title: 'Cantidad de reproducciones de canciones de Laufey en Spotify',
    font: {
        family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: { title: 'Canciones' },
    yaxis: {
        title: 'Total de reproducciones (en MM)',
        range: [0, 500],
        dtick: 50,
        zeroline: false,
        gridwidth: 2
    },
    bargap: 2
};

Plotly.newPlot('Graph', data, layout);
