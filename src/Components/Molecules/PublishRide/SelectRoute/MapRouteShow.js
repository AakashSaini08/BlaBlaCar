import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import "../styles.css"
import { useNavigate } from 'react-router-dom';
import { MAP_API_KEY } from '../../../../Services/Api/Constants';
const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapRouteShow = ({ coordinates, setPaths }) => {
  const [directions, setDirections] = useState([]);
  const [distances, setDistances] = useState([]);
  const [map, setMap] = useState(null);
  const navigate = useNavigate()
  const origin = { lat: coordinates?.pickUpLocation?.latitude, lng: coordinates?.pickUpLocation?.longitude }
  const destination = { lat: coordinates?.dropOfLocation?.latitude, lng: coordinates?.dropOfLocation?.longitude }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  });
  useEffect(() => {
    if (!origin?.lat) {
      navigate("/offer-seats/departure")
    }
  }, [])

  const directionsCallback = (response, status) => {
    if (status === 'OK' && response !== null) {
      setDirections(directions => [...directions, response]);
      setPaths(paths => [...paths, {
        path: response?.routes[0]?.summary,
        distance: response.routes[0].legs[0].distance.text,
        duration: response.routes[0].legs[0].duration.text,
        directions: response
      }]);
      setDistances(distances => [...distances, response.routes[0].legs[0].distance.text]);
    }
  };

  const onLoad = map => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsArray = [
      { origin, destination, provideRouteAlternatives: true, avoidTolls: false },
      { origin, destination, provideRouteAlternatives: true, avoidTolls: true },
    ];
    directionsArray.forEach(directions => {
      directionsService.route(
        {
          ...directions,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        directionsCallback
      );
    });
  };
  const onUnmount = () => {
    setMap(null);
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origin}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeId: 'roadmap'
      }}
    >

      {directions?.length > 1 && directions.map((direction, index) => (
        <DirectionsRenderer
          key={index}
          directions={direction}
          options={{
            map: map,
            polylineOptions: {
              strokeColor: !direction?.request?.avoidTolls ? 'grey' : '#00BFFF',
              strokeOpacity: 1,
              strokeWeight: 6,
            },
            markerOptions: {
              visible: true,
            },
          }}
        />
      ))}

    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapRouteShow;