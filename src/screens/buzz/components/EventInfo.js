import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import Circle from "../../../components/Circle";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { colors } from "../../../theme/Color";
import { FontAwesome } from "@expo/vector-icons";

const EventInfo = ({ details }) => {
  return (
    <View style={styles.infoView}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        The Night Light Show by Darshan Rawal
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Circle icon={<MaterialIcons name="event" size={25} color="black" />} />
        <Text> Sat 05 Nov 2022 - Sun 06 Nov 2022</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Circle icon={<Entypo name="location-pin" size={25} color="black" />} />
        <Text> Venue to announced : Mumbai</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
          paddingBottom: 10,
          justifyContent: "space-between",
          borderBottomWidth: 1,
        }}
      >
        <Button title="Explore Venue" />
        <Button title="Concert" />
      </View>
      <View
        style={{
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          More about events
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            paddingBottom: 10,
            borderBottomWidth: 1,
          }}
        >
          <Circle
            icon={<MaterialIcons name="watch-later" size={25} color="black" />}
          />
          <Text>4 hrs</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          paddingHorizontal: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Artist
        </Text>
        <FlatList
          data={details}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={(element) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginTop: 15,
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                  backgroundColor: colors.primary,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={element.item.image}
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                Darshan Raval
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          About
        </Text>
        <Text
          style={{
            marginVertical: 2,
            fontSize: 15,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Terms
        </Text>
        <Text
          style={{
            marginVertical: 2,
            fontSize: 15,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Circle
              icon={<FontAwesome name="rupee" size={25} color="black" />}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              5000
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {" "}
            1 Ticket
          </Text>
        </View>
        <Button title="Book Now" />
      </View>
    </View>
  );
};

export default EventInfo;

const styles = StyleSheet.create({
  infoView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
