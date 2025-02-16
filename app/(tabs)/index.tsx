import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// News data with local image references
const newsData = [
  {
    id: "1",
    title: "Breaking News: Major Tech Innovation",
    description:
      "A revolutionary breakthrough in technology that could change the way we live.",
    image: require("../../assets/fashion1.jpg"),
    date: "2024-03-03",
    category: "Technology",
  },
  {
    id: "2",
    title: "Market Update: Global Trends",
    description: "Latest updates on market trends and financial insights.",
    image: require("../../assets/fashion2.jpg"),
    date: "2024-03-03",
    category: "Finance",
  },
  {
    id: "3",
    title: "Health & Wellness Report",
    description: "New findings in health research and wellness practices.",
    image: require("../../assets/fashion3.jpg"),
    date: "2024-03-03",
    category: "Health",
  },
  {
    id: "4",
    title: "Environmental Updates",
    description:
      "Latest developments in environmental conservation and sustainability.",
    image: require("../../assets/fashion4.jpg"),
    date: "2024-03-03",
    category: "Environment",
  },
];

const NewsCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const FEATURED_IMAGES = [
  {
    id: "1",
    uri: "https://picsum.photos/400/200",
    title: "Featured Product 1",
  },
  {
    id: "2",
    uri: "https://picsum.photos/400/200",
    title: "Featured Product 2",
  },
  {
    id: "3",
    uri: "https://picsum.photos/400/200",
    title: "Featured Product 3",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => router.push("/qr-scanner")}
          >
            <Ionicons name="qr-code-outline" size={24} color="#fff" />
            <Text style={styles.scanButtonText}>Scan QR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Latest News</Text>
        </View>
        <FlatList
          data={newsData}
          renderItem={({ item }) => <NewsCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScroll}
          >
            {FEATURED_IMAGES.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.imageContainer}
                onPress={() => router.push(`/product/${item.id}`)}
              >
                <Image
                  source={{ uri: item.uri }}
                  style={styles.featuredImage}
                />
                <Text style={styles.imageTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push("/qr-scanner")}
            >
              <Ionicons name="scan-outline" size={32} color="#2196F3" />
              <Text style={styles.actionText}>Scan Product</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push("/profile")}
            >
              <Ionicons name="person-outline" size={32} color="#2196F3" />
              <Text style={styles.actionText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  scanButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  featuredSection: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  imageScroll: {
    flexGrow: 0,
  },
  imageContainer: {
    marginRight: 16,
    width: 300,
  },
  featuredImage: {
    width: 300,
    height: 150,
    borderRadius: 12,
  },
  imageTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  quickActions: {
    padding: 24,
    paddingTop: 0,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  actionButton: {
    flex: 1,
    minWidth: "30%",
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1a1a1a",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  categoryContainer: {
    backgroundColor: "#e3f2fd",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 8,
  },
  category: {
    color: "#2196F3",
    fontSize: 12,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
});
