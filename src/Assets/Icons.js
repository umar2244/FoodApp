import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import React from 'react';

const Icons = ({family, name, color, size, ...props}) => {
  let Family;
  switch (family) {
    case 'Octicons':
      Family = Octicons;
      break;
    case 'Entypo':
      Family = Entypo;
      break;
    case 'Ionicons':
      Family = Ionicons;
      break;

    case 'MaterialCommunityIcons':
      Family = MaterialCommunityIcons;
      break;
    case 'Feather':
      Family = Feather;
      break;

    case 'AntDesign':
      Family = AntDesign;
      break;

    case 'Fontisto':
      Family = Fontisto;
      break;

    case 'FontAwesome5':
      Family = FontAwesome5;
      break;
    default:
      Family = Ionicons;
  }

  return (
    <Family
      name={name || 'help-outline'}
      color={color || '#8e8e8e'}
      size={size || 14}
      {...props}
    />
  );
};

export default Icons;
