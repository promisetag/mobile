
import { Icon } from "native-base";
import { Circle, Path } from "react-native-svg";

const DotsVerticalIcon = (props) => (
   <Icon
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path fill="none" d="M0 0h256v256H0z" />
    <Circle cx={128} cy={128} r={12} />
    <Circle cx={128} cy={64} r={12} />
    <Circle cx={128} cy={192} r={12} />
  </Icon>
);

export default DotsVerticalIcon;
