import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../Api/Api'

const Subjectlist = () => {

    const [subjects, setSubjects] = useState([])

    const fetchSubjects = async () => {
        try {
            const res = await api.get("/subjects")

            const subject =
                res.data && res.data.subjects
                    ? res.data.subjects
                    : (Array.isArray(res.data) ? res.data : [])

            setSubjects(subject)

        } catch (error) {
            console.log(error.message)
            setSubjects([])
        }
    }

    useEffect(() => {
        fetchSubjects()
    }, [])

    const handleDelete = async (id) => {
        try {
            await api.delete(`/subjects/${id}`)
            fetchSubjects()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200'>

            <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
                <h2 className='text-2xl font-bold text-gray-500'>
                    Manage Subjects
                </h2>

                <Link
                    to="/subjects/add"
                    className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors whitespace-nowrap'
                >
                    + Add New Subject
                </Link>
            </div>

            <div className='overflow-x-auto border border-gray-200 rounded-md'>
                <table className='w-full text-left border-collapse'>

                    <thead>
                        <tr className='bg-gray-100 border border-gray-200'>
                            <th className='p-4 font-semibold text-gray-700'>
                                Subject Details
                            </th>

                            <th className='p-4 font-semibold text-gray-700'>
                                Department
                            </th>

                            <th className='p-4 font-semibold text-gray-700'>
                                Credits
                            </th>

                            <th className='p-4 font-semibold text-gray-700'>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-200'>

                        {subjects && subjects.length > 0 ? (
                            subjects.map((s) => (

                                <tr key={s._id} className='hover:bg-gray-100'>

                                    <td className='p-4'>
                                        <div className='font-bold text-gray-800'>
                                            {s.subjectName}
                                        </div>

                                        <div className='text-sm text-gray-500'>
                                            Code: {s.subjectCode}
                                        </div>
                                    </td>

                                    <td className='p-4'>
                                        {s.department}
                                    </td>

                                    <td className='p-4'>
                                        {s.credits}
                                    </td>

                                    <td className='p-4 space-x-3'>
                                        <Link
                                            className='text-blue-600 hover:underline'
                                            to={`/subjects/edit/${s._id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className='text-red-600 hover:underline'
                                            onClick={() => handleDelete(s._id)}
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
                                    No subjects available.
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Subjectlist