import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: true }}>
            <Tabs.Screen
                name="home"
                options={{ title: 'Home' }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: 'Prifile' }}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: 'Settings' }}
            />
        </Tabs>
    );
}