import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const inAuthGroup = segments[0] === 'auth';
      
      if (!user && !inAuthGroup) {
        // Redirect to the sign-in page if not signed in
        router.replace('/auth/login');
      } else if (user && inAuthGroup) {
        // Redirect to the main app if signed in
        router.replace('/(tabs)');
      }
    });

    return () => unsubscribe();
  }, [segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
