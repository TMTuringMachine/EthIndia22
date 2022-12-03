import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';
import 'dotenv/config';

export const uploadBook = async (acceptedFiles) => {
  const client = new Web3Storage({
    token: process.env.REACT_APP_STORAGE_API,
  });
  const rootCid = await client.put(acceptedFiles, {
    name: 'userAddress',
    maxRetries: 3,
  });
  console.log(rootCid);
};
export const getAllBooks = async () => {};
