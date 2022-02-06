import React, {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';

import {
  searchData,
  errorHandler,
  docValidationModule,
} from '../controller/Controllers';
import {
  _TextInput,
  btnAndValidationMessage,
  dataListView,
} from './components/Components';

const Home = () => {
  const [data, setData] = useState([]);
  const [fileEx, setFile] = useState([]);
  const findItem = searchData(setData);
  const handleError = errorHandler;
  const _Result = _result_(setFile);
  const file_validation = docValidationModule(fileEx);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {_TextInput(findItem)}
      {data.length != 0 ? dataListView(data) : null}
      {btnAndValidationMessage(_Result, handleError, file_validation)}
    </View>
  );
};

export default Home;

function _result_(setFile) {
  return data => {
    setFile(data);
  };
}
