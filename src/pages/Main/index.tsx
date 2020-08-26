import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import * as Location from 'expo-location';

import { Container, StyledMap } from './styles';
import MapView, {Marker} from 'react-native-maps';

import MapMarker from './MapMarker';

import mapMarkerIconPath from './assets/mapMarkerIcon.png';

const LATITUDE_DELTA = 1 / 50;
const LONGITUDE_DELTA = 1 / 50;

const initialLatitude = -6.0349452;
const initialLongitude = -37.0271417;

interface SelfPosionState {
  loading: boolean;
  coors: {
    latitude: number;
    longitude: number;
  };
}

const Main: React.FC = () => {
  const mapRef = useRef<MapView>(null);

  const [selfPosition, setSelfPosition] = useState({ loading: true } as SelfPosionState);
  const [data] = useState([
    {
      id: 1,
      latitude: -6.034241,
      longitude: -37.0160112,
      name: 'Alan'
    },
    {
      id: 2,
      latitude: -6.0344344,
      longitude: -37.0211658,
      name: 'Honey'
    }
  ]);

  const loadAndSetSelfPosition = useCallback(async () => {
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High, //
      enableHighAccuracy: true,
    });

    const { latitude, longitude } = location.coords;

    setSelfPosition({
      loading: false,
      coors: {
        latitude,
        longitude,
      },
    });
  }, []);

  useEffect(() => {
    async function loadAndSetPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== Location.PermissionStatus.GRANTED) {
        return;
      }

      if (!mapRef.current) {
        return;
      }

      try {
        await loadAndSetSelfPosition();
      } catch (e) {
        //
      }
    }

    loadAndSetPosition();
  }, [loadAndSetSelfPosition]);


  const initialRegion = useMemo(() => {
    return {
      latitude: initialLatitude,
      longitude: initialLongitude,

      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  }, [initialLatitude, initialLongitude]);


  return (
    <Container>
      <StyledMap ref={mapRef} initialRegion={initialRegion}>
        {!selfPosition.loading && <Marker coordinate={selfPosition.coors} />}


        {data.map((element) => (
          <MapMarker
            key={element.id}
            coordinate={{
              latitude: element.latitude,
              longitude: element.longitude,
            }}
            title={element.name}
            imageSource={mapMarkerIconPath}
          />
        ))}
      </StyledMap>
    </Container>
  );
};

export default Main;
