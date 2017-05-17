Airplane.destroy_all

plane1 = Airplane.create({
    name: "Plane #1",
    rows: 30,
    columns: "A, B, C, D, E, F"
  })

plane2 = Airplane.create({
    name: "Plane #2",
    rows: 20,
    columns: "A, B, C, D"
  })

puts "Airplane Count: #{Airplane.all.count}"

Flight.destroy_all

flight1 = Flight.create({
  airplane_id: plane1.id,
  flight_number: "QF 1",
  origin: "Sydney",
  destination: "Los Angeles"
  })

flight2 = Flight.create({
  airplane_id: plane2.id,
  flight_number: "VA 90",
  origin: "Melboure",
  destination: "Brisbane"
  })


puts "Flight Count: #{Flight.all.count}"

User.destroy_all

user1 = User.create({
  first_name: "John",
  last_name: "Smith",
  email: "john.smith@test.com"
  })

user2 = User.create({
  first_name: "Cameron",
  last_name: "Citizen",
  email: "cameron.citizen@test.com"
  })

puts "User Count: #{User.all.count}"

Reservation.destroy_all

res1 = Reservation.create({
  user_id: user1.id,
  flight_id: flight1.id,
  rows: 3,
  columns: "A"
  })

res2 = Reservation.create({
  user_id: user2.id,
  flight_id: flight2.id,
  rows: 16,
  columns: "B"
  })

puts "Reservation Count: #{Reservation.all.count}"
