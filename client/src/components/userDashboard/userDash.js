import React, { useState } from 'react'
import '../styles/userDash.css'
import GoogleMapReact from 'google-map-react'
import ky from 'ky'

// style this <for marker>
const AnyReactComponent = ({ text }) => <div>{text}</div>

function UserDash() {
  const [myLoc, setMyLoc] = useState()
  const [message, setMessage] = useState('')

  async function sendMessage() {
    const json = await ky
      .post(process.env.REACT_APP_BACKEND_URL, { json: { message } })
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
      `NIRBHAYA-COMPANY-LTD
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
    <div style={{ height: '400px', width: '100%' }}>
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
      <div>
        <button onClick={sendMessage}>Need Help!!!</button>
      </div>
    </div>
  )
}

export default UserDash
