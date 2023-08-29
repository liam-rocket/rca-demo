import { storage } from '../../firebase';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

const STORAGE_KEY = 'images/fruits/';

export const uploadImage = async (fileInputFile) => {
  const fullStorageRef = storageRef(storage, STORAGE_KEY + fileInputFile.name);
  await uploadBytes(fullStorageRef, fileInputFile);
  const url = await getDownloadURL(fullStorageRef, fileInputFile.name);
  return url;
};

// gs://rocket-demo-580cc.appspot.com/images/istockphoto-184276818-612x612.jpg
