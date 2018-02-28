// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: 'Menlo, Hack',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#fff',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#ffffff',

    // terminal background color
    backgroundColor: '#171d23',

    // border color (window, tabs)
    borderColor: '#222',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '3px 10px 3px 19px',

    // Custom colors
    colors: {
      black: '#41505E',
      red: '#ff1c1c',
      green: '#00bb66',
      yellow: '#FCFF4B',
      blue: '#2058f6',
      magenta: '#888EFF',
      cyan: '#A3E7FC',
      white: '#ffffff',
      lightBlack: '#41505E',
      lightRed: '#ff1c1c',
      lightGreen: '#00bb66',
      lightYellow: '#FDFF8C',
      lightBlue: '#2058f6',
      lightMagenta: '#BEC1FF',
      lightCyan: '#BCEDFC',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: 'zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg

    // plugins configuration

    summon: {
      hideDock: false,
      hotkey: 'Alt+Space'
    },

    hypercwd: {
      initialWorkingDirectory: '~/w'
    },

    paneNavigation: {
      debug: false,
      hotkeys: {
        navigation: {
          up: 'command+up',
          down: 'command+down',
          left: 'command+left',
          right: 'command+right'
        },
        jump_prefix: 'command+shift', // completed with 1-9 digits
        permutation_modifier: 'shift', // Added to jump and navigation hotkeys for pane permutation
        maximize: 'meta+enter'
      },
      showIndicators: false, // Show pane number
      focusOnMouseHover: false
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-alternatescroll',
    'hypercwd',
    'hyperlinks',
    'hyperterm-summon',
    'hyper-tabs-enhanced',
    'hyper-pane'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
}
