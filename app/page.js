"use client"

import {currencyFormatter} from '@/library/utils'

import ExpenseItem from '@/components/expenseItem'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);


const DUMMY_DATA = [
  {
    id: 1,
    title: "entertainment",
    color: "#8ecae6",
    total: 50,
  },
  {
    id: 2,
    title: "Gas",
    color: "#219ebc",
    total: 120,
    },
  {
    id: 3,
    title: "Groceries",
    color: "#ffb703",
    total: 80,
  },
  {
    id: 4,
    title: "Rent",
    color: "#fb8500",
    total: 975,
    },
  {
    id: 5,
    title: "Electricity",
    color: "#023047",
    total: 40,
    },


]

export default function Home() {
  return (
  <main className="container max-w-2xl px-6 mx-auto">
  <section className="py-3">
    <small className=" text-gray-400 text-md">my balance</small>
    <h2 className="text-4xl font-bold text-white">{currencyFormatter(100000)}</h2>
  </section>
  <section className="flex items-center gap-2 py-3">
    <button className="btn btn-primary ">+ Expenses</button>
    <button className="btn btn-primary-outline">+ Income</button>
  </section>
  <section className='py-6'>

    {/*expenses*/}
    <h3 className='text-2xl text-white'>My Expenses</h3>
    <div className="flex flex-col gap-4 mt-6">
      {DUMMY_DATA.map(expense =>{
        return (<ExpenseItem 
        color={expense.color}
        title={expense.title}
        total={expense.total}
        />
        );
        })}
    </div>
  </section>

  {/* Chart Section */}
  <section className='py-6 '>
    <h3 className=' text-2xl text-white'>Stats</h3>
    <div className='w-1/2 mx-auto'>
      <Doughnut data={{
        labels: DUMMY_DATA.map(expense => expense.title),
        datasets: [{
          label: "Expenses",
          data: DUMMY_DATA.map(expense => expense.total),
          backgroundColor: DUMMY_DATA.map(expense => expense.color),
          borderColor: ['#18181b'],
          borderWidth: 5
        }]
      }}/>
    </div>

  </section>

  </main>
  );
}
