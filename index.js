const fs = require('fs');
const files = fs.readdirSync('./Files');
const silence = './silence.mp3';
const numbers = fs.readdirSync('./Numbers');
// const dhh = fs.createWriteStream('./newAudioFile.mp3');
const output = fs.readdirSync('./Output');
const { exec } = require('child_process');

const run = () => {
  exec(
    'for i in ./Output/*.mp3; do ffmpeg -i "$i" -f mp3 -ab 128 -ar 44100 -ac 2 "./Schmoutput/${i%}f.mp3"; done && cat ./Output/*.mp3 > thisNewFile.mp3 && mp3wrap thisNewFile.mp3 -f -nb',
    (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      if (stderr) console.error(`stderr: ${stderr}`);
    }
  );
};

const audio = files.splice(1, files.length);
try {
  for (let i = 0; i < audio.length; i += 1) {
    console.log(silence);
    console.log(numbers[i]);
    console.log(audio[i]);
    fs.copyFile(
      silence,
      `./Output/0${i + 1}a${silence.substring(2, silence.length)}`,
      err => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      }
    );
    //   fs.copyFile(
    //     `./Numbers/${numbers[i]}`,
    //     `./Output/0${numbers[i].replace('.mp3', '')}b.mp3`,
    //     err => {
    //       if (err) throw err;
    //       console.log('source.txt was copied to destination.txt');
    //     }
    //   );
    fs.copyFile(
      `./Files/${audio[i]}`,
      `./Output/${audio[i].replace(/\s/g, '')}`,
      err => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      }
    );
  }
} finally {
  run();
}
// const fix = () => {
//   exec(`mp3val newAudioFile.mp3 -f -nb`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     if (stderr) console.error(`stderr: ${stderr}`);
//   });
// };

// const addSilence = () => {
//   const silence = fs.createReadStream('./silence.mp3');
//   silence.pipe(
//     dhh,
//     { end: false }
//   );
//   silence.on('end', () => {
//     console.log('added silence');
//   });
//   return;
// };

// // recursive function
// const main = () => {
//   if (!files.length) {
//     dhh.end('Done');
//     fix();
//     return;
//   }
//   const currentFile = files.shift();
//   const stream = fs.createReadStream(`./Files/${currentFile}`);
//   stream.pipe(
//     dhh,
//     { end: false }
//   );
//   stream.on('end', () => {
//     console.log(currentFile + ' appended');
//     addSilence();
//     main();
//   });
// };

// main();
