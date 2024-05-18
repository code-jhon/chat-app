import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);

    const addConversation = (conversation) => {
        setConversations([...conversations, conversation]);
    };

    const removeConversation = (id) => {
        setConversations(conversations.filter(conv => conv.id !== id));
    };

    const selectConversation = (id) => {
        setSelectedConversation(conversations.find(conv => conv.id === id));
    };

    return (
        <ChatContext.Provider value={{ conversations, addConversation, removeConversation, selectConversation, selectedConversation }}>
            {children}
        </ChatContext.Provider>
    );
};
