# GitHub README ServerTracker
You can now track servers on your github profile!  
It is as simple as adding one line to your README  
```md
[![GFL ZE](https://api.snowy.gg/tracker/csgo/216.52.148.47/27015)](https://github.com/SnowyGFL/github-readme-servertracker)
```
URL format: `example.com/tracker/:game/:ip/:port`  
You can change the game, IP, port to whichever server you want.    
Please check the [supported game list here](https://github.com/gamedig/node-gamedig#games-list)

### Example
[![GFL CSGO ZE](https://api.snowy.gg/tracker/csgo/216.52.148.47/27015)](https://github.com/SnowyGFL/github-readme-servertracker)

[![GFL CSS ZE](https://api.snowy.gg/tracker/css/92.119.148.14/27015)](https://github.com/SnowyGFL/github-readme-servertracker)

[![GFL GMOD PH](https://api.snowy.gg/tracker/garrysmod/92.119.148.4/27015)](https://github.com/SnowyGFL/github-readme-servertracker)

<sub>Card idea taken from [here](https://github.com/anuraghazra/github-readme-stats)</sub>


### Self-Hosting the API
```sh
# Install dependencies
npm install

# Run the server using node
node server.js
```
