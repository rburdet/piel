import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

// Mock data - In real app, this would come from an API
const productData = {
  name: "Sustainable Leather Bag",
  brand: "EcoFashion",
  serialNumber: "SN2025-0234",
  productionDate: "2025-02-15",
  materials: [
    { name: "Recycled Leather", percentage: 85 },
    { name: "Organic Cotton", percentage: 15 }
  ],
  sustainability: {
    carbonFootprint: "2.3kg CO2",
    waterUsage: "15L",
    recycledMaterials: "85%"
  },
  supplyChain: [
    {
      date: "2025-02-15",
      location: "Milan, Italy",
      event: "Final Product Completion",
      description: "Product quality check and packaging"
    },
    {
      date: "2025-02-10",
      location: "Florence, Italy",
      event: "Assembly",
      description: "Bag assembly and stitching"
    },
    {
      date: "2025-02-05",
      location: "Pisa, Italy",
      event: "Material Processing",
      description: "Leather treatment and cutting"
    },
    {
      date: "2025-01-25",
      location: "Venice, Italy",
      event: "Raw Material Sourcing",
      description: "Recycled leather collection and sorting"
    }
  ]
};

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const renderTimelineItem = (item: any, index: number) => (
    <View key={index} style={styles.timelineItem}>
      <View style={styles.timelineLine}>
        <View style={styles.timelineDot} />
        {index !== productData.supplyChain.length - 1 && <View style={styles.timelineConnector} />}
      </View>
      <View style={styles.timelineContent}>
        <Text style={styles.timelineDate}>{item.date}</Text>
        <Text style={styles.timelineEvent}>{item.event}</Text>
        <Text style={styles.timelineLocation}>{item.location}</Text>
        <Text style={styles.timelineDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Image 
          source={require('../../assets/fashion1.jpg')}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{productData.name}</Text>
          <Text style={styles.brand}>{productData.brand}</Text>
          <Text style={styles.serialNumber}>SN: {productData.serialNumber}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Materials</Text>
        {productData.materials.map((material, index) => (
          <View key={index} style={styles.materialItem}>
            <Text style={styles.materialName}>{material.name}</Text>
            <Text style={styles.materialPercentage}>{material.percentage}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sustainability Impact</Text>
        <View style={styles.sustainabilityGrid}>
          <View style={styles.sustainabilityItem}>
            <MaterialCommunityIcons name="cloud-outline" size={24} color="#666" />
            <Text style={styles.sustainabilityValue}>{productData.sustainability.carbonFootprint}</Text>
            <Text style={styles.sustainabilityLabel}>Carbon Footprint</Text>
          </View>
          <View style={styles.sustainabilityItem}>
            <MaterialCommunityIcons name="water-outline" size={24} color="#666" />
            <Text style={styles.sustainabilityValue}>{productData.sustainability.waterUsage}</Text>
            <Text style={styles.sustainabilityLabel}>Water Usage</Text>
          </View>
          <View style={styles.sustainabilityItem}>
            <MaterialCommunityIcons name="recycle" size={24} color="#666" />
            <Text style={styles.sustainabilityValue}>{productData.sustainability.recycledMaterials}</Text>
            <Text style={styles.sustainabilityLabel}>Recycled Materials</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Supply Chain Journey</Text>
        <View style={styles.timeline}>
          {productData.supplyChain.map((item, index) => renderTimelineItem(item, index))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  productInfo: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brand: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  serialNumber: {
    fontSize: 14,
    color: '#888',
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  materialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  materialName: {
    fontSize: 16,
    color: '#333',
  },
  materialPercentage: {
    fontSize: 16,
    color: '#666',
  },
  sustainabilityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  sustainabilityItem: {
    width: '30%',
    alignItems: 'center',
    padding: 10,
  },
  sustainabilityValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sustainabilityLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  timeline: {
    paddingLeft: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineLine: {
    width: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2196F3',
  },
  timelineConnector: {
    width: 2,
    height: '100%',
    backgroundColor: '#2196F3',
    position: 'absolute',
    top: 12,
    left: 5,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
  },
  timelineDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timelineEvent: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timelineLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#888',
  },
});

