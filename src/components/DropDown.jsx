import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = ({passedData, ph, value, setValue}) => {
  const data = passedData;

  //   const [value, setValue] = useState(null);
  //   console.log(value);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={[styles.placeholderStyle]}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={ph}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
        // onChange(value);
        // console.log('selecte', item.value);
        // console.log('displayed', value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Roboto-Large',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  placeholderText: {
    color: 'red', // Change 'your_custom_color' to your desired color
  },
  placeholderStyle: {
    fontSize: 16,

    fontFamily: 'Roboto-Large',
    marginLeft: 5,
    fontWeight: 'bold',
    // backgroundColor: '#1c1b1f',
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',

    fontFamily: 'Roboto-Large',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
