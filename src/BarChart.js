import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

export function BarChart()
{
    ChartJS.register(
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement,
        Title,
        Tooltip,
        Legend
      );
    
      const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const data = {
        labels,
        datasets: [
          {
            label: 'Relax time',
            data: [18, 20, 21, 22, 19, 18, 23],
            borderColor: 'rgba(2, 247, 84, 0.5)',
            backgroundColor: 'rgba(2, 247, 84, 0.5)'
          },
          {
            label: 'Sleep time',
            data: [22, 21, 23, 20, 20, 22, 21],
            borderColor: 'rgba(2, 104, 247, 0.5)',
            backgroundColor: 'rgba(2, 104, 247, 0.5)'
          },
          {
            label: 'Wake time',
            data: [8, 6, 8, 7, 7, 5, 9],
            borderColor: 'rgba(247, 120, 2, 0.5)',
            backgroundColor: 'rgba(247, 120, 2, 0.5)'
          },
          {
            label: 'Sleep quality',
            data: [7, 3, 9, 4, 5, 4, 4],
            borderColor: 'rgba(247, 231, 2, 0.5)',
            backgroundColor: 'rgba(247, 231, 2, 0.5)'
          }
        ]
      }

      const options = {
        responsive: true,
        scales: {
          y: {
            min: 0,
            max: 24
          }
        },
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };

      return (
        <div className="canvas">
            <Line options={options} data={data} />
        </div>
      )
}