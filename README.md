# Rock Paper Scissors - Game

`rock-paper-scissors-game` is a simulator of the classic rock paper scissors game. The application is programmed on the basis of guidelines from Kodilla's Bootcamp and was used to learn the basics of JavaScript. Layout and effects are own invention without a template in .psd.

## Installation

No installation is necessary. Just clone the repository and open index.html in your browser.

```
git clone git@github.com:jerzy-jarczynski/golden-landing.git
```

### For developers

There is a package.json file in the repository containing task-runner. Dependencies can be installed in the standard way using npm:

```
npm install
```

Then you can run task watch on localhost:3000 with automatic refreshing of changes in the browser and conversion of SASS to CSS.

```
npm run watch
```

NOTE: There are differences in size of layout while running just index.html and localhost:3000. At the moment I don't know how to fix this.

## Release

To place the project on the server, copy directories and files from the list:
- `index.html`
- `css` directory with content
- `images` directory with content
- `js` directory with content

## Used technologies

`HTML`, `CSS/SASS`, `RWD`,  `JavaScript`

Using JavaScript, I implemented a score counter, game mechanics and difficulty levels. The game cannot be won or lost. The score counter is just a statistic. You can use it to examine the operation of the Math.random() functions used.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Demo

You can see living demo without cloning or downloading the repo:

1. CodePen:

[https://codepen.io/jerzyjarczynski/pen/abjXwGz](https://codepen.io/jerzyjarczynski/pen/abjXwGz)

2. My personal domain:

[https://rps.jarczynski-dev.pl/](https://rps.jarczynski-dev.pl/)

## Issues

The RWD is not perfect. The layout was designed for tablet and it is the best device to play the game. UX is not perfect as well. To activate buttons you have to click on PC image at first, but there is not communicate about that so it seems that the game is broken.