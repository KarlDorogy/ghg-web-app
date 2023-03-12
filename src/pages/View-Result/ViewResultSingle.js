import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    plugins: {
      title: {
        display: true,
        text: '2019 Carbon Emissions',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  const labels = ['Facility 1', 'Facility 2', 'Facility 3'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [5,2,1],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: [2,1,3],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: [1,0,4],
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

function ViewResultSingle(){

    /*async function callAPI() {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.idToken.jwtToken
        console.log({ token })
        const requestInfo = {
          headers: {
            Authorization: token
          },
          queryStringParameters: { 
            id: 'e36bc896-8a81-4ce1-abf0-f2779f558e5a'
          }
        };
        await API.get('api4ef6c8be', '/ghgViewResult', requestInfo).then((response) => {
          setData(response)
          console.log(response)
        })
      }
    */


      
    return(
        <Bar options={options} data={data} />
    );





}
export default ViewResultSingle