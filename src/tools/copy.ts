// import path from 'path';
// import rCopy from 'recursive-copy';

async function copy() {
  await Promise.all([
    // here you can copy any folders you want in build folder
    // await rCopy(path.resolve(__dirname, '../i18n/messages'), path.resolve(__dirname, '../../build/messages')),
  ])
}

export default copy
