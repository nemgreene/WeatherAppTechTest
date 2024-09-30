# Weather App

![image 1](https://github.com/echo724/notion2md/assets/78376735/6b880ad1-3ff2-4cdd-8d06-ff708314772d)

### Objective

Using a NX monorepo, TypeScript, React and Next.js your task is to build a Weather App.

### Brief

Use data from the [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) and display it so it looks like [this design document](https://www.figma.com/file/FNdVsOUJA53CWMW9mnraYk/Weather-App?type=design&node-id=0%3A1&t=FPsFSmGIgDaH48F6-1). It doesn't have to be pixel pefect- but should maintain functional and operational integrity when used on different types of devices with different screen resolutions.

### Tasks

Fork this branch and then design, organise, test, lint and document your code using the scenario of it being deployed to production and be used by a user base of approx. 5,000 daily active users.

- The app can be accessed through a public URL.
- On first load, the app should show the weather for a specific place.
- Users can see accurate and relevant weather information based on their search.
- Users are able to see relevant information displayed in different metrics.
- Users are notified if there is no information returned from their search.
- See product backlog below

### Development

The NX monorepo handles tasks relating to your codebase. 

#### Deployment

Visit the project deployed to vercel [here](https://weather-app-tech-test-lnhgfb2xi-vincents-projects-5c96a4d1.vercel.app/)

#### Clone and install

Clone the project down and navigate to the root
Create `.env` file, and store API key as `NEXT_PUBLIC_WEATHER_API_KEY`
Install the project dependencies with `npm i`
Start the project in development with `npx nx run weather-app:dev`

### Implementation Details

Product Backlog, completed tasks indicated by ~~strikethrough~~:

#### Project startup
- ~~Implement MUI theming for Next~~
- ~~Implement Custom MUI theme variables with custom properties~~
- ~~Define valid user input types (city, village, county, long/lat etc)~~
- ~~Define mobile user layout~~

##### ApiClient
- ~~Implement Internal api call~~
- ~~Implement fetch call to weather api~~
- ~~Instance API client in app~~
- ~~Fecth current weather data with location name~~
- ~~Fecth current weather data with location lat/long~~
- ~~Fetch forecast weather data with lcoation name~~
- ~~Fetch forecast weather data with lcoation lat/long~~

##### App landing page:


###### Sidebar:
- ~~Receive current day weather~~
- ~~Display current weather City Name~~
- ~~Display current weather Date~~
- ~~Display current weather icon~~
- ~~Display current weather temperature~~
- ~~Display current weather conditions~~
- ~~Create search bar to search location~~
- ~~Validate user input~~
- ~~Fetch data on successful user input~~
- ~~NTH: Animations: hover feedback on icon~~

###### Main Dash
- ~~Prompt users for location permission~~
- ~~Suspense fallback for if no permission granted to prompt user to enter location details~~
- ~~Suspense fallback for loading weather data~~
- ~~Suspense fallback for no data returned from api (invalid search)~~
- ~~Suspense fallback for no data returned from api (no response/api problem)~~
- ~~Humidity Card~~
- ~~Cloud Cover Card~~
- ~~Max Temp Card~~
- ~~Min Temp Card~~
- ~~Sunrise Card~~
- ~~Sunset Card~~
- ~~Forecast~~
- ~~Metric toggle button/indicator~~
- ~~NTH: Animations: fade in tiles (cascade) on received data ~~
- ~~NTH: Animations: fade out tiles (cascade) on successful user submit ~~

###### Humidity/Cloud Cover card
- ~~Metric (Percentage)~~
- ~~Metric Slider (percentage)~~

###### Min/Max Temp/Sunrise/Sunset card
- ~~Metric (Percentage)~~
- ~~NTH: Metric change on click~~
- ~~NTH: Animations: slide in/out metrics on metric change~~

##### Forecast:


###### Forecast Cards
- ~~Day/Date (Tomorrow, Sun, 27 May, ...)~~
- ~~Condition Icon~~
- ~~Condition Description~~
- ~~Day High <- > Day Low~~
- ~~NTH: Animations: hover feedback on icon~~
- ~~NTH: Metric change on click~~
- ~~NTH: Animations: slide in/out metrics on metric change~~


#### Outside scope

- Location is stored in state, add a button to toggle the user back to their location at any point in user journey
- Allow location prompt is currently not keybaord accesible. This must be handled for keybaord only users
- Testing. Description of these can be found in apps\weather-app-e2e\src\example.spec.ts
- CI/CD pipeline with Github Action

Project launches with an expected 5000 users per day. Weather APIs Free plan (implemented here) only accepts 1000 users per day. Either:
- Upgrade to paid plan
  - Costs, may not be a viable solution
- Dedicated servers
  - Load balancer to allocate requestst between servers (described by --user bucketing)
  - Need for Significant architecture implemented that will reduce total calls to API, great solution for a metered subscription
  - Server caching by user bucketing
  - Update daily forecast at increments described by need for fidelity
  - Update weekly forecast at increments described by same, likely with lower priority allowing for request optimization
  - Server storage demands scales with user bucketing 

