cc-types
--------

This repo contains type definitions for ComputerCraft:Tweaked.

Feel free to make a pull request containing improvements or missing implimentations.

## Installation
1. Install the package
```bash
npm install --include=dev @mechazawa/cc-types
```

2. Modify your `tsconfig.json`
```diff
{
  "compilerOptions": {
+   "types": [
+     "@typescript-to-lua/language-extensions",
+     "@mechazawa/cc-types"
+   ]
  }
}
```

## Progress

Done:
- [ ] Globals
  - [x] _G
  - [x] colors
  - [ ] ~colours~
  - [x] commands
  - [ ] disk
  - [x] fs
  - [ ] gps
  - [ ] help
  - [ ] http
  - [ ] io
  - [ ] keys
  - [ ] multishell
  - [x] os
  - [ ] paintutils
  - [x] parallel
  - [x] peripheral
  - [ ] pocket
  - [x] rednet
  - [ ] redstone
  - [ ] settings
  - [ ] shell
  - [x] term
  - [x] textutils
  - [x] turtle
  - [ ] vector
  - [ ] window
- [ ] Modules
  - [ ] cc.audio.dfpwm
  - [ ] cc.completion
  - [ ] cc.expect
  - [ ] cc.image.nft
  - [ ] cc.pretty
  - [ ] cc.require
  - [ ] cc.shell.completion
  - [ ] cc.strings
- [ ] Peripherals
  - [ ] command
  - [ ] computer
  - [ ] drive
  - [ ] modem
  - [ ] monitor
  - [ ] printer
  - [ ] speaker
- [x] Generic Peripherals
  - [x] energy_storage
  - [x] fluid_storage
  - [x] inventory