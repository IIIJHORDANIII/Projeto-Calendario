import { View, Image, Dimensions } from "react-native";
import { Styles } from "./style_calendar";
import { Calendar, DateData } from "react-native-calendars";
import { useState } from "react";

export default function Calendario() {
  const [day, setDay] = useState<DateData>();
  return (
    <View style={Styles.container}>
      <Calendar
        style={Styles.calendar}
        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#e8e8e8",
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 24,
          textWeekFontSize: 24,
          textDayFontSize: 18,
          monthTextColor: "white",
          todayTextColor: "#f06543",
          selectedDayBackgroundColor: "#f06543",
          selectedDayTextColor: "white",
          arrowColor: "#e8e8e8",
          calendarBackground: "transparent",
          textDayStyle: { color: "white" },
          textDisabledColor: "#717171",
        }}
        minDate={new Date().toDateString()}
        hideExtraDays={true}
        onDayPress={setDay}
        markedDates={
          day && {
            [day.dateString]: { selected: true },
          }
        }
      />
    </View>
  );
}
