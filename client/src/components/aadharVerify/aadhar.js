import React from 'react'
import '../styles/aadhar.css'

function Aadhar() {
    return (
        <div className="aadhar">
             <div className="aadhar-header">
             <div className="logo">
                 <div className="logo-name">Nirbhaya</div>
             </div>
             <div className="aadhar-page-title">Aadhar Authentication <i class="fas fa-fingerprint"></i></div>
             </div>
             <div className="aadhar-body">
             <form>
                <input type="file" placeholder="choose your aadhar photo"/>
                <input type="submit" />
            </form>
            <button><a href="/userDash">User</a></button>
            <button><a href="/herodash">Hero</a></button>
            
             </div>


        

        </div>
    )
}

export default Aadhar
