import { HStack, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export const StarRating = ({ rating }) => {
  return (
    <HStack>
      {rating >= 1 ? (
        <Icon as={AntDesign} name={"star"} size={"4"} color={"amber.500"} />
      ) : (
        <Icon as={AntDesign} name={"staro"} size={"4"} />
      )}
      {rating >= 2 ? (
        <Icon as={AntDesign} name={"star"} size={"4"} color={"amber.500"} />
      ) : (
        <Icon as={AntDesign} name={"staro"} size={"4"} color={"amber.500"} />
      )}
      {rating >= 3 ? (
        <Icon as={AntDesign} name={"star"} size={"4"} color={"amber.500"} />
      ) : (
        <Icon as={AntDesign} name={"staro"} size={"4"} color={"amber.500"} />
      )}
      {rating >= 4 ? (
        <Icon as={AntDesign} name={"star"} size={"4"} color={"amber.500"} />
      ) : (
        <Icon as={AntDesign} name={"staro"} size={"4"} color={"amber.500"} />
      )}
      {rating === 5 ? (
        <Icon as={AntDesign} name={"star"} size={"4"} color={"amber.500"} />
      ) : (
        <Icon as={AntDesign} name={"staro"} size={"4"} color={"amber.500"} />
      )}
    </HStack>
  );
};
