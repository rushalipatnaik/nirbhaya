import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../styles/helpHero.css'

const AnyReactComponent = () => (
  <div>
    <img src="./marker.png" alt="" width={50} height={50} />
  </div>
)

function HelpHero({ data }) {
  return (
    <div className="hero-help" id="hero-help">
      <h1 style={{ textAlign: 'center', 'fontSize':'50px' }}>Emergency Help</h1>

      {data.map((d) => (
        <div style={{ width: '100vw', height: '30vw', margin: '20px 0' }}>
          {' '}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDSU-8MXJ558cQrTjG1xwkBsTqV2dyXOs8',
            }}
            defaultCenter={d.myLoc}
            defaultZoom={18}
          >
            <AnyReactComponent
              lat={d.myLoc.lat}
              lng={d.myLoc.lng}
              text="My Marker"
            />
          </GoogleMapReact>
          <button style={{'height':'5vw', 'width':'30vw','marginLeft':'35vw'}}>
            <a className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${d.myLoc.lat},${d.myLoc.lng}`}
            >
             Help {d.name}
            </a>
          </button>
        </div>
      ))}
    </div>
  )
}

export default HelpHero
