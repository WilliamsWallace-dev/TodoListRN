import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View  } from 'react-native';
import { TextInput } from './components/TextInput';
import { useState } from 'react';
import { Button } from './components/Button';

interface Form {
  title : string,
  description : string,
}
interface Task extends Form {
  status : boolean
}



export default function App() {

  const initialForm : Form = {
    title : "",
    description : ""
  }
  const [form,setForm] = useState<Form>(initialForm)
  const [listTasks, setListTasks] = useState<Task[]>([])

  function addTask (){
    setListTasks([...listTasks,{...form,status : false}])
    setForm(initialForm)
  }



  return (
    <View style={[styles.container]}>
      <View style = {[{position : 'absolute', top : 0, display: 'flex'}]}>
        <Image source={require("./assets/todolist.jpg")} style= {[{width : 400 , height : 200}]}/>
        <View style = {[styles.flex_center, { backgroundColor : "#55069d"}]}><Text style = {[styles.mainTitle]}>TodoList App</Text></View>
      </View>
    <View style = {styles.flex_center}>
      <TextInput
        placeholder='Título'
        placeholderTextColor= "#55069d"
        autoCapitalize='none'
        value= {form.title}
        onChangeText={(text)=>{setForm(prevState=>{ return {...prevState,title : text} })}} 
        ></TextInput>
        <TextInput
        placeholder='Título'
        placeholderTextColor= "#55069d"
        autoCapitalize='none'
        value= {form.description}
        onChangeText={(text)=>{setForm(prevState=>{ return {...prevState,description : text} })}} 
        ></TextInput>
        <Button
        title='Criar Tarefa'
        type = "primary"
        ></Button>

    </View>
      
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    display : 'flex',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : 8,
    // marginVertical : 4
  },
  flex_center : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
  },
  mainTitle : {
    fontSize : 32,
    fontWeight : 'bold',
  },
  title : {
    fontSize : 16,
    fontWeight : 'bold'
  },
  p : {
    fontSize : 12,
    fontWeight : '400'
  },
  imageTop : {
    position :'absolute',
    top : 0,
  },
  border : {
    borderWidth : 3,
    borderColor : "red"
  }
})