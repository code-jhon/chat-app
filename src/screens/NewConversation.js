import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ChatContext } from '../context/ChatContext';
import { useNavigation } from '@react-navigation/native';

const NewConversation = () => {
    const [name, setName] = useState('');
    const { addConversation } = useContext(ChatContext);
    const navigation = useNavigation();

    const handleAdd = () => {
        if (name.trim()) {
            addConversation({ id: Date.now().toString(), name });
            setName('');
            navigation.goBack();
        }
    };

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
            />
            <Button title="Add Conversation" onPress={handleAdd} />
        </View>
    );
};

export default NewConversation;
