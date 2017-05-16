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

flight1 = Flight.create({
  airplane_id: plane2.id,
  flight_number: "VA 90",
  origin: "Melboure",
  destination: "Brisbane"
  })


puts "Flight Count: #{Flight.all.count}"
