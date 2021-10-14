import React, { useState } from 'react'
import '../styles/userDash.css'
import GoogleMapReact from 'google-map-react'
import ky from 'ky'
import Footer from '../landingPage/footer'
import UserHeader from './userHeader'
import Profile from '../misc/profile'

const AnyReactComponent = () => (
  <div>
    <img src="./marker.png" alt="" width={50} height={50} />
  </div>
)

function UserDash() {
  const [myLoc, setMyLoc] = useState()
  const [message, setMessage] = useState('')

  async function sendMessage() {
    const json = await ky
      .post(`${process.env.REACT_APP_BACKEND_URL}/sendMessage`, {
        json: { message },
      })
      .json()
    console.log(json)
  }
  function initMap(position) {
    const loc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    setMyLoc(loc)
    setMessage(
      `NIRBHAYA-FEARLESS-PVT-LTD
       YOUR FRIEND SAYS,
       Please Help Me, I am at location lat: ${loc.lat}, lng: ${loc.lng}`
    )
  }
  function errorHandler(err) {
    if (err.code === 1) {
      alert('Error: Access is denied!')
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!')
    }
  }
  if (navigator.geolocation) {
    const options = { timeout: 60000 }
    navigator.geolocation.getCurrentPosition(initMap, errorHandler, options)
  } else {
    alert('Sorry, browser does not support geolocation!')
  }
  return (
    <div className="user-dash">
      <UserHeader />
    </div>
      <div id="user-map" className="user-map" style={{ height: '100vh', width: '100%' }}>
      {' '}
      {myLoc && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnqTH6Fp4WVRJt9zDxgQpG4VNSS85UKsM' }}
          defaultCenter={myLoc}
          defaultZoom={18}
        >
          <AnyReactComponent lat={myLoc.lat} lng={myLoc.lng} text="My Marker" />
        </GoogleMapReact>
      )}
     </div>
     <Profile/>
     <Footer/>
     </div>
  )
}

export default UserDash
