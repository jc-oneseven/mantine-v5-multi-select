import { Divider, MantineProvider, Title } from "@mantine/core";
import MultiselectTry from "./MultiselectTry";

export default function App() {
  return (
    <MantineProvider>
      <Title>App</Title>

      <Divider />

      <MultiselectTry />
    </MantineProvider>
  );
}
