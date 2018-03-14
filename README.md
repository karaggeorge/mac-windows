Mac Windows
==

Provide information about Application Windows running and activate and Application.

**Important:** This package does not work on Windows or Linux

## Instalation

To install mac-windows in your project add it using NPM
```javascript
npm install --save mac-windows
```

After that you can import the various functions as follows:
```js
import { getWindows, activateWindow } from 'mac-windows';
```

or 

```js
const getWindows = require('mac-windows').getWindows
```

## Usage

### `getWindows(opts: Object): Array`

Returns a Promise with an array containing an object for each Application currently in the screen. Information included for each Application:
- **pid:** Process Id of the Application
- **ownerName:** Name of the Application (e.g. Google Chrome)
- **name:** Title of the main window of the application (e.g. Github)
- **width:** Current width of the main window
- **height:** Current height of the main window
- **x:** Horizontal position of the main window
- **y:** Vertical position of the main window

```js
import { getWindows } from 'mac-windows';

getWindows().then(windows => {
  console.log(windows);
});

/*
[
  { 
    pid: 320,
    ownerName: 'Finder',
    name: 'Desktop',
    width: 770,
    height: 436,
    x: 295,
    y: 100 
  }, {
    pid: 11734,
    ownerName: 'Google Chrome',
    name: 'karaggeorge/mac-windows',
    width: 1276,
    height: 778,
    x: 0,
    y: 23
  }
]
*/
```

Extra options that can be passed in to `getWindows`:

| Name | Description | Type | Default Value |
|---|---|---|---|
| showAllWindows | Return all the windows for each Application instead of just the main one | `bool` | `false` |
| onScreenOnly | Return the windows from all the Applications even if they are not in the current screen | `bool` | `true` |

_NOTE:_ Swift and the AppKit Package don't support activating a specific window at the moment. When activating an Application the main window will be brought to the front. That is the last window that was used.

### `activateWindow(windowName: String)`

Activate the Application whose `ownerName` matches the given `windowName`.

Activating an Application will cause the Application's main window to come to the front of the screen. 

```js
import { activateWindow } from 'mac-windows';

activateWindow('Finder');
```

## Contributing

Please feel free to submit a Pull Request, report a Bug or propose a Feature!

Thanks to the projects this was inspired by: [Active Window](https://github.com/wk-j/mac-active-window)

This package was created for [Kap](https://github.com/wulkano/kap)

## License
MIT Licensed. Copyright (c) George Karagkiaouris 2017.

