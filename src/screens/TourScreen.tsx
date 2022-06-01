import Onboarding from "react-native-onboarding-swiper";
import { Button, Image, StatusBar, Text } from "native-base";
import { userBoarded } from "../features/boardingSlice";
import { useGetTourPagesQuery } from "../services/promisetag-api";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import { useAppDispatch } from "../hooks/redux-toolkit";

export const TourScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetTourPagesQuery();
  const onBoardingRef = useRef<Onboarding>(null);

  const dispatch = useAppDispatch();

  if (error) return <Text>Error: {error.error}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  console.log(data[0].image_url);

  const pages = data.map((page) => {
    return {
      backgroundColor: page.background_color,
      image: <Image src={page.image_url} alt={page.title} />,
      title: page.title,
      subtitle: page.subtitle,
    };
  });

  const Done = (props) => (
    <Button mr={"4"} bg={"white"} {...props}>
      <Text>Get Started</Text>
    </Button>
  );

  const nextStep = () => {
    dispatch(userBoarded());
    navigation.replace("Tab");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"black"} />
      <Onboarding
        ref={onBoardingRef}
        DoneButtonComponent={Done}
        bottomBarHighlight={false}
        onDone={nextStep}
        onSkip={nextStep}
        pages={pages}
      />
    </SafeAreaView>
  );
};
