import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* Главный стек сразу загружает наше меню вкладок */}
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}
