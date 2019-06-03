// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/hotels-2.png'
import Room from './Room.js';

console.log('This is the JavaScript entry file - your code begins here.');

var data;
function timer(){
  $(document).ready(function(){
	
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    }); 
  });
  
  $('#testFetch').click(function() {
    console.log('Hello! Welcome to hell.');
    let testRoom = new Room();
    data = testRoom.fetchRoomData();
    console.log(data);
  });

  console.log(data);
}
console.log(data);

setTimeout(timer, 800);


// fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(parsedData) {
//     data = parsedData.data
//     console.log(data)
//   })
//   .catch(err => console.error(err));


// var roomData;
// fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(parsedData) {
//     roomData = parsedData.data
//     console.log(roomData)
//   })
//   .catch(err => console.error(err));
  
// import Hotel from './Hotel';
// import BookingRepo from './BookingRepo';
// import Customer from './Customer';
// import CustomerRepo from './CustomerRepo'
// import Booking from './Booking';
// import RoomServiceRepo from './RoomServiceRepo';


// import domUpdates from './domUpdates';

// let bookingRepo;
// let hotel;
// let customerRepo;
// let customer;
// let booking;
// let roomService;
// let roomServiceRepo;




// function timer() {
//   // console.log(bookingData)
//   $('ul.tabs li').click(function(){
//       var tab_id = $(this).attr('data-tab');
      
//       $('ul.tabs li').removeClass('current');
//       $('.tab-content').removeClass('current');
      
//       $(this).addClass('current');
//       $("#"+tab_id).addClass('current');
//   })
//   bookingRepo = new BookingRepo (bookingData, roomData)
//   hotel = new Hotel(bookingRepo);
//   customerRepo = new CustomerRepo (customerData, bookingData);
//   // customer = new Customer (id, name)
//   roomServiceRepo = new RoomServiceRepo (roomServiceData, customer)
//   domUpdates.showCurrentDate(hotel.currentDate);
//   domUpdates.displayAvailability(hotel.bookingRepo.calculateAvailableRoomsByDate(hotel.currentDate))
//   domUpdates.displayOccupancy(hotel.bookingRepo.calculateNumberOfOccupiedRoomsByDate(hotel.currentDate))
//   domUpdates.displayRevenueToday(bookingRepo.showTotalBookingRevenueToday(hotel.currentDate))
//   domUpdates.displayBookingDetailsPerDate(bookingRepo.returnBookingDetailsByDate(hotel.currentDate))
//   domUpdates.displayRoomServiceDetailsPerDate(roomServiceRepo.returnAllCustomerServiceOrdersForOneDate(hotel.currentDate))
//   domUpdates.displayHotelsMostPopularDate(bookingRepo.showMostPopularBookingDate());
//   domUpdates.displayHotelsLeastPopularDate(bookingRepo.showLeastPopularBookingDate());

//   function checkOccupancy() {
//       if (hotel.bookingRepo.calculateNumberOfOccupiedRoomsByDate(hotel.currentDate) === 0) {
//           $('.book-a-room-btn').removeClass('hidden')
//       }
//   }
//   checkOccupancy();
  
//   $('.book-a-room-btn').on('click', showRoomTypesInput)
//   $('.book-a-room-btn').on('submit', showRoomTypesInput)

//   function showRoomTypesInput(e) {
//       e.preventDefault()
//       if ($('.selected-customer').html() !== ""){
//           $('.rooms-by-type').slideToggle().removeClass('hidden')
//       }
//   }
  
  
//   $(".guest-search-button").on('click', searchGuest);
//   $(".guest-search-button").on('submit', searchGuest);
//   $('.add-customer-button').on('click', addGuest);
//   $('.add-customer-button').on('submit', addGuest);
//   $('.search-rooms-by-date-btn').on('click', searchAvailableRooms);
//   $('.search-rooms-by-date-btn').on('submit', searchAvailableRooms);
  
//   $('#room-type-list').on('change', displayAllTodaysAvailableRooms);


//   function searchGuest(e) {
//       e.preventDefault()
//       let inputValue = $(".guest-search-input").val()
      
//       let obj = customerRepo.findCustomerByName(inputValue)
//       if(!obj) {
//         domUpdates.displayErrorMsg()
//       } else {
//       customer = new Customer(obj.id, obj.name)
//       console.log(customer)
//       domUpdates.displayName(obj)
//       if (customerRepo.findOneCustomersBookings(obj.name).length === 0) {
//           domUpdates.displayNoBookingsMessage();
//       } else {
//           domUpdates.displayAllOnesCustomerBookings(customerRepo.findOneCustomersBookings(obj.name))
//       }
//       }
//       $(".guest-search-input").val('')
//       $('.book-a-room-btn').removeClass('hidden')
//     }

//   function addGuest(e) {
//       e.preventDefault()
//       let inputValue = $(".add-customer-input").val()
//       customer = new Customer(Date.now(), inputValue)
//       customerData.push(customer);
//       domUpdates.displayNewName(customer)


//       if (customerRepo.findOneCustomersBookings(customer.name).length === 0) {
//           domUpdates.displayNoBookingsMessage();
//       } else {
//           domUpdates.displayAllOnesCustomerBookings(customerRepo.findOneCustomersBookings(customer.name))
//       }
//       $(".add-customer-input").val('')
//       $('.book-a-room-btn').removeClass('hidden')
//     }
  
//   function searchAvailableRooms(e) {
//       e.preventDefault()
//       let inputValue = $(".search-date-input").val()
//       let objs = bookingRepo.returnAvailableRooms(inputValue)
//       if(!inputValue) {
//         domUpdates.displayDateErrorMsg()
//       } else {
//       domUpdates.displayAvailableRoomsByDate(bookingRepo.returnAvailableRooms(inputValue))
//       }
//       $(".search-date-input").val('')
//     }

//     function displayAllTodaysAvailableRooms(e) {
//       e.preventDefault()
//       let inputValue = $("#room-type-list").val()
//       if(bookingRepo.filterTodayAvailableRoomsByType(hotel.currentDate, inputValue).length === 0){
//           domUpdates.appendRemainingRoomsAfterFilter(bookingRepo.returnAvailableRooms(hotel.currentDate))
//       }
//       domUpdates.filterAllRoomsByDateAndType(bookingRepo.filterTodayAvailableRoomsByType(hotel.currentDate, inputValue));           
//   }
  

//   $('#tab-3').on('click', createBookingforToday);
//   $('#tab-3').on('submit', createBookingforToday);

//     function createBookingforToday(e) {
//           e.preventDefault()
//           let value = parseInt(e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML)             
//           if ($('.selected-customer').html() !== "" && e.target.matches('#book-btn-today')){
//               booking = new Booking (customer.id, hotel.currentDate, value)
//               bookingData.push(booking)
//               console.log(bookingRepo.returnAvailableRooms(hotel.currentDate).length)
//               domUpdates.displayAvailability(bookingRepo.returnAvailableRooms(hotel.currentDate).length)
//               let name = $('.selected-customer').html();
//               domUpdates.displayNewBooking(name, booking)
//           }
//     }




// }

// setTimeout(timer, 800);
