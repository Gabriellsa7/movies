import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What do you want to watch?</Text>
      <View style={styles.containerInput}>
        <TextInput placeholder="Find" />
      </View>
    </View>
  );
}
