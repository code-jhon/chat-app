import React, { useContext } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ChatContext } from '../context/ChatContext';
import { useNavigation } from '@react-navigation/native';

const ConversationList = () => {
    const { conversations, selectConversation, removeConversation } = useContext(ChatContext);
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        selectConversation(item.id);
                        navigation.navigate('Chat');
                    }}>
                        <Text>{item.name}</Text>
                        <Button title="Delete" onPress={() => removeConversation(item.id)} />
                    </TouchableOpacity>
                )}
            />
            <Button title="Add Conversation" onPress={() => navigation.navigate('NewConversation')} />
            <Button title="Manage Contacts" onPress={() => navigation.navigate('Contacts')} />
        </View>
    );
};

export default ConversationList;
