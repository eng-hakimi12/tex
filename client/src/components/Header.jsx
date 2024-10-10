/* eslint-disable no-unused-vars */
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md h-52 sm:h-20' >
        <div className='sm:flex justify-between  items-center max-w-6xl mx-auto p-3 '>
            <Link to='/'>
      <h1 className='font-bold tex-sm sm: text-xl flex flex-wrap py-5'>
        <span className='text-slate-500'>Property texs</span>
        <span className='text-slate-700 pl-2'>Management System</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg items-center flex'>
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-600  ml-[66%] sm:ml-0' />
      </form>
      <ul className='flex gap-4  mt-5 sm:mt-0 justify-center '>
        
        <Link to='/'>
        <li className=' inline text-slate-700 hover:underline'>Home</li>
        </Link>

        <Link to='/about'>
        <li className='inline text-slate-700 hover:underline '>About</li>
        </Link>
        <Link to='/Dashboard'>
        <li className='inline text-slate-700 hover:underline '>Dashboard</li>
        </Link>
        <Link to='/Complaint'>
        <li className='inline text-slate-700 hover:underline '>Complaint</li>
        </Link>
        <Link to='/SingUp'>
        <li className=' text-slate-700 hover:underline   '>SingUp</li>
        </Link>
      </ul>
      </div>
    </header>
   
  )
}
