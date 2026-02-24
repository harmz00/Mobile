import { View, Text } from "react-native"



const newComponent = (source, caption, styles) => {
    return(
        <View>
            <Image style={styles} source={source} />
            <Text>{caption}</Text>
        </View>
    )
}

export default newComponent;