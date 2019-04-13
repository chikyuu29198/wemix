import React from 'react';
import { FlatList, ImageBackground } from "react-native";
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

const vnChart = require('../../assets/chart-song-vn.png');
const usChart = require('../../assets/chart-song-us.png');
const krChart = require('../../assets/chart-song-kpop.png');


const categories = [
    {
        name: "BXH Việt Nam",
        background: vnChart
    },
    {
        name: "BXH US-UK",
        background: usChart
    },
    {
        name: "BXH KPOP",
        background: krChart
    },
]

class CategoryComponent extends React.PureComponent {


    goDetail = () => {
        console.log("goToDetails");
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableScale
            activeScale={0.95}
            friction={90}
            tension={100}
            onPress={this.goDetail}
            >
            <ImageBackground
                source={item.background} style={{
                    alignSelf: "stretch",
                    height: 180,
                    width: null,
                    position: "relative",
                    marginBottom: 10
                }} />
        </TouchableScale>
    )

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={categories}
                renderItem={this.renderItem}
            />
        )
    }
}

export default CategoryComponent;