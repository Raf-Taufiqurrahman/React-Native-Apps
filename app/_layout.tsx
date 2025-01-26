import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { store } from "../store/store"

export default function RootLayout() {
    return (
      <GluestackUIProvider mode="light">
        <Provider store={store}>
          <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }}/>
              <Stack.Screen name="create" options={{ headerShown: false }}/>
              <Stack.Screen name="[id]" options={{ headerShown: false }} />
          </Stack>
        </Provider>
      </GluestackUIProvider>
    )
}
