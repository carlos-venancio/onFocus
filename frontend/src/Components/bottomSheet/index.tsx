import { styles, SHEET_HEIGHT, SHEET_OVER_DRAG, Main } from "./styles";
import {
  Title,
  Container,
  Insert,
  Des,
  CustomButton,
  ButtonText,
} from "./styles";
import Timer from "../Timer/index";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useAnimatedStyle,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { AdMobBanner } from "expo-ads-admob";

type Props = {
  onClose: () => void;
  navigation?: any;
};

export default function Sheet({ navigation, onClose }: Props) {
  const handlePress = () => {
    onClose();
  };

  const [text, setText] = useState("");
  const offset = useSharedValue(0);

  function close() {
    offset.value = 0;
    onClose();
  }

  const pan = Gesture.Pan().onChange((event) => {
    const offsetDelta = event.changeY + offset.value;
    const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);
    offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
  }).onFinalize(() => {
    if (offset.value < SHEET_HEIGHT / 3) {
      offset.value = withSpring(0);
    } else {
      offset.value = withTiming(SHEET_HEIGHT, {}, () => {
        runOnJS(close)();
      });
    }
  });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.Detector, translateY]}
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown}
      >
        <MaterialCommunityIcons
          name="drag-horizontal"
          color="#999"
          size={24}
          style={styles.DragIcon}
        />

        <Container>
          <Main>
            <Title maxLength={40} placeholder="Digite o titulo"></Title>
            <Timer />

            <Insert>
              <Des
                multiline={true}
                numberOfLines={4}
                maxLength={150}
                placeholder="Digite aqui..."
                value={text}
                onChangeText={handleTextChange}
                textAlignVertical="top"
              />
            </Insert>

            <CustomButton onPress={handlePress} activeOpacity={0.1}>
              <ButtonText>Criar</ButtonText>
            </CustomButton>
          </Main>
        </Container>

        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          onDidFailToReceiveAdWithError={(error) => console.error(error)}
        />
      </Animated.View>
    </GestureDetector>
  );
}