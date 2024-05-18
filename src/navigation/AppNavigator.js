import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConversationList from '../screens/ConversationList';
import Chat from '../screens/Chat';
import NewConversation from '../screens/NewConversation';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Conversations">
                <Stack.Screen name="Conversations" component={ConversationList} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="NewConversation" component={NewConversation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
