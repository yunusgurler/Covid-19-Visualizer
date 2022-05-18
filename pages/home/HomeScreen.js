import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

const NEWS = [
  {
    id: "1",
    title:
      "Covid Collections: Sharing memories of all those we lost in te pandemic",
    description:
      "Nearly 1 million people in the U.S. have died of Covid-19 since the start of the pandemic. Share what they meant to you with an image.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x500,f_auto,q_auto:best/newscms/2022_17/3549831/220428-covid-hope-dove-release-ac-844p.jpg",
  },
  {
    id: "2",
    title:
      "Nearly 15 million deaths associated with Covid, World Health Organization says",
    description:
      "Most of the fatalities were in Southeast Asia, Europe and the Americas.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-05/220505-covid-deaths-al-0844-9f8786.jpg",
  },
  {
    id: "3",
    title: "What the latest omicron subvariants mean for reinfection risk",
    description:
      "In the U.S., the BA.2.12.1 subvariant is gaining a foothold, while South Africa is seeing a surge in cases from two other subvariants, BA.4 and BA.5.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-05/220503-covid-test-mn-0936-18218f.jpg",
  },
  {
    id: "4",
    title:
      "Another pandemic is inevitable, scientists say. Mass vaccination is not.",
    description:
      "Scientists can make safe and effective vaccines against novel pathogens. The bigger challenge is persuading everyone to use them.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-04/220425-vaccine-protest-al-1231-da1314.jpg",
  },
  {
    id: "5",
    title:
      "Tears and chocolates as New Zealand eases Covid rules, welcomes back tourists",
    description:
      "New Zealand reopened to visitors from Australia three weeks ago and on Monday to about 60 visa-waiver countries, including much of Europe.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-05/220502-new-zealand-airport-mb-1127-ca4d5f.jpg",
  },
  {
    id: "6",
    title:
      "Omicron cases spike in Coachella Valley after two-week music festival",
    description:
      "Coachella was mostly outdoors, but the festival did not require masks or vaccination.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-04/220428-coachella-mjf-1528-66da07.jpg",
  },
  {
    id: "7",
    title: "Climate change may increase risk of new infectious diseases",
    description:
      "A new study highlights two global crises — climate change and infectious disease spread — as the world grapples with what to do about both.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-04/220428-climate-change-virus-mb-1111-1a58b6.jpg",
  },
  {
    id: "8",
    title:
      "The Covid risk on planes, public transit amid lifted mandates, according to experts",
    description:
      "Wearing a mask reduces your risk of catching Covid from fellow passengers on subways, buses and planes, regardless of what other people do.",
    photo:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2022-04/220422-mask-mandate-airport-ew-1138a-4f900d.jpg",
  },
];

const Item = ({ title, description, photo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      source={{
        uri: photo,
      }}
      style={{ width: "100%", height: 200 }}
    />
    <Text style={styles.description}>{description}</Text>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Item
      description={item.description}
      title={item.title}
      photo={item.photo}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={NEWS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#EEDFDE",
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
  },
});
