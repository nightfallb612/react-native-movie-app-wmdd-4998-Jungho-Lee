import { NativeBaseProvider } from "native-base";
import IndexScreen from "./src/component/screens/IndexScreen";
import AppStack from "./src/component/stacks/AppStack";
import TestStack from "./src/component/stacks/TestStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      {/* <IndexScreen /> */}
      {/* <TestStack /> */}
    </NativeBaseProvider>
  );
};

export default App;
