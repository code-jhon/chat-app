import React from 'react';
import { ChatProvider } from './src/context/ChatContext';
import { ContactProvider } from './src/context/ContactContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <ContactProvider>
            <ChatProvider>
                <AppNavigator />
            </ChatProvider>
        </ContactProvider>
    );
}
