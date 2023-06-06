import { gql } from '@apollo/client';

export const fetchWeatherQueries = gql`
  query MyQuery (
    $current_weather: String
      $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
      $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,windgusts_10m,uv_index,uv_index_clear_sky"
      $latitude: String!
      $longitude: String!
      $timezone: String!
  )  {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        cloudcover
        is_day
        precipitation
        rain
        relativehumidity_2m
        showers
        temperature_2m
      }
      hourly_units {
        snowfall
        time
        uv_index
        uv_index_clear_sky
        visibility
        apparent_temperature
        cloudcover
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        is_day
        precipitation
        precipitation_probability
        relativehumidity_2m
        rain
        showers
        weathercode
        temperature_2m
        snow_depth
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQueries;
