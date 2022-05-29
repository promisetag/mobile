import { HStack } from "native-base";
import StarFilledIcon from "@assets/../../assets/icons/StarFilledIcon";
import StarOutlineIcon from "@assets/../../assets/icons/StarOutlineIcon";

export const Ratings = ({ rating }) => {
  return (
    <HStack>
      <StarFilledIcon size="6" color="amber.500" key="1" />
      <StarFilledIcon size="6" color="amber.500" key="2" />
      <StarFilledIcon size="6" color="amber.500" key="3" />
      <StarFilledIcon size="6" color="amber.500" key="4" />
      <StarOutlineIcon size="6" color="amber.500" key="5" />
    </HStack>
  );
};
