import React ,{useEffect} from 'react';
import {shape,string} from 'prop-types';
import { View, ScrollView, Text, StyleSheet} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';


export default function MemoDetailScreen(props){
  const{navigation,route}=props;
  const{id} = route.params;
  console.log(id);

  useEffect(()=>{
    const {currentUser} = firebase.auth();
    let unsubscribe=()=>{};
    if(currentUser){
      const db = firebase.firestore();
      const ref = db.collection(`user/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc)=>{
          console.log(doc.id,doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;

  },[]);

  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style= {styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>16時31分</Text>
      </View>
      <ScrollView style={styles.memoBody}>
          <Text style={styles.memoText}>
          買い物リスト
        
        </Text>
      </ScrollView>
      <CircleButton style={{top: 60,bottom: 'auto'}} name="edit-2"
      onPress={() => {navigation.navigate('MemoEdit');}}/>
    </View>
  );
}

MemoDetailScreen.propTypes ={
  route: shape({
    params: shape({id:string}),
  }).isRequired,
};


const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  memoHeader:{
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle:{
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate:{
    color: '#ffffff',
    fontSize: 12,
    lineHeight : 16,
  },
  memoBody:{
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText:{
    fontSize: 16,
    lineHeight: 27,
  }

});