### Booking Hotel App

## Skills: 

      1. Back-End - Node.js
      2. Front-End - React.Js
      3. Databases - MongoDB.

## 1.Node.Js -Api

- Initialize npm
- Initialize git repo
- Create .gitignore
- Create index.js

note:update package.json if you are using other file name as entry point

## Install packages

- Review package.json for dependencies 

<img width="750" alt="image" src="https://user-images.githubusercontent.com/43902822/211706460-226af379-fb1d-4395-921d-81ee43c96444.png">


- Create .env for environment variables

- Require express and create basic web server

- Update package.json to have dev script

### Planning

## Endpoints and Controllers

## | endpoint name | endpoint | purpose |aciton type| controller|
## User

| Update User |`api/users/id`| modify |User | PUT | updateUser |
| Get Users |`api/users`| get all Users | GET | getUsers |
| Get User |`api/users/id` | get specific user | GET | getUser |
| Delete User |`api/users/id`| delete | User | DELETE | deleteUser |

## Hotel

| Create Hotel | `api/hotels`| create  | Hotel | POST | createHotel |
| Update Hotel | `api/hotels/id`| modify |Hotel | PUT | updateHotel |
| Get Hotels | `api/hotels`| get all Hotels | GET | getHotels |
| Get Hotel | `api/hotels/id` | get specific hotel | GET | getHotel |
| Delete Hotel | `api/hotels/id`| delete | Hotel | DELETE | deleteHotel |
| Count by Hotel Type | `api/hotels/countByType` | gets hotel counts | Hotel | countByType |
| Count By City | `api/hotels/countByCity?city=Calgary,Edmontom,Lake Louise` | gets hotel counts | Hotel | countByType |
| featured, min and max | `api/hotels?featured=true&min=10&max=200``| mai and max price | GET | getHotels |
| get Hotel Room | `api/hotels/room/hotelid`| getHotelRooms | Hotel | get | getHotelRoom |

## Room

| Create Room | `api/rooms/hotelid`| create  |  User | POST | createRoom |
| Update Room | `api/rooms/id`| modify | Update | PUT | updateRoom |
| Get Rooms | `api/rooms`| get all Users | GET | getRooms |
| Get Room | `api/rooms/roomid` | get specific user | GET | getRoom|
| Delete Room | `api/rooms/hotelid`| delete | User | DELETE | deleteRoom |
| Update Dates Room Available=> params given "dates" | `api/rooms/availablity/roomid/ | Update | PUT | updateRoomAvailability |


### Data Models

## 2. React App - Client 

<img width="750" alt="image" src="https://user-images.githubusercontent.com/43902822/211706115-039c9459-af4a-42c6-9872-fc3e16226a8c.png">

## Install packages

### Planning

## Endpoints and Controllers



