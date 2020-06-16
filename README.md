# LOLOT UI

LOLOT is a web application that allows *League of Legends* players to keep track of their Hextech Chest rewards via Champion Mastery for the current season.

## Development

This web application was developed using [Angular](https://angular.io/).

## Configuration

## How to Set Up and Run Locally
### Prerequisites
+ Make sure the aforementioned **Configuration** options have been addressed.
+ Make sure [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) are installed and configured on your machine.

### Steps - Mock Data
1. Clone this repository to a location of your choosing with:
``` bash
git clone https://github.com/abaran30/lolot-ui.git
```

2. Inside the cloned directory, run:
``` bash
npm install
```

3. Once the npm packages have been installed, run:
``` bash
npm start
```

4. The web application will start locally on http://localhost:4200.

### Steps - Live Data with LOLOT API

1. Perform Steps 1 and 2 in **Steps - Mock Data**.

2. Remove the following import from `app.module.ts`:
``` typescript
environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryLolotService)
```

3. Setup the [LOLOT API](https://github.com/abaran30/lolot-api) by following **How to Set Up and Run Locally**.

4. Once the LOLOT API is running on http://localhost:3030, run:
``` bash
npm start
```

5. The web application will start locally on http://localhost:4200.

## Testing

To run the unit tests, run:
``` bash
npm test
```

## Disclaimer

LOLOT isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.