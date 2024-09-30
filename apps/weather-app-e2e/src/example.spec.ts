import { test, expect } from '@playwright/test';

//Implementing a full set of tests is outside of scope due to time constraints, so this app has been tested ad hoc

//Before launching any product to production, these tests should be implemented

//Test on page load that location api alert opens
//Test on page load that present in the page
//  Circular throbber
//  Awaiting Permmissions (h4)
//  Allow permissions to continue(h5)
//  Northeast Icon

//If user rejects location permissions
//  (How to siumulate this?)
//  Input Field/Button/Form is active
//  No Location Available (h4/h6)
//  Enter yor location (h5)

//If user accepts location permissions
//  Loading your data
//  Circular throbber
//  Please Wait
//  (Delay 5 seconds)
//  In DOM:
//    You (h2)
//    (N)°C(h2)
//    Icon in sidebar
//    condition in sidebar
//    °C button is active
//    Day overview (h5)
//    5 Day (h5)
//    8 icons total
//    Humidity
//    Cloud Cover
//    Max Temp
//    Min Temp
//    Sunrise
//    Sunset
//    5 forecast cards

//Form tests
//Focus form
//Click button
//Enter Location is in DOM (h5, red)
//Focus form
//input "1892"
//Invalid location is in DOM (h5, red)
//Click button
//Verify focus is on input
//input "asds"
//Toastr appears "No location match"
//Verify focus is on input
//Input "Los Angeles"
//Verify update of DOM (see list above)

//Click metric button °C
//Delay 1 second
//Verify °C in dom
//Verify 24 hr time
//Click metric button °F
//Delay 1 second
//Verify °F in dom
//Verify 12 hr time

test('has title', async ({ page }) => {
  await page.goto('/');
});

/* 

Product Backlog:

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

##### Main Dash
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

###### M/M Temp/Sunrise/Sunset card
- ~~Metric (Percentage)~~
- ~~NTH: Metric change on click~~
- ~~NTH: Animations: slide in/out metrics on metric change~~

###### Forecast:
Forecast Cards

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
  
  */
