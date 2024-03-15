import { View } from "react-native";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="w-full h-3 bg-zinc-700 rounded-full mt-4">
      <View
        className="h-3 bg-violet-600 rounded-full"
        style={{ width: `${progress}%`}}
      />
    </View>
  );
}