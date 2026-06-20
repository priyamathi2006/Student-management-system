import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../Api/Api'

const Studentlist = () => {

    const [students, setStudents] = useState([])

    const fetchStudents = async () => {
        try {
            const res = await api.get("/students")

            const studentData =
                res.data && res.data.students
                    ? res.data.students
                    : (Array.isArray(res.data) ? res.data : [])

            setStudents(studentData)

        } catch (error) {
            console.log(error.message)
            setStudents([])
        }
    }

    useEffect(() => {
        fetchStudents()
    }, [])

    const handleDelete = async (id) => {
        try {
            await api.delete(`/students/${id}`)
            fetchStudents()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200'>

            <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
                <h2 className='text-2xl font-bold text-gray-700'>
                    Manage Students
                </h2>

                <Link
                    to="/students/add"
                    className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded'
                >
                    + Add Student
                </Link>
            </div>

            <div className='overflow-x-auto border border-gray-200 rounded-md'>
                <table className='w-full text-left border-collapse'>

                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='p-4'>Student Details</th>
                            <th className='p-4'>Contact</th>
                            <th className='p-4'>Course</th>
                            <th className='p-4'>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-200'>

                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr
                                    key={student._id}
                                    className='hover:bg-gray-50'
                                >
                                    <td className='p-4'>
                                        <div className='font-semibold'>
                                            {student.name}
                                        </div>
                                        <div className='text-sm text-gray-500'>
                                            Year: {student.year}
                                        </div>
                                    </td>

                                    <td className='p-4'>
                                        <div>{student.email}</div>
                                        <div className='text-sm text-gray-500'>
                                            {student.phone}
                                        </div>
                                    </td>

                                    <td className='p-4'>
                                        {student.course}
                                    </td>

                                    <td className='p-4 space-x-3'>
                                        <Link
                                            to={`/students/edit/${student._id}`}
                                            className='text-blue-600 hover:underline'
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(student._id)}
                                            className='text-red-600 hover:underline'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className='p-8 text-center text-gray-500'
                                >
                                    No students registered yet.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Studentlist