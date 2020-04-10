import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const DisplayLove = (props) => {
    if (props.show == 'loading') {
        return (<Text style={style.text}>wait</Text>)
    }
    else {
        return (
            <View style={style.container}>
                <Text style={style.text}>{props.show.percentage}%</Text>
                <Text style={style.text}>{props.show.result}</Text>
            </View>
        )
    }
}
export default DisplayLove;
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    }
})
