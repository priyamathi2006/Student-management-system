import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center px-4'>
      <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-300'>

        {/* Header */}
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-blue-600'>
            Student Management System
          </h1>
          <p className='text-gray-500 text-sm mt-2'>
            Login to manage student records
          </p>
        </div>

        {/* Login Form */}
        <form className='space-y-5'>

          {/* Email */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Email
            </label>
            <input
              type="email"
              placeholder='Enter your email'
              className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Password
            </label>
            <input
              type="password"
              placeholder='Enter your password'
              className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer'
          >
            Login
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login