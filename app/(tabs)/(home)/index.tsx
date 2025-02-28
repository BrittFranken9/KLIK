import { View, SafeAreaView, Image, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import useMessages from '@/data/messages';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { data, isLoading, isError } = useMessages();

  console.log(data);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Loading...</ThemedText>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ThemedText type="title">Home</ThemedText>
        <Link href="/details">View details</Link>
        {data.map((message) => (
          <ThemedText key={message._id}>{message.text}</ThemedText>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
