

   



 export const data = {
      labels: ['SL'],
      datasets: [
          {
              data: [80, 20],
              backgroundColor: ['#FF6384', '#36A2EB'],
          },
      ],
  }
  
  
  export const plugins = [{
      beforeDraw: function (chart) {
          var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "top";
          var text = "Foo-bar",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
      }
  }]
  
  export const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
          labels: {
              render: 'percentage',
              fontColor: ['green', 'white', 'red'],
              precision: 2
          }
      },
  }



  // <Doughnut
  // options={options}
  // data={data}
  // plugins={plugins}
  // />