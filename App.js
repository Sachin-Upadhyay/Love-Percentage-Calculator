import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './Components/DisplayLove';

export default class LoveCalculator extends Component {
  state = {
    fname: '',
    sname: '',
    data: 'loading'
  }
  submit() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "147e2cb633mshec6b7a240d16015p1cefdejsnd670c047b3e3"
      }
    }).then(data => data.json())
      .then(data2 => {
        this.setState({
          data:data2
        })
      })
  }
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'darkred'}}>
        <View>
          <Appbar.Header>
            <Appbar.Content
              title="Love % Calculator"
              style={{ alignItems: 'center' }}
            />
          </Appbar.Header>
          <TextInput
            label='Your Name'
            value={this.state.fname}
            onChangeText={text => this.setState({ fname:text })}
            style={{marginTop:10}}
          />
          <TextInput
            label='Crush'
            value={this.state.sname}
            onChangeText={text => this.setState({ sname:text })}
            style={{marginTop:10}}
          />
          <Button mode="contained" onPress={this.submit.bind(this)} style={{marginTop:10}}>
            Claculate
          </Button>
          <DisplayLove show={this.state.data}></DisplayLove>
        </View>
      </View>
    )
  }
}