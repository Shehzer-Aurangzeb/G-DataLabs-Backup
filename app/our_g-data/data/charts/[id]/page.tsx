import React from 'react';
import Container from '@/components/UI/Containers';
import Main from '@/components/screens/OurGdata/Data/Chart';

export default function Consent() {
  return (
    <Container type="main" className="p-12 mobile:p-2 rounded-r-lg">
      <Main />
    </Container>
  );
}

// "use client"
// import React, { useState, useEffect } from 'react';
// import Container from '@/components/UI/Containers';
// import LineChart from '@/components/UI/LineChart';
// import { io } from 'socket.io-client';

// export default function Consent() {
// const socket = io('http://localhost:3000');
//   const [selectedTimeRange, setSelectedTimeRange] = useState('1d'); // Default to 1 day
//   const [chartData, setChartData] = useState([]);

//   const handleTimeRangeChange = (event:any) => {
//     setSelectedTimeRange(event.target.value);
//   };

//   const generateChartData = (timeRange:any) => {
//     if (timeRange === '1d') {
//       return [
//         {
//           x: ['2024-02-01 00:00:00', '2024-02-01 01:00:00', '2024-02-01 04:00:00', '2024-02-02 00:00:00'],
//           y: [10, 15, 13, 17],
//           type: 'scatter',
//           mode: 'lines+markers',
//           marker: { color: 'red' },
//         },
//       ];
//     } else if (timeRange === '15h') {
//       return [
//         {
//           x: ['2024-02-01 00:00:00', '2024-02-01 03:00:00', '2024-02-01 06:00:00', '2024-02-02 00:00:00'],
//           y: [30, 15, 13, 17, 23, 23],
//           type: 'scatter',
//           mode: 'lines+markers',
//           marker: { color: 'red' },
//         },
//       ];
//     }

//     return [];
//   };

//   useEffect(() => {
//     // Handle socket.io events here
//     socket.on('data-update', (newData) => {
//       setChartData(newData);
//       console.log('New data received from socket.io server: ', newData);
//     });

//     // Cleanup socket.io connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const chartLayout = {
//     title: 'My Line Chart',
//     xaxis: {
//       title: 'Time',
//       type: 'category',
//       tickmode: 'linear',
//       // Add other x-axis configuration as needed
//     },
//     yaxis: { title: 'Y-axis' },
//   };

//   return (
//     <Container type="main" className="p-12 mobile:p-2 rounded-r-lg">
//       <div>
//         <label htmlFor="timeRangeSelector">Select Time Range: </label>
//         <select id="timeRangeSelector" onChange={handleTimeRangeChange} value={selectedTimeRange}>
//           <option value="1d">1 Day</option>
//           <option value="15h">15 Hours</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <LineChart data={chartData} layout={chartLayout} />
//     </Container>
//   );
// }
