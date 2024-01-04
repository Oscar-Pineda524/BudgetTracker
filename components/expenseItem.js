import {currencyFormatter} from '@/library/utils';

function ExpenseItem({color, title, total}){
    return(
        <button>
        <div className="flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl">
        <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px] rounded-full " style={{backgroundColor: color}}/>
            <h4 className="capitalize text-white">{title}</h4>
        </div>
        <p className='text-white'>{currencyFormatter(total)}</p>
        </div>
        </button>
    );
}

export default ExpenseItem;
   