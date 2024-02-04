import React, { useState } from 'react'
import UserContext from './UserContext'

// similar to Outlet : header as it is footer as it is.
// children is the combination of the whole the component that are being used in the development. 
// It is generic name for passing data
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // In return statement we use the method called
    // USerContext.Provider and it take one parameter that is use for the data manipulation.
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {
                children
            }
        </UserContext.Provider>
    )
}

export default UserContextProvider