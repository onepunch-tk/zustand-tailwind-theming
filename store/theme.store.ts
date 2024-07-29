import { create, useStore } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

type ThemeState = {
  theme: "dark" | "light";
};

type ThemeAction = {
  toggleTheme: () => void;
};

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved");
    return await AsyncStorage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved");
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted");
    await AsyncStorage.removeItem(name);
  },
};

const createThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set, get) => ({
      theme: "dark", // 초기 테마 설정
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    { name: "theme-storage", storage: createJSONStorage(() => storage) }
  )
);
const useThemeSelector = <T>(
  selector: (state: ThemeState & ThemeAction) => T
): T => {
  return useStore(createThemeStore, selector);
};

export const useTheme = () => {
  const { theme, toggleTheme } = useThemeSelector((s) => ({
    theme: s.theme,
    toggleTheme: s.toggleTheme,
  }));
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return [theme, toggleTheme];
};
