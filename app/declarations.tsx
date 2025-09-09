import { StyleSheet, Text, View } from "react-native";

export default function InfoDetails() {
  return (
    <View style={style.mainContainer}>
      <View style={style.frame}>

    
      <Text style={style.frameText}> Dette er en brukbar og god app.{"\n"}
      Det er nesten litt ekkelt hvor bra den er!</Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7299bd"
  },

  frame:  {
    backgroundColor: "#fff",   // hvit boble
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,          // runde hjørner
    maxWidth: "90%",           // så den ikke fyller hele skjermen
    shadowColor: "#000",       // skygge (kun iOS/Android med elevation)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 3,   
  },

  frameText: {
    fontSize: 20 ,
    lineHeight: 22,
    color: "#333",
    textAlign: "center"
  }


  
});
