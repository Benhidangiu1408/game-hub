import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        //     `"header header"
        // "aside main"
        // "aside footer"`
        base: `"header" "main" "footer" `,
        lg: `"header header"
         "aside main"
         "aside footer"`,
      }}
    >
      <GridItem area="header">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
}

export default App;
