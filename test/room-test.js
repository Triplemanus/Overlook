import chai from 'chai';
const expect = chai.expect;

import Room from '../src/Room.js';

describe('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(101, "Normal", true, "King", 1, 400);
  });

  it('should be a function', function() {
    expect(Room).to.be.a("function");
  });
  it("should be an instance of Room", function() {
    expect(room).to.be.an.instanceof(Room);
  });

  it("should return Room information", function() {
    expect(room.getRoomInfo()).to.eql({
      number: 101, 
      roomType: "Normal",
      hasBidet: true,
      bedSize: "King",
      numBeds: 1,
      costPerNight: 400
    });
    const room2 = new Room(141, "residential suite", false, "queen", 2, 481.3);
    expect(room2.getRoomInfo(141)).to.eql({
      number: 141,
      roomType: "residential suite",
      hasBidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 481.3})
  });
});
