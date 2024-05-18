import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { selectedConversation } = useContext(ChatContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sent: true }]);
            setMessage('');
        }
    };

    return (
        <View>
            <Text>Chat with {selectedConversation?.name}</Text>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={{ alignSelf: item.sent ? 'flex-end' : 'flex-start' }}>{item.text}</Text>
                )}
            />
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message"
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

export default Chat;
