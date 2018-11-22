# DRINKIO readme

### Process
1. Decide on API - [BreweryDB](https://www.brewerydb.com/developers)
2. Build basic skeleton for project and research API/how to connect to Node
3. Realize that connecting to an API on top of writing the server is HARD
4. Give up on that and create our own JSON file
5. Slowly work through each step as a team

### DEV dependencies
- nodemon
- tape
- tap-specap

### config.js file
!!! ~ Not necessary now that we no longer use the API ~ !!!

config.js must be created in the ``` src ``` folder. The content is:
```
const config = {
    api: 'YOUR_API_KEY_HERE'
}
```

For testing, feel free to contact us for our key, or create your own at [the BrewDB website](https://www.brewerydb.com/developers/apps) (note: you must first create your own profile)

### gitignore file

It must be in the ``` drinkio ``` folder and include the following:
```
node_modules

src/config.js/
```
