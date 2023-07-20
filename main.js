im = ['...###...###...'.split(""),
      '..#...#.#...#..'.split(""),
      '.#.....#.....#.'.split(""),
      '.#.....#.....#.'.split(""),
      '..##.......##..'.split(""),
      '....##...##....'.split(""),
      '......#.#......'.split(""),
      '.......#.......'.split("")];

let HEIGHT = im.length;
let WIDTH = im[0].length;

function floodFill(image, x, y, newChar, oldChar) {
    if (oldChar === undefined) {
        oldChar = image[x][y];
    }
    if ((oldChar === newChar) || (oldChar !== image[x][y])) {
        return;
    }

    image[x][y] = newChar;

    if ((x + 1 < HEIGHT) && (image[x + 1][y] === oldChar)) {
        floodFill(image, x + 1, y, newChar, oldChar);
    }
    if ((x - 1 > 0) && (image[x - 1][y] === oldChar)) {
        floodFill(image, x - 1, y, newChar, oldChar);
    }
    if ((y + 1 < WIDTH) && (image[x][y + 1] === oldChar)) {
        floodFill(image, x, y + 1, newChar, oldChar);
    }
    if ((y - 1 > 0) && (image[x][y - 1] === oldChar)) {
        floodFill(image, x, y - 1, newChar, oldChar);
    }
    return;
}

function printImage(image) {
    document.write('<pre>');
    for (let x = 0; x < HEIGHT; x++) {
        for (let y = 0; y < WIDTH; y++) {
            document.write(image[x][y]);
        }
        document.write('\n');
    }
    document.write('\n</pre>');
}

let count = 0;
printImage(im);
for (let x = 0; x < HEIGHT; x++) {
    for (let y = 0; y < WIDTH; y++) {
        if (im[x][y] === '.') {
            count += 1;
            floodFill(im, x, y, newChar='o')
        } else {
            continue;
        }
    }
}
printImage(im);
document.write('The numbers of closed shapes is: ' + count);