import ApexChart from 'react-apexcharts';

const Area = ({ candleData }: any) => {
  return (
    <>
      <ApexChart
        width='800px'
        type='area'
        series={[
          {
            name: '거래량',
            data:
              candleData.data.slice(-100).map((candle: any) => {
                return [candle[0], candle[5]];
              }) ?? [],
          },
        ]}
        options={{
          xaxis: { type: 'datetime' },
          chart: {
            toolbar: { show: false },
            zoom: { autoScaleYaxis: true },
          },
          dataLabels: { enabled: false },
          stroke: { curve: 'straight' },
        }}
      />
    </>
  );
};

export default Area;
