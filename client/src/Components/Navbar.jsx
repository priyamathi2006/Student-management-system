import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50'>

      <div className='max-w-6xl mx-auto px-4'>

        <div className='flex items-center justify-between h-16'>

          <Link to="/" className='text-2xl font-bold text-blue-600'>
            StudentAdmin
          </Link>

          <div className='flex space-x-6 items-center'>

            <Link
              to="/students"
              className='text-gray-700 font-semibold hover:text-blue-600'
            >
              Students
            </Link>

            <Link
              to="/subjects"
              className='text-gray-700 font-semibold hover:text-blue-600'
            >
              Subjects
            </Link>

            <button
              className='px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold cursor-pointer transition-all'
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar