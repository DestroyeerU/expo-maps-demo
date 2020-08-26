import React from 'react';
import { MarkerProps } from 'react-native-maps';
import { ImageSourcePropType } from 'react-native';

import {
  StyledtMarker,
  MarkerContent,
  MarkerImage,
  MarkerFooter,
  MarkerFooterText,
  MarkerFooterSquare,
} from './styles';

interface OwnProps {
  imageSource: ImageSourcePropType;
  title: string;
}

type Props = OwnProps & MarkerProps;

const MapMarker: React.FC<Props> = ({ imageSource, title, ...rest }) => {
  return (
    <StyledtMarker {...rest}>
      <MarkerContent>
        <MarkerImage source={imageSource} />
      </MarkerContent>

      <MarkerFooter>
        <MarkerFooterText>{title}</MarkerFooterText>
        <MarkerFooterSquare />
      </MarkerFooter>
    </StyledtMarker>
  );
};

export default MapMarker;
