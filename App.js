import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import React, { useState } from 'react';

import ContactListItem from './components/ContactListItem';
import ContactItemInput from './components/ContactItemInput';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  const [contactList, setContactList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addContactItemHandler = (contactItem) => {
    setContactList(contactList => [...contactList, {key: Math.random().toString(), value: contactItem } ]);
    setIsAddMode(false);
  }

  const removeContactItemHandler = itemId => {
    setContactList(
      contactList => {
        return contactList.filter((item) => item.key !== itemId);
      }
    );
  }


  return (
    <View style={styles.screen}>
    <Text style={styles.myTitle}>Lab 4: UI Basics in React Native FOL: e_ramadani2</Text>
    <ContactItemInput visible={isAddMode} onCancel={() => setIsAddMode(false)} onAddItem={addContactItemHandler} />
    <FlatList style={styles.list}
      data={contactList}
      renderItem={
        (itemData) => (
          <ContactListItem
            id={itemData.item.key}
            onDelete={removeContactItemHandler}
            item={itemData.item.value}
          />
        )
      }
    />
      <Button style={styles.myButton} title="Add New Contact" onPress={() => setIsAddMode(true)} />
  </View>

  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50,
    backgroundColor: '#a00a25',
    maxHeight: '100%',
    minHeight: '100%',
    
  },
  myTitle:{
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 40,
  },
  list:{
    marginBottom:10,
  },
  myButton: {
    position: 'absolute',
    marginBottom: 1000,
  }
    
  
});
