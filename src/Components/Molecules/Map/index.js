import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MAP_API_KEY } from '../../../Services/Api/Constants';
// import { MAP_API_KEY } from '../../../Services/Constants';

const containerStyle = {
    width: '100%',
    height: '100%',
};

function MapContainer({ coordinates=JSON.stringify({}),getCityName=()=>{}}) {
 
  const [positionName,setPositionName]=useState("")
   
    const [latitude,setLatitude] = useState(JSON.parse(coordinates)?.latitiude)
    const [longitude,setLongitude] = useState(JSON.parse(coordinates)?.longitude)
    const center = {
        lat: latitude||0,
        lng: longitude||0
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_API_KEY
    })

    const [map, setMap] = useState(null)

 
    const handleMapClick = (event) => {
        
        setLatitude(event.latLng.lat())
        setLongitude(event.latLng.lng())
        getCityName(event.latLng.lat(),event.latLng.lng(),MAP_API_KEY).then(val=>setPositionName(val))
       
      };
    
    const onLoad = React.useCallback(function callback(map) {

        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
         map.setZoom(13)
        setMap(map)
        
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
   
  

    return isLoaded ? (
        <GoogleMap
            options={{
                       maxZoom:20
            }}
            mapContainerStyle={containerStyle}
            center={center}
         
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleMapClick}
            mapTypeId="satellite"
        >
            <Marker position={center}    title={positionName}         >
            </Marker>
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default MapContainer