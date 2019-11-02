const fs = require('fs');
const files = fs.readdirSync('./Files');
const dhh = fs.createWriteStream('./newAudioFile.mp3');
const { exec } = require('child_process');

const fix = () => {
  exec(`mp3val newAudioFile.mp3 -f -nb`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
};

const addSilence = () => {
  const silence = fs.createReadStream('silence.mp3');
  silence.pipe(
    dhh,
    { end: false }
  );
  silence.on('end', () => {
    console.log('added silence');
  });
  return;
};

addCount = count => {
  const countStream = fs.createReadStream(`./Numbers/${count}.mp3`);
  countStream.pipe(
    dhh,
    { end: false }
  );
  countStream.on('end', () => {
    console.log('added number');
  });
  return;
};

// recursive function
const main = () => {
  if (!files.length) {
    dhh.end('Done');
    fix();
    return;
  }
  const currentFile = files.shift();
  addCount(parseInt(currentFile.substring(0, 2)));
  const stream = fs.createReadStream(`./Files/${currentFile}`);
  stream.pipe(
    dhh,
    { end: false }
  );
  stream.on('end', () => {
    console.log(currentFile + ' appended');
    addSilence();
    main();
  });
};

main();
