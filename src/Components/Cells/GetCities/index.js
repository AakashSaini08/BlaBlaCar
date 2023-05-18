import React, { useEffect } from "react";
import CustomInput from "../../Atoms/CustomInput";
// import Header from '../../Atoms/Header'
// import { STRINGS } from '../../../Shared/Constants'
// import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
import axios from "axios";
import { MAP_API_KEY } from "../../../Services/Api/Constants";

export default function GetCities({
  searchedLocation,
  setSearchedLocation = () => {},
  setCity = () => {},
  setCoordinates = () => {},
  customInputNeeded = true,
}) {
  const getCities = async (query) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${query}&key=${MAP_API_KEY}`
      );

      // Process the response and extract city information
      const cities = response?.data?.results?.map((result) => {
        return result.formatted_address;
      });
      const coordinates = response?.data?.results[0]?.geometry?.location;
      setCity(cities);
      setCoordinates({
        latitiude: coordinates?.lat,
        longitude: coordinates?.lng,
        cities: cities,
      });
      // console.log(cities,coordinates?.lat,coordinates?.lng,"cityData"); // Print the cities to the console or update your state with the city data
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const time = setTimeout(() => {
      getCities(searchedLocation);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [searchedLocation]);

  const handleChange = (value) => {
    setSearchedLocation(value);
  };
  return (
    <div className="section-content">
      {customInputNeeded && (
        <CustomInput
          placeHolder=" Enter the full address"
          type={"text"}
          state={searchedLocation}
          setState={setSearchedLocation}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}
