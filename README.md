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

### Angular Client File Structure
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