import React from 'react'
import '../styles/aadhar.css'
import {Button, Input} from '@material-ui/core'

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
                <div>
                   <img className="auth-img" src={require('../img/Keys.png').default} />
                </div>
                <div>
                <form>
                <div className="aadhar-input-div">
                <div className="aadhar-input">
                <Input type="file" placeholder="choose your aadhar photo"/>
                </div>
                <div>
                <Button variant="contained" href="/aadhar/submit">Upload Aadhar</Button>
                </div>
                </div> 
            </form>
            <div className="user-clasify">
                <div className="user-btn">
                <Button variant="contained" color="secondary" href="/userDash">User</Button>
                </div>
                <div className="hero-btn">
                <Button variant="contained" color="primary" href="/herodash">Hero</Button>
                </div>
            
            
            </div>
                </div>
            
            
             </div>
        </div>
    )
}

export default Aadhar
