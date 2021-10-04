import React from 'react'
import '../styles/aadhar.css'

function Aadhar() {
    return (
        <div>
            <form>
                <input type="file" placeholder="choose your aadhar photo"/>
                <input type="submit" />
                <button><a href="/userDash">User</a></button>
                <button><a href="/herodash">Hero</a></button>
                
            </form>
        </div>
    )
}

export default Aadhar
