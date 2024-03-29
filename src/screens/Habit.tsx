import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <View className="mt-4">
          <Text className="text-base text-zinc-400 font-semibold">
            {dayOfWeek}
          </Text>

          <Text className="text-4xl text-white font-extrabold">
            {dayAndMonth}
          </Text>

          <ProgressBar progress={30} />
        </View>

        <View className="mt-6">
          <Checkbox
            title="Beber 2L de água"
            checked={false}
          />
          <Checkbox
            title="Caminhar"
            checked={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}