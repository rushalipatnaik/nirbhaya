import React, { useState } from 'react'
import './profile.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from '../../firebase'
import { auth } from '../../firebase';

function Profile() {
   const user = firebase.auth.currentUser;
   const name = user.displayName;
   const photo = user.photoURL;
   const [input, setInput] = useState('');
    return (
        <div id="hero-profile" className="about">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-content">
        <div className="name">
          <p> {name} </p>
         <form >
         <FormControl>
           <InputLabel>Contact 1</InputLabel>
           <Input className="input-value" value={input} onChange={event =>setInput(event.target.value)} />
         </FormControl>
         <Button className="submit-btn" disabled={!input} type="submit" variant="contained" color="primary">Save</Button>
         </form>
         <form >
        <FormControl>
           <InputLabel>Contact 2</InputLabel>
           <Input className="input-value" value={input} onChange={event =>setInput(event.target.value)} />
        </FormControl>
        <Button className="submit-btn" disabled={!input} type="submit" variant="contained" color="primary">Save</Button>
        </form>
      
        </div>

        <div className="photo" >
            <img src={photo} alt="pic" />
        </div>
        </div>
        </div>
    )
}

export default Profile