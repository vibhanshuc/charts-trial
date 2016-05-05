// Initialize a Line chart in the container with the ID chart1
/* global Chartist, _ */

(function () {
  'use strict';
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthsLabel = _.map(months, function (item) {
      return item.toUpperCase();
    }),
    series = _.times(12, _.random.bind(_, 30, 40));

  var chart1  = c3.generate({
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
      },
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

  var chart2 = c3.generate({
    bindto: '#c3-chart-donut-1',
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    size: {
      width: 150
    },
    donut: {
      width: 6,
      title: "Iris Petal Width"
    },
    legend: {
      show: false
    },
    interaction: {
      enabled: false
    }
  });

  var chart3 = c3.generate({
    bindto: '#c3-chart-donut-2',
    data: {
      columns: [
        ['data1', 10],
        ['data2', 120]
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    size: {
      width: 150
    },
    donut: {
      width: 6,
      title: "Iris Petal Width"
    },
    legend: {
      show: false
    },
    interaction: {
      enabled: false
    }
  });

  var chart4  = c3.generate({
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
      },
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

  var chart5 = c3.generate({
    bindto: '#c3-chart-5',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250]
      ],
      type: 'spline'
    }
  });


}());


