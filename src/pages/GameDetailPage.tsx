import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);

  return (
    <>
      <Heading> {game?.name}</Heading>
      {/* <Text>{game?.description_raw!} </Text> */}
      <ExpandableText>{game?.description_raw!}</ExpandableText>
      <GameAttributes game={game!}></GameAttributes>
      {/* {game?.description_raw!} */}
    </>
  );
};

export default GameDetailPage;
