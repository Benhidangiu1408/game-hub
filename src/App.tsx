import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
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
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="header">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
}

export default App;
