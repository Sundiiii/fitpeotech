import React from 'react'
import { Avatar } from "@mui/material";
import { RiFileList2Line } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { BarChart, Bar, XAxis } from 'recharts';
import "./common.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import  { BsSearch} from 'react-icons/bs'

ChartJS.register(ArcElement, Tooltip, Legend);

function Home1() {
  
    //     //  pointRadius: 0,
     const data1 = [
        {
            name: 'jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'july',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <Avatar sx={{ bgcolor: "orange" }} >  <BsCoin />
                        </Avatar>
                        <h8>Earing</h8>
                    </div>

                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Avatar sx={{ bgcolor: "orange" }} >   <RiFileList2Line /></Avatar>
                        <h8>Order</h8>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Avatar sx={{ bgcolor: "orange" }}> < GiWallet /></Avatar>
                        <h8>Balance</h8>
                    </div>

                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Avatar sx={{ bgcolor: "orange" }} src="https://as2.ftcdn.net/v2/jpg/00/65/77/43/1000_F_65774302_ifzVqKJmYuEkkbA2BZHEIOEM9yqxObwx.jpg">
                        </Avatar>total Score

                    </div>
                </div>

            </div>
            <div className="charts">

                <div className='charts'>
                    <BarChart
                        width={600}
                        height={200}
                        data={data1}
                        // margin={{
                        //     top: 5,
                        //     // right: 30,
                        //     // left: 20,
                        //     bottom: 5,
                        // }}
                        padding={60}
                    >
                        <XAxis dataKey="name" />
                        <Bar dataKey="pv" fill="#3e0379ea" />
                        <Bar dataKey="uv" fill="#babad4" />
                    </BarChart>
                </div>
                <div className="charts">
                    <Doughnut
                        data={{                          
                            
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'Red',
        'Blue',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'Purple',
        'rgba(255, 159, 64, 0.2)',
      ],
  
      borderWidth: 0,
    },
  ],
  plugins:[{
    id: 'emptyDoughnut',
    afterDraw(chart, args, options) {
      const {datasets} = chart.data;
      const {color, width, radiusDecrease} = options;  
        const {chartArea: {left, top, right, bottom}, ctx,data} = chart;
        ctx.save();
        ctx.font='bolder 30px sans-serif';
        ctx.fillStyle='red';
       ctx.fillText('text hfjhfjjfgujnfhjfvn');
        ctx.stroke();
    }
  }]
                        }}
                    />
                  
                </div>
            </div>
            <footer className='header'>
        {/* <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div> */}
        <div className='header-left'>
        <h1>Product Sell</h1>
          <h6>product name</h6>
        </div>
        <div className='header-right'>
       <h3>         <BsSearch/>Search        </h3>
       <h6>Stock  <span style={{fontSize:'medium',color:'black',marginLeft:'1rem'}}>Price </span>      Total Sales</h6>
        </div>
      
    </footer>
            <div className='header'>
        <div className='header-left'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16clEwsUNIzY39gkk9Mw_AfUkaidLdxWnlg&usqp=CAU'/>
       
            <div className="info"></div>
        </div>
        <div className='header-right'>
        <h6>32 in stack      <span style={{fontSize:'medium',color:'black'}}> $ 45.99    </span><span style={{fontSize:'',color:'',marginLeft:'2rem'}}> 20</span> </h6>

        </div>
      
    </div>

        </main>
    )
}

export default Home1