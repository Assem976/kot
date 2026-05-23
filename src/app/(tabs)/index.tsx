import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: true }}>
            {/* Имя первой вкладки должно быть строго "index" */}
            <Tabs.Screen
                name="index"
                options={{ title: 'Главная' }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: 'Профиль' }}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: 'Настройки' }}
            />
        </Tabs>
    );
}