import { Web3Storage } from 'web3.storage';
export const uploadBook = (req, res) => {
  try {
    const file = req.file;
    console.log(req.files, 'files');
    console.log(req.file, 'file');
    console.log(req.body, 'body');
  } catch (e) {}
};
