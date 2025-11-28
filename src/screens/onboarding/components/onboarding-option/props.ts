import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";


export type OnboardingOptionProps = ComponentProps<typeof TouchableOpacity> & {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  selected?: boolean;
};