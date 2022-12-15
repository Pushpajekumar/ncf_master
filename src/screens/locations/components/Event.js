import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../../theme/Color";
import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
import { FontAwesome } from "@expo/vector-icons";

const Event = () => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          width: "47%",
          height: 300,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 120,
          }}
        >
          <Image
            source="https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10,
            justifyContent: "space-evenly",
            height: 180,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            The night light show by Darshan Rawal
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Kids
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Rs. 500
            </Text>
          </View>
          <Text>
            Non-profit, educational or personal use tips the balance in favor of
            fair
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "47%",
          height: 300,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 120,
          }}
        >
          <Image
            source="https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10,
            justifyContent: "space-evenly",
            height: 180,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            The night light show by Darshan Rawal
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Kids
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Rs. 500
            </Text>
          </View>
          <Text>
            Non-profit, educational or personal use tips the balance in favor of
            fair
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "47%",
          height: 300,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 120,
          }}
        >
          <Image
            source="https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10,
            justifyContent: "space-evenly",
            height: 180,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            The night light show by Darshan Rawal
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Kids
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Rs. 500
            </Text>
          </View>
          <Text>
            Non-profit, educational or personal use tips the balance in favor of
            fair
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "47%",
          height: 300,
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 120,
          }}
        >
          <Image
            source="https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10,
            justifyContent: "space-evenly",
            height: 180,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            The night light show by Darshan Rawal
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Kids
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Rs. 500
            </Text>
          </View>
          <Text>
            Non-profit, educational or personal use tips the balance in favor of
            fair
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          paddingVertical: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button title="Browse by location" />
        <Circle icon={<FontAwesome name="filter" size={24} color="black" />} />
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
