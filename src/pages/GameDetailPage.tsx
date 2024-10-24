import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import { Heading, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);

  return (
    <>
      <Heading> {game?.name}</Heading>
      {/* <Text>{game?.description_raw!} </Text> */}
      <ExpandableText>{game?.description_raw!}</ExpandableText>
      {/* {game?.description_raw!} */}
    </>
  );
};

export default GameDetailPage;
