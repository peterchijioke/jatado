import DocumentPicker, {isInProgress} from 'react-native-document-picker';
// filter module
import DataFile from '../data/DataFile';
export function searchData(setData) {
  return text => {
    let data__ = DataFile;
    const result = data__.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(result);
  };
}

// Error handler for doc picker
export const errorHandler = err => {
  if (DocumentPicker.isCancel(err)) {
    console.warn('cancelled');
  } else if (isInProgress(err)) {
    console.warn(
      'multiple pickers were opened, only the last will be considered',
    );
  } else {
    alert(err.toString());
  }
};

export function _result_(setFile) {
  return data => {
    setFile(data);
  };
}

export function docValidationModule(fileEx) {
  return () => {
    try {
      let ex = fileEx[0].name
        .substring(fileEx[0].name.indexOf('.') + 1)
        .toLowerCase();
      if (ex == 'pdf' || ex == 'doc' || ex == 'docx') {
        return 'Thank you for uploading rightly :)';
      }
      return 'This is not a document or pdf';
    } catch (e) {
      console.log(e.message);
    }
  };
}
