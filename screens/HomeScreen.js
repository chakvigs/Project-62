import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allAttendance: [],
      students: {
        Bob: '',
        Joe: '',
        Billy: '',
      },
    };
  }

  submitAttendance = () => {
    this.props.navigation.navigate('SummaryScreen');

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    db.ref('/').update({
      [year]: {
        [month]: {
          [date]: {
            Bob: { Attendance: this.state.students.Bob, Roll_No: 1 },
            Joe: { Attendance: this.state.students.Joe, Roll_No: 2 },
            Billy: { Attendance: this.state.students.Billy, Roll_No: 3 },
          },
        },
      },
    });
  };

  render() {
    return (
    
      <View style={styles.container}>
           <AppHeader></AppHeader>
        <Text style={styles.text2}>1. Bob</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Bob: 'Present' });
            this.state.students.Bob = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Bob: 'Absent' });
            this.state.students.Bob = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>2. Joe</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Joe: 'Present' });
            this.state.students.Joe = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Joe: 'Absent' });
            this.state.students.Joe = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>3. Billy</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Billy: 'Present' });
            this.state.students.Billy = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Billy: 'Absent' });
            this.state.students.Billy = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit} onPress={this.submitAttendance}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    height:30,
    borderRadius: 15,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'lightblue',
  },

  absentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    height:30,
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -35,
    backgroundColor: 'orange',
  },

  text: {
    fontSize: 15,
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center'
    
  },

  text2: {
    fontSize: 20,
     fontWeight: 'bold',
      color: 'brown',
      backgroundColor:'#F0F0F0',
    marginTop: 30,
  },

  submit: {
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'green',
    padding: 2,
    
  },
  container: {
    alignSelf: 'center',
    marginTop: 10,
    border: 20,
    borderRadius: 19,
    backgroundColor: 'brown',
  },
});
