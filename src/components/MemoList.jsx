import React from 'react';
import {
  View, Text, StyleSheet,TouchableOpacity,Alert
} from 'react-native';
import { Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function MemoList(){
  const navigation = useNavigation();
  return(
    <View>

      <View>
        <TouchableOpacity
         style={styles.memoListItem}
         onPress={()=>{ navigation.navigate('MemoDetail'); }}
         >
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>1010年</Text>
          </View>
          <TouchableOpacity 
            style = {styles.memoDelete}
            onPress = {()=>{Alert.alert('are you sure?')}}
          >
            <Feather name="x" size ={24} color="#B0B0B0"/>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>


      <View>
        <TouchableOpacity
         style={styles.memoListItem}
         onPress={()=>{ navigation.navigate('MemoDetail'); }}
         >
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>1010年</Text>
          </View>
          <TouchableOpacity 
            style = {styles.memoDelete}
            onPress = {()=>{Alert.alert('are you sure?')}}
          >
            <Feather name="x" size ={24} color="#B0B0B0"/>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      
      <View>
        <TouchableOpacity
         style={styles.memoListItem}
         onPress={()=>{ navigation.navigate('MemoDetail'); }}
         >
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>1010年</Text>
          </View>
          <TouchableOpacity 
            style = {styles.memoDelete}
            onPress = {()=>{Alert.alert('are you sure?')}}
          >
            <Feather name="x" size ={24} color="#B0B0B0"/>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
  
      
    </View>


  );
}

const styles=StyleSheet.create({
  memoListItem:{
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListTitle:{
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate:{
    fontSize:12,
    lineHeight: 16,
    color: '#848484'
  },
  memoDelete:{
    padding:8,
  },
});