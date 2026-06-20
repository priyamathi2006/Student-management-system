import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from "../api/api.js" // Verified lowercase file folder paths

const Studentform = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        year: ""
    })
    
    const [errorMessage, setErrorMessage] = useState("")
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
        setErrorMessage("") 

        try {
            if (editMode) {
                // Axios will combine this into: http://localhost:3000/api/students/:id
                await api.put(`/students/${id}`, formData)
            } else {
                // Axios will combine this into: http://localhost:3000/api/students
                await api.post("/students", formData)
            }

            navigate("/students")
        } catch (error) {
            const serverError = error.response?.data?.error || error.response?.data?.message || error.message;
            console.log("Form Submission Error:", serverError);
            setErrorMessage(serverError);
        }
    }

    useEffect(() => {
        if (editMode) {
            const fetchStudent = async () => {
                try {
                    const res = await api.get(`/students/${id}`)
                    const student = res.data.student

                    setFormData({
                        name: student.name,
                        email: student.email,
                        phone: student.phone,
                        course: student.course,
                        year: student.year
                    })
                } catch (error) {
                    console.log(error.message)
                }
            }

            fetchStudent()
        }
    }, [id, editMode])

    return (
        <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border'>
            <div className='flex justify-between items-center border-b pb-4 mb-5'>
                <h2 className='text-2xl font-bold'>
                    {editMode ? "Edit Student" : "Add Student"}
                </h2>

                <Link to="/students" className='text-blue-600 hover:underline'>
                    Back
                </Link>
            </div>

            {errorMessage && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                    <strong>Submission Failure:</strong> {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                    <label className='block mb-1 font-semibold'>Student Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full border p-2 rounded'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-semibold'>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full border p-2 rounded'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-semibold'>Phone *</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full border p-2 rounded'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-semibold'>Course</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className='w-full border p-2 rounded'
                        required
                    />
                </div>

                <div>
                    <label className='block mb-1 font-semibold'>Year</label>
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className='w-full border p-2 rounded'
                        required
                    />
                </div>

                <div className='flex justify-end gap-3'>
                    <Link to="/students" className='bg-gray-200 px-4 py-2 rounded'>
                        Cancel
                    </Link>
                    <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded'>
                        {editMode ? "Update Student" : "Add Student"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Studentform;