import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Button,
  SimpleGrid,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCartContainer from "./GameCartContainer";
import { Genres } from "../entity/Genres";
import { parent_Platform } from "../entity/parent_Platform";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; //total=0
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage} //undefined thì thanh false tai bat buoc là boolean
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCartContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCartContainer>
            ))}
          {/* {isLoading && <GameCardSkeleton />} */}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCartContainer key={game.id}>
                  <GameCard game={game} />
                </GameCartContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
