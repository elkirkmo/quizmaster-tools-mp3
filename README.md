# Quizmaster Audio Consolidater

This is a simple utility that you can use to combine multiple mp3 files into one mp3 file separated by 4 seconds of silence between each song. Who might this be useful for? Quizmasters and people who like things to be in one audio file.

## Setup

This is a [node](https://nodejs.org/en/) utility that also uses the open source package [mp3val](http://mp3val.sourceforge.net/index.shtml).

### Mac

Install node

`brew install node`
`brew install mp3val`

### Linux

`sudo apt-get install node`
`sudo apt-get install mp3val`

_Substite `apt-get` with `yum` if you gotta be all debian like that_

### PC

[Install linux](https://ubuntu.com)

## Usage

Add the files you want to concatenate and then run `node mp3`

## Future improvements

Bored and looking for things to do? Here are some features that would be nice to add.

- input a .zip instead of file folder
- variable output filename
- prefixing the "Question number _x_" audio file
- better error handling
