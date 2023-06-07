import { NativeBaseProvider } from "native-base";
import AppStack from "./src/component/stacks/AppStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
};

export default App;
