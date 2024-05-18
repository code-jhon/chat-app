import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { ContactContext } from '../context/ContactContext';

const ContactList = () => {
    const { contacts, addContact, removeContact } = useContext(ContactContext);
    const [name, setName] = useState('');

    const handleAdd = () => {
        if (name.trim()) {
            addContact({ id: Date.now().toString(), name });
            setName('');
        }
    };

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter contact name"
            />
            <Button title="Add Contact" onPress={handleAdd} />
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{item.name}</Text>
                        <Button title="Delete" onPress={() => removeContact(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default ContactList;
