import { realTimeDatabase, storage } from '../../firebase';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

const STORAGE_KEY = 'images/';

export const uploadImage = async (fileInputFile) => {
  const fullStorageRef = storageRef(storage, STORAGE_KEY + fileInputFile.name);
  await uploadBytes(fullStorageRef, fileInputFile);
  const url = await getDownloadURL(fullStorageRef, fileInputFile.name);
  return url;
};
