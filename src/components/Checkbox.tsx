import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="w-8 h-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
        </View>
      ) : (
        <View className="w-8 h-8 bg-zinc-900 rounded-lg border-2 border-zinc-800" />
      )}

      <Text className="text-white text-base ml-3">
        {title}
      </Text>
    </TouchableOpacity>
  );
}