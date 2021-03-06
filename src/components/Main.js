import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import Header from './Header';
import Note from './Note';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {      
      noteArray: [],
      noteText: '',
    }
  }


  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)} />
    });



    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <Header headerText={'Note Keeper'}/>

        <ScrollView style={styles.scrollViewContainer}>
          {notes}
        </ScrollView>
      
        <View style={styles.footer}>
          <TextInput style={styles.footerTextInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='Enter a note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
  addNote() {
    //alert('test alert');
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  footerTextInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 55,
    height: 55,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
