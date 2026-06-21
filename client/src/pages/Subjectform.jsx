import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from "../api/api.js"

const Subjectform = () => {

    const [formData, setFormData] = useState({
        subjectName: "",
        subjectCode: "",
        department: "",
        credits: ""
    })

    const navigate = useNavigate()
    const { id } = useParams()
    const editMode = !!id

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (editMode) {
                await api.put(`/subjects/${id}`, formData)
            } else {
                await api.post("/subjects", formData)
            }

            navigate("/subjects")

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (editMode) {
            const fetchSubject = async () => {
                try {
                    const res = await api.get(`/subjects/${id}`)
                    const subject = res.data.subject

                    setFormData({
                        subjectName: subject.subjectName,
                        subjectCode: subject.subjectCode,
                        department: subject.department,
                        credits: subject.credits
                    })

                } catch (error) {
                    console.log(error.message)
                }
            }

            fetchSubject()
        }
    }, [id, editMode])

    return (
        <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200'>

            <div className='flex items-center justify-between border-b pb-4'>
                <h2 className='text-2xl font-bold text-gray-800'>
                    {editMode ? "Edit Subject" : "Add Subject"}
                </h2>

                <Link
                    className='text-blue-600 hover:underline text-sm font-medium'
                    to='/subjects'
                >
                    Back to List
                </Link>
            </div>

            <form className='space-y-5' onSubmit={handleSubmit}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='md:col-span-2'>
                        <label className='block text-gray-700 font-semibold mb-1'>
                            Subject Name *
                        </label>

                        <input
                            type="text"
                            name="subjectName"
                            value={formData.subjectName}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2.5 rounded'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 font-semibold mb-1'>
                            Subject Code *
                        </label>

                        <input
                            type="text"
                            name="subjectCode"
                            value={formData.subjectCode}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2.5 rounded'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 font-semibold mb-1'>
                            Department *
                        </label>

                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2.5 rounded'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 font-semibold mb-1'>
                            Credits
                        </label>

                        <input
                            type="number"
                            name="credits"
                            value={formData.credits}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2.5 rounded'
                        />
                    </div>

                </div>

                <div className='pt-4 flex justify-end gap-3'>
                    <Link
                        className='bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 px-5 rounded border border-gray-300'
                        to='/subjects'
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded'
                    >
                        {editMode ? "Update Subject" : "Add Subject"}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Subjectform