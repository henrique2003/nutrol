/* eslint-disable @typescript-eslint/no-require-imports */
export const MockIcon = ({ testID }: { testID?: string }) => {
  const React = require("react");
  const { View } = require("react-native");

  return (
    <View testID={testID}></View>
  )
}
