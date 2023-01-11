import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactListItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8
    }
})

export default ContactListItem;
