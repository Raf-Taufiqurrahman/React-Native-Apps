import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { store } from "../store/store"

export default function RootLayout() {
    return (
      <GluestackUIProvider mode="light">
        <Provider store={store}>
          <Stack />
        </Provider>
      </GluestackUIProvider>
    )
}
