import { Marker } from 'react-native-maps';

import styled from 'styled-components/native';

export const StyledtMarker = styled(Marker)`
  width: 64px;
  height: 63px;
`;

export const MarkerContent = styled.View`
  padding-top: 4px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background: #3f96bc;
`;

export const MarkerImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 28px;
  height: 30px;

  align-self: center;
`;

export const MarkerFooter = styled.View`
  align-items: center;

  height: 16px;

  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  background: #3EABCD;
`;

export const MarkerFooterText = styled.Text`
  font-size: 9px;
  font-weight: bold;

  color: #fff;
`;

export const MarkerFooterSquare = styled.View`
  width: 7px;
  height: 7px;

  transform: rotate(45deg);

  background: #3EABCD;
`;
