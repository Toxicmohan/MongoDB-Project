db.studentdetails.find({$and: [{ Gender: "Female" },{ class: "X" }]})
db.studentdetails.countDocuments({$and:[{Gender:"Female" },{class: "X" }]})
db.studentdetails.find({$and:[{Gender:"Male" },{class: "X"}]})
db.studentdetails.countDocuments({
  $and: [
    { Gender: "Male" },
    { class: "V" }
  ]
})
db.studentdetails.find({
  $and: [
    { Gender: "Male" },
    { grd_point: { $gte: 19 } },
    { class: "X" }
  ]
})
db.studentdetails.find({
  $and: [
    { Gender: "Female" },
    { grd_point: { $gte: 36 } }
  ]
})
db.studentdetails.find({
  $and: [
    { grd_point: { $gte: 30 } },
    { grd_point: { $lte: 35 } }
  ]
})
db.studentdetails.find({
  $and: [
    { age: { $gte: 20 } },
    { age: { $lte: 128 } }
  ]
})