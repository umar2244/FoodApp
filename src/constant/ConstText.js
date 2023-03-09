// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import COLOR from '../Assets/Colors';

// const ConstText = props => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.6}
//       onPress={props.onPress}
//       disabled={!props.onPress}
//       style={[props.container]}>
//       {props.label && (
//         <Text
//           style={[
//             {
//               fontSize: props.fontSize || 10,
//               color: props.color || COLOR.white,
//               marginTop: props.marginTop || 0,
//               marginBottom: props.marginBottom || 0,
//               marginLeft: props.marginLeft || 0,
//               marginRight: props.marginRight || 0,
//               alignSelf: props.alignSelf || 'flex-start',
//               fontWeight: props.fontWeight,
//               fontStyle: props.fontStyle,
//               // fontFamily: props.fontFamily || Font.regular,
//             },
//             props.textStyle,
//           ]}>
//           {props.label}
//           {props.children}
//         </Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// export default ConstText;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import {Font} from '../Assets/fonts';

const ConstText = ({
  fontFamily,
  fontSize,
  fontWeight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  color,
  title,
  styles,
  alignSelf,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles,
        {
          fontSize: fontSize || 10,
          marginLeft: marginLeft || 0,
          marginRight: marginRight || 0,
          fontWeight: fontWeight || '300',
          color: color || COLOR.white,
          marginBottom: marginBottom || 0,
          marginTop: marginTop || 0,
          fontFamily: fontFamily || Font.regular,
          alignSelf: alignSelf || 'flex-start',
        },
      ]}>
      {title}
    </Text>
  );
};

export default ConstText;

const styles = StyleSheet.create({});
