import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';


const ContactItemInput = props => {
    const [enteredContactNameItem, setContactNameItem] = useState();
    const [enteredContactEmailItem, setContactEmailItem] = useState();

    const contactNameItemInputHandler = (value) => {
    setContactNameItem(value);
    }

    const contactEmailItemInputHandler = (value) => {
        setContactEmailItem(value);
    }

    const addItemHandler = () => {
    props.onAddItem(enteredContactNameItem + ' / ' + enteredContactEmailItem);
    setContactNameItem('');
    setContactEmailItem('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Name" style={styles.input} onChangeText={contactNameItemInputHandler} value={enteredContactNameItem} />
                <TextInput placeholder="Number/Email address" style={styles.input} onChangeText={contactEmailItemInputHandler} value={enteredContactEmailItem} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} ><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button} ><Button title="ADD" color="green"onPress={addItemHandler} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a00a25',
        borderWidth: 1,
        borderColor: 'black'
    },
    input: {
        width: '80%',
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default ContactItemInput;
