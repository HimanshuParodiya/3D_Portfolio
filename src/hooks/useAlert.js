import React, { useState } from 'react'


const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: "", type: "danger" })
    const showAlert = ({ text, type = "danger" }) => setAlert({ // text, type = "danger" default parameter
        show: true,
        text,
        type
    })
    const hideAlert = () => setAlert({
        show: false,
        text: "",
        type: "danger"
    })
    return { alert, showAlert, hideAlert }
}

export default useAlert

// why we need a custom hook?
// Because we gonna use it multiple times across the files

// hooks doesn't return jsx
// they return most often an object or an array
// in our case it going to return object containing alert, showAlert and hideAlert