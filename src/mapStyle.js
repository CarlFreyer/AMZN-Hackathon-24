export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'studiers',
      stops: [
        [-1, '#FFF'],
        [0, '#DC9B73'],
        [1, '#C68C68'],
        [2, '#B07C5C'],
        [3, '#9A6D51'],
        [4, '#845D45'],
        [5, '#6E4E3A'],
        [6, '#583E2E'],
        [7, '#422E22'],
        [8, '#2C1F17'],
        [9, '#16100C'],
        [10, '#000']
      ]
    },
    'fill-opacity': 0.8
  }
};

export const lineLayer = {
    id: 'lines',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#FFF',
      'line-width': 5
    }
  };