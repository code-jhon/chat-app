import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ChatContext } from '../context/ChatContext';
import { ContactContext } from '../context/ContactContext';
import { useNavigation } from '@react-navigation/native';

const NewConversation = () => {
    const [selectedContact, setSelectedContact] = useState(null);
    const { contacts } = useContext(ContactContext);
    const { addConversation } = useContext(ChatContext);
    const navigation = useNavigation();

    const handleAdd = () => {
        if (selectedContact) {
            addConversation({ id: Date.now().toString(), name: selectedContact.name });
            setSelectedContact(null);
            navigation.goBack();
        }
    };

    return (
        <View>
            <Text>Select a Contact</Text>
            <Picker
                selectedValue={selectedContact}
                onValueChange={(itemValue) => setSelectedContact(itemValue)}
            >
                {contacts.map(contact => (
                    <Picker.Item key={contact.id} label={contact.name} value={contact} />
                ))}
            </Picker>
            <Button title="Add Conversation" onPress={handleAdd} />
        </View>
    );
};

export default NewConversation;
