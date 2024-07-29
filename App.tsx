import { StatusBar } from "expo-status-bar";
import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <View
      className={
        "flex-1 justify-center items-start space-y-3.5 px-2.5 dark:bg-neutral-950"
      }
    >
      <View
        className={
          "flex-row w-full justify-center items-center space-x-2.5 my-2.5"
        }
      >
        <Text className={"text-3xl font-extrabold dark:text-white"}>
          Toggle Theme
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <Text className={"text-xl font-bold dark:text-white"}>
        The Printing Press: A Revolution in Human Communication
      </Text>
      <Text className={"text-lg font-semibold dark:text-white"}>
        Introduction
      </Text>
      <Text className={"text-sm dark:text-white"}>
        The invention of the printing press in the mid-15th century by Johannes
        Gutenberg stands as one of the most significant technological
        advancements in human history. This revolutionary device fundamentally
        altered the landscape of knowledge dissemination, catalyzing profound
        changes in society, culture, and intellectual discourse. The printing
        press's impact reverberated through centuries, shaping the modern world
        in ways that continue to influence us today.
      </Text>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
