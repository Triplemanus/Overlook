import domUpdates from './domUpdates.js';
class Room {
  constructor (number, roomType, bidet, bedSize, numBeds, costPerNight) {
    this.number = number;
    this.roomType = roomType
    this.hasBidet = bidet || false;
    this.bedSize = bedSize || 'Queen';
    this.numBeds = numBeds || 1;
    this.costPerNight = costPerNight;
  }

  getRoomInfo(roomNumber) {
    return this;
  }
  bookRoom(userID) {

  };

  upgradeRoom() {

  }

  totalRoomsAvailable() {

  }

  totalRoomsOccupied() {

  }

  fetchRoomData() {
    const roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    roomData = parsedData.data
    // console.log(roomData)
  })
  .catch(err => console.error(err));

  return roomData;
  }
}

export default Room;