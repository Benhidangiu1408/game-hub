import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCartContainer from "./GameCartContainer";

const GameGrid = () => {
  const { data, errors, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errors && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCartContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCartContainer>
          ))}
        {/* {isLoading && <GameCardSkeleton />} */}

        {data.map((game) => (
          <GameCartContainer>
            <GameCard key={game.id} game={game} />
          </GameCartContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
