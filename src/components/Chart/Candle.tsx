import ApexChart from 'react-apexcharts';

const Candle = ({ candleData }: any) => {
  return (
    <>
      <ApexChart
        width='800px'
        type='candlestick'
        series={[
          {
            data:
              candleData.data.slice(-100).map((candle: any) => {
                return {
                  x: candle[0],
                  y: [candle[1], candle[3], candle[4], candle[2]],
                };
              }) ?? [],
          },
        ]}
        options={{
          theme: {
            mode: 'light',
          },
          chart: {
            toolbar: {
              show: false,
            },
            background: 'transparent',
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#cf314a',
                downward: '#02c076',
              },
            },
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            opposite: true,
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </>
  );
};

export default Candle;
