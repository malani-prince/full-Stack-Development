import React from 'react'
import { useParams } from 'react-router-dom'

// hook is use for => Take the data from the URL

const User = () => {
    const { userId } = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4 text-center' >User: {userId}</div>
    )
}

export default User