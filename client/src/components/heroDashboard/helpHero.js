import React from 'react'
import GoogleMapReact from 'google-map-react'

function HelpHero({ data }) {
  return (
    <div className="hero-help" id="hero-help">
      <h1 style={{ textAlign: 'center' }}>Emergency Help</h1>

      {data.map((d) => (
        <div style={{ width: '50vw', height: '400px', margin: '20px 0' }}>
          {' '}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDSU-8MXJ558cQrTjG1xwkBsTqV2dyXOs8',
            }}
            defaultCenter={d.myLoc}
            defaultZoom={18}
          >
          <AnyReactComponent
              lat={myLoc.lat}
              lng={myLoc.lng}
              text="My Marker"
            />
          </GoogleMapReact>
          <button><a href={`https://www.google.com/maps/search/?api=1&query={myLoc.lat},{myLoc.lng}`}>MAP</a></button>
        </div>
      ))}
    </div>
  )
}

export default HelpHero
