// Initialize a Line chart in the container with the ID chart1
/* global c3, _ */

(function () {
  'use strict';
  // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   monthsLabel = _.map(months, function (item) {
  //     return item.toUpperCase();
  //   }),
  //   series = _.times(12, _.random.bind(_, 30, 40));

  c3.generate({
    bindto: '#chart1',
    axis: {
      x: {
        padding: 0
      },
      y: {
        padding: 0,
        show: false
      }
    },
    legend: {
      hide: true
    },
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250, 100, 150, 200]
      ],
      type: 'area-spline'
    },
    grid: {
      x: {
        lines: [
          {value: 0},
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5},
          {value: 6},
          {value: 7},
          {value: 8}

        ]
      }
    }
  });

  c3.generate({
    size: {
      width: 380
    },
    axis: {
      x: {
        type: 'category',
        categories: ['USA', 'FRA', 'ITA', 'NZ', 'RSA', 'ESP'],
        padding: {
          top: 30
        },
        height: 20
      }
    },
    bindto: '#c3-chart-bar-1',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250]
      ],
      type: 'bar'
    },
    legend: {
      hide: true
    },
    bar: {
      width: 40
    }
  });

  c3.generate({
    bindto: '#c3-chart-donut-1',
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'donut',
      onclick: function (d, i) {
        console.log('onclick', d, i);
      },
      onmouseover: function (d, i) {
        console.log('onmouseover', d, i);
      },
      onmouseout: function (d, i) {
        console.log('onmouseout', d, i);
      }
    },
    size: {
      width: 150
    },
    donut: {
      width: 6,
      title: 'Iris Petal Width'
    },
    legend: {
      show: false
    },
    interaction: {
      enabled: false
    }
  });

  c3.generate({
    bindto: '#c3-chart-donut-2',
    data: {
      columns: [
        ['data1', 10],
        ['data2', 120]
      ],
      type: 'donut',
      onclick: function (d, i) {
        console.log('onclick', d, i);
      },
      onmouseover: function (d, i) {
        console.log('onmouseover', d, i);
      },
      onmouseout: function (d, i) {
        console.log('onmouseout', d, i);
      }
    },
    size: {
      width: 150
    },
    donut: {
      width: 6,
      title: 'Iris Petal Width'
    },
    legend: {
      show: false
    },
    interaction: {
      enabled: false
    }
  });

  c3.generate({
    size: {
      width: 380
    },
    axis: {
      x: {
        type: 'category',
        categories: ['USA', 'FRA', 'ITA', 'NZ', 'RSA', 'ESP'],
        padding: {
          top: 30
        },
        height: 20
      }
    },
    bindto: '#c3-chart-bar-2',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250]
      ],
      type: 'bar'
    },
    legend: {
      hide: true
    },
    bar: {
      width: 40
    }
  });

  c3.generate({
    bindto: '#c3-chart-5',
    axis: {
      x: {
        type: 'category',
        categories: ['USA', 'FRA', 'ITA', 'NZ', 'RSA', 'ESP']
      }
    },
    data: {
      columns: [
        ['data1', 30, 80, 100, 50, 150, 70]
      ],
      type: 'spline'
    },
    grid: {
      y: {
        lines: [
          {value: 0},
          {value: 20},
          {value: 40},
          {value: 60},
          {value: 80},
          {value: 100},
          {value: 120},
          {value: 140},
          {value: 160}

        ]
      }
    }

  });

  c3.generate({
    size: {
      width: 380
    },
    axis: {
      y: {
        show: false
      }
    },
    bindto: '#c3-chart-bar-3',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250, 30, 100, 400, 150, 250]
      ],
      type: 'bar'
    },
    legend: {
      hide: true
    },
    bar: {
      width: 20
    }
  });

  c3.generate({
    bindto: '#c3-chart-donut-3',
    data: {
      columns: [
        ['data1', 40],
        ['data2', 120],
        ['data3', 40],
        ['data4', 70]
      ],
      type: 'donut',
      onclick: function (d, i) {
        console.log('onclick', d, i);
      },
      onmouseover: function (d, i) {
        console.log('onmouseover', d, i);
      },
      onmouseout: function (d, i) {
        console.log('onmouseout', d, i);
      }
    },
    size: {
      width: 360
    },
    donut: {
      width: 6
    },
    legend: {
      position: 'right'
    }
  });

}());
