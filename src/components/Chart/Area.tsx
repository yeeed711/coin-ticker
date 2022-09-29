import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../atoms';

const Area = ({ data }: any) => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ApexChart
        width='760px'
        type='area'
        series={[
          {
            name: '거래량',
            data:
              data?.data.slice(-50).map((candle: any) => {
                return [candle[0], candle[5]];
              }) ?? [],
          },
        ]}
        options={{
          theme: { mode: isDark ? 'dark' : 'light' },
          xaxis: { type: 'datetime' },
          chart: {
            toolbar: { show: false },
            zoom: { autoScaleYaxis: true },
            background: 'transparent',
          },
          dataLabels: { enabled: false },
          stroke: { curve: 'smooth' },
        }}
      />
    </>
  );
};

export default Area;
