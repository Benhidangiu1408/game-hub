import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGame";
import ShowPlatform from "./ShowPlatform";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <ShowPlatform
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></ShowPlatform>
      </CardBody>
    </Card>
  );
};

export default GameCard;
