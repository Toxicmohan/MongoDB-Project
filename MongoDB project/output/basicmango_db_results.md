# Basic MongoDB Database Query Results

## Dataset Info

* Database: studentdetails
* Collection: student
* Total: 6 students
* Fields: \_id, std\_name, Gender, class, age, grd\_point

---

## Query 1: Find Female Students in Class "X"

**Query:**

```javascript
db.studentdetails.find({$and: [{ Gender: "Female" },{ class: "X" }]})
```

### Output:

```json
[
  {
    "_id": 4,
    "std_name": "Geetha",
    "Gender": "Female",
    "class": "X",
    "age": 17,
    "grd_point": 36.2514
  },
  {
    "_id": 5,
    "std_name": "Bhomika",
    "Gender": "Female",
    "class": "X",
    "age": 19,
    "grd_point": 35.5201
  }
]
```

---

## Query 2: Count Female Students in Class "X"

**Query:**

```javascript
db.studentdetails.countDocuments({$and: [{ Gender: "Female" },{ class: "X" }]})
```

### Output:

```json
2
```

---

## Query 3: Find Male Students in Class "X"

**Query:**

```javascript
db.studentdetails.find({$and: [{ Gender: "Male" },{ class: "X" }]})
```

### Output:

```json
[]
```

---

## Query 4: Count Male Students in Class "V"

**Query:**

```javascript
db.studentdetails.countDocuments({
  $and: [
    { Gender: "Male" },
    { class: "V" }
  ]
})
```

### Output:

```json
2
```

---

## Query 5: Find Male Students in Class "X" with Grade Points >= 19

**Query:**

```javascript
db.studentdetails.find({
  $and: [
    { Gender: "Male" },
    { grd_point: { $gte: 19 } },
    { class: "X" }
  ]
})
```

### Output:

```json
[]
```

---

## Query 6: Find Female Students with Grade Points >= 36

**Query:**

```javascript
db.studentdetails.find({
  $and: [
    { Gender: "Female" },
    { grd_point: { $gte: 36 } }
  ]
})
```

### Output:

```json
[
  {
    "_id": 4,
    "std_name": "Geetha",
    "Gender": "Female",
    "class": "X",
    "age": 17,
    "grd_point": 36.2514
  }
]
```

---

## Query 7: Find Students with Grade Points Between 30 and 35

**Query:**

```javascript
db.studentdetails.find({
  $and: [
    { grd_point: { $gte: 30 } },
    { grd_point: { $lte: 35 } }
  ]
})
```

### Output:

```json
[
  {
    "_id": 2,
    "std_name": "Dechamma",
    "Gender": "Female",
    "class": "VI",
    "age": 13,
    "grd_point": 30
  }
]
```

---

## Query 8: Find Students with Age Between 20 and 128

**Query:**

```javascript
db.studentdetails.find({
  $and: [
    { age: { $gte: 20 } },
    { age: { $lte: 128 } }
  ]
})
```

### Output:

```json
[]
```

---
