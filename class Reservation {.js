class Reservation {
  constructor(name, guests, time) {
    this.name = name;
    this.guests = guests;
    this.time = time;
  }
}

class Restaurant {
  constructor() {
    this.reservations = [];
  }

  addReservation(name, guests, time) {
    const reservation = new Reservation(name, guests, time);
    this.reservations.push(reservation);
  }

  displayReservations() {
    console.log("Current Reservations:");
    this.reservations.forEach(reservation => {
      console.log(`Name: ${reservation.name}, Guests: ${reservation.guests}, Time: ${reservation.time}`);
    });
  }
}

// Example usage
const restaurant = new Restaurant();
restaurant.addReservation("John Doe", 4, "7:00 PM");
restaurant.addReservation("Jane Smith", 2, "8:30 PM");
restaurant.displayReservations();