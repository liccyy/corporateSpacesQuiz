import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EQUIPAMIENTO = [
  'Pantalla 4K de 85"',
  'Sistema de Micrófonos Omnidireccionales',
  'Cámara PTZ para videollamadas',
  'Red Wi-Fi dedicada',
  'Tomas Eléctricas',
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Área encargada</Text>
          <Text style={styles.headerValue}>Sin área asignada</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800' }}
            style={styles.image}
          />
          <View style={styles.cardBody}>
            <Text style={styles.title}>Sala de Conferencias Ejecutiva A-1</Text>
            <Text style={styles.subtitle}>Aforo máximo: 25 Personas</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipamiento disponible</Text>
          {EQUIPAMIENTO.map((item) => (
            <Text key={item} style={styles.item}>• {item}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 const styles = StyleSheet.create({
  
 })

