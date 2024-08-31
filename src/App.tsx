import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem area="header" bg="blue">
        header
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="pink">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="red">
        main
      </GridItem>
      <GridItem area="footer" bg="yellow">
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
