import React, {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';

export function _TextInput(findItem) {
  return (
    <View style={styles.txtInput}>
      <TextInput
        placeholderTextColor={'#ccc'}
        style={styles.input}
        onChangeText={name => findItem(name)}
        placeholder="type a name"
      />
    </View>
  );
}

export function btnAndValidationMessage(_Result, handleError, file_validation) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
      }}>
      <Button
        title="Click to upload file (.doc or .pdf)"
        onPress={docPicker(_Result, handleError)}
      />
      <Text style={{color: 'tomato', textAlign: 'center', paddingTop: 10}}>
        {file_validation()}
      </Text>
    </View>
  );
}

function docPicker(_Result, handleError) {
  return () => {
    DocumentPicker.pick({
      allowMultiSelection: true,
      type: [types.doc, types.docx],
    })
      .then(_Result)
      .catch(handleError);
  };
}

export function dataListView(data) {
  return (
    <FlatList
      style={{flex: 1}}
      data={data}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => alert(item.name)} style={styles.btn}>
            <Text style={{color: 'black', fontSize: 20}}>{item.name}</Text>
          </Pressable>
        );
      }}
      keyExtractor={(item, i) => i.toString()}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    margin: 20,
    borderWidth: 1,
    padding: 15,
    color: '#000',
    borderColor: '#133',
    alignSelf: 'center',
    borderRadius: 25,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#fff',
    marginBottom: '5%',
    width: '80%',
    elevation: 7,
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: '95%',
    alignSelf: 'center',
    height: 100,
    marginBottom: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});
