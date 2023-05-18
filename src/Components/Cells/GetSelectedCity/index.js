import { LocationIcon } from 'Assets';
import TextField from 'Components/atoms/TextField/TextField';
import { GEO_LOCATION_ERROR_MAPPING, PLACES_ADDRESS_COMPONENT, STRINGS } from 'Shared/Constants';
import { UTILITIES } from 'Shared/Utilities';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import './index.scss';
import SpinnerWrapper from '../SpinnerWrapper/SpinnerWrapper';

export function getAddressComponent(addressComponents, key) {
  let value = '';
  // eslint-disable-next-line max-len
  const postalCodeType = addressComponents.filter((aComp) => aComp.types.some((typesItem) => typesItem === key));
  if (postalCodeType != null && postalCodeType.length > 0) { value = postalCodeType[0].long_name; }
  return value;
}
function AutoComplete({ updateAddress, value }) {
  const [isLoading, setIsLoading] = useState(false);
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    // componentRestrictions: { country: 'ng' },
    fields: ['address_components', 'name', 'geometry'],
    types: ['establishment'],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options,
    );
    autoCompleteRef.current.addListener('place_changed', async () => {
      const place = await autoCompleteRef.current.getPlace();
      const { address_components: addressComponents } = place;
      const country = getAddressComponent(addressComponents, PLACES_ADDRESS_COMPONENT.COUNTRY);
      const state = getAddressComponent(addressComponents, PLACES_ADDRESS_COMPONENT.STATE);
      const city = getAddressComponent(addressComponents, PLACES_ADDRESS_COMPONENT.CITY);
      updateAddress({
        country,
        state,
        city,
        latitude: place?.geometry?.location?.lat(),
        longitude: place?.geometry?.location?.lng(),
      });
    });
  }, []);

  const getCurrentLocation = () => {
    setIsLoading(true);
    // geolocation callback to get coordinates
    const onGeoLocation = (geo) => {
      const autocomplete = autoCompleteRef.current;
      if (geo.coords) {
        const { latitude, longitude } = geo.coords;
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { location: new window.google.maps.LatLng(latitude, longitude) },
          (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
              setIsLoading(false);
              if (autocomplete && inputRef.current) {
                inputRef.current.value = results[0]?.formatted_address;
                autocomplete.set('place', results[0]);
              }
            } else {
              setIsLoading(false);
              toast.error('Not able to find region please update address manually');
              console.error(`Geocode was not successful for the following reason: ${status}`);
            }
          },
        );
      }
    };
    const errorCallback = (error) => {
      setIsLoading(false);
      if (GEO_LOCATION_ERROR_MAPPING[error.code]) {
        toast.error(GEO_LOCATION_ERROR_MAPPING[error.code]);
      } else {
        toast.error(STRINGS.SOMETHING_WENT_WRONG);
      }
    };
    // geolocation callback to get coordinates
    UTILITIES.getLocation(onGeoLocation, errorCallback);
  };

  return (
    <div className="location-autocomplete-container">
      <TextField ref={inputRef} defaultValue={value ? `${value?.city} ${value?.state} ${value?.country}` : ''} />
      <button type="button" className="btn-transparent locator-btn" onClick={getCurrentLocation}>
        <SpinnerWrapper isLoading={isLoading} defaultMessage="">
          <img src={LocationIcon} alt="Current location" />
        </SpinnerWrapper>

      </button>
    </div>
  );
}

export default AutoComplete;
