import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        paddingTop: 15
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        padding: 20
      }
});
