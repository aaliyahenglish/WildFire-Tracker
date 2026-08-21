import GoogleMapReact from 'google-map-react';

const Map = ({
    center = { lat: 37.7749, lng: -122.4194 },
    zoom = 6
}) => {
    return (
        <div classname="map" style={{ width: '100vw', height: '100vh' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )
}
export default Map;