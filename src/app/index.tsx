import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EQUIPAMIENTO = [
  'Pantalla 4K de 85"',
  'Sistema de Micrófonos Omnidireccionales',
  'Cámara PTZ para videollamadas',
  'Red Wi-Fi dedicada',
  'Tomas Eléctricas',
];

export default function App() {
  const [areaGuardada, setAreaGuardada] = React.useState('');
  const [areaInput, setAreaInput] = React.useState('');

  const guardarArea = () => {
    setAreaGuardada(areaInput.trim());
  }
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Área encargada</Text>
          <Text style={styles.headerValue}>
            {areaGuardada || 'Sin área asignada'}
          </Text>
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Asignar departamento</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Gerencia de Tecnología"
            value={areaInput}
            onChangeText={setAreaInput}
          />
          <TouchableOpacity style={styles.saveButton} onPress={guardarArea}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f4f7' },
  container: { padding: 16, paddingTop: 40, gap: 16 },
  header: { backgroundColor: '#1f2a44', borderRadius: 12, padding: 16 },
  headerLabel: { color: '#b8c1d9', fontSize: 12 },
  headerValue: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 180 },
  cardBody: { padding: 14 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1f2a44' },
  subtitle: { fontSize: 14, color: '#555', marginTop: 4 },
  section: { backgroundColor: '#fff', borderRadius: 12, padding: 14, gap: 8 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f2a44' },
  item: { fontSize: 14, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccd1dc', borderRadius: 8, padding: 10, fontSize: 15 },
  saveButton: { backgroundColor: '#1f2a44', borderRadius: 8, padding: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});