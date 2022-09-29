import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../atoms';

const Candle = ({ data }: any) => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ApexChart
        width='760px'
        type='candlestick'
        series={[
          {
            data:
              data?.data.slice(-100).map((candle: any) => {
                return {
                  x: candle[0],
                  y: [candle[1], candle[3], candle[4], candle[2]],
                };
              }) ?? [],
          },
        ]}
        options={{
          theme: {
            mode: isDark ? 'dark' : 'light',
          },
          chart: {
            toolbar: {
              show: false,
            },
            background: 'transparent',
            zoom: { autoScaleYaxis: true },
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
