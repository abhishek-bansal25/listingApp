import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ItemCard } from "./src/components/ItemCard";

export default function App() {
  const listData = [
    {
      title: "milk",
      desc: "yummy",
      qty: 2,
    },
    {
      title: "bread",
      desc: "whole wheat bread",
      qty: 1,
    },
    {
      title: "cookies",
      desc: "Flavour: Chocolate",
      qty: 2,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>GROCERY LIST</Text>
      </View>
      {listData.map((item,index) => {
        return (
          <ItemCard
            key={index}
            title={item.title ?? ""}
            desc={item.desc ?? ""}
            qty={item.qty ?? 0}
          />
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2e9",
    alignItems: "center",
    paddingVertical: 30,
  },
  headerContainer: {
    padding: 10,
    width: "100%",
    backgroundColor: "#e0d8d7",
    alignItems: "center",
  },
  headerText: {
    fontWeight:"700",
  },
});
