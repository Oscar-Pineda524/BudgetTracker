import {currencyFormatter} from '@/library/utils'
import ExpenseItem from '@/components/expenseItem'

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
      <ExpenseItem/>

    </div>
  </section>
  </main>
  );
}
