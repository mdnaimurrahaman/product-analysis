import React from 'react';
import './AnalysisProgress.css'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const AnalysisProgress = () => {
    const data = [
      {
        month: "Mar",
        investment: 100000,
        sell: 241,
        revenue: 10401,
      },
      {
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500,
      },
      {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010,
      },
      {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405,
      },
      {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900,
      },
      {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000,
      },
    ];
    return (
     
        <div className='chart-container'>
            <div>
              <p className='text-center fw-bold'>Month Wise Sell</p>
              <ComposedChart className='chart-detail' width={800} height={300} data={data} margin={{right:60}}>
                <Tooltip/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Legend/>
                <CartesianGrid stroke='#f5f5f5'/>
                <Area type="monotone" dataKey="investment" fill="#8884d8" stroke='#8884d8'/>
                <Bar dataKey="sell" barSize={20} fill="#413ea0"/>
                <Line type="monotone" dataKey="revenue" stroke='#ff7300'/>
              </ComposedChart>
            </div>

            <div className='mt-4'>
              <p className='text-center fw-bold'>Investment vs Revnue </p>
              <BarChart className='chart-detail' width={800} height={300} data={data} margin={{right:30, top:20,left:20, bottom:5}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="month"/>
              <YAxis/>
              <Legend/>
              <Tooltip/>
              <Bar dataKey="investment" stackId="a" fill="#f7c3ed"/>
              <Bar dataKey="revenue" stackId="a" fill="#c96088"/>
              </BarChart>
            </div>
        </div>
   
    );
};

export default AnalysisProgress;