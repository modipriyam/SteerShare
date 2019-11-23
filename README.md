# INFO6150 Final Project



## Team: Script Magnets
* Jiachen Yu (yu.jiac@husky.neu.edu)
* Viraj Rajopadhye (rajopadhye.v@husky.neu.edu)
* Priyam Modi (Modi.Pri@husky.neu.edu)
* Harshit Mandada (mandada.h@husky.neu.edu)

## Project Overview
### Title : Carpooling application
 ### Features: 
* Find a ride based on passengers parameters
* Offer a ride (User can offer a ride if he is travelling from X to Y place)
* Book a ride
* Search from-to location using Google Map / Map API
* Login/Register(with profile picture of specified dimensions)
* Password recovery using email
* Payment using credit/debit card
* Email confirmation of booking with PDF
* Chat between Driver and Passenger
* Rating (optional)

### To Run the project
This project has two major parts, which are Angular client and Node server. It needs to be run SEPARATELY on different ports!
#### Client Angular
Change the working directory to the client folder
`cd Client-Angular`
Install all the dependencies
`npm install`
Start the angular server
`ng serve`

#### Server Node
Change the working directory to the server folder
`cd Server-Node`
Install all the dependencies
`npm install`
Start the angular server
`node server.js`

### Angular Client File Structure
    ./Client-Angular
    ├── app                             
        ├── home                        # Components related to Home page go in here
        ├── nav-bar                     # Components related to navbar go in here       
        ├── rides                       # Components related to rides go in here
            ├── search                       # Search page
            └── Post                         # Post page
        ├── users                       # Compoennts related to users go in here
            ├── Login                        # Login page
            └── Personal page                # (Not created yet)Personal home page
        ├── services                    # All the files related to service go in there
            ├── ride.service.ts              # Ride data service related functions are defined here, like search or add a ride
            └── user.service.ts              # User data service related functions are defined here, like add or get a user
        └── app-routing.modules.ts      # Routing table
        └── app.component.html          # Only add compoenents that will appear on every page to this file, like navbar
    └── ...

### Node Client File Structure
    ./Server-Node
    ├── app                             
        ├── controllers                        
            ├── userController.js       # Handles response and request related to users
            └── postController.js       # Handles response and request related to posts
        ├── models                    
            ├── post.js                 # Data model - Post
            └── user.js                 # Data model - User
        ├── routes                       
            └── routes.js               # Direct requests to controllers based on the url
        ├── services                      
            ├── postServices            # Perform actual database actions related to Post
            └── userServices            # Perform actual database actions related to User
        ├── app.js                      # Import the data models and routes
    ├── server.js                       # Definition of the app and the settings
    └── ...