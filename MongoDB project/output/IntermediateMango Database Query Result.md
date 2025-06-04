# Intermediate Mango Database Query Results

## Dataset Info

* Database: favorites
* Collection: details
* Total: 4 records
* Fields: \_id, name, favorites

## Demonstrate Queries to Match Specific Conditions

### 1. Find Documents Where "marks" Array Contains Values Greater Than or Equal to 80

**Query:**

```javascript
db.details.find({ marks: { $elemMatch: { $gte: 80 } } });
```

### Output:

```json

[
  {
    "_id": 1,
    "details": [
      {
        "name": "bhumika",
        "age": 23
      }
    ],
    "marks": [80, 89, 90]
  },
  {
    "_id": 2,
    "details": [
      {
        "name": "geetha",
        "age": 21
      }
    ],
    "marks": [90, 85, 70]
  },
  {
    "_id": 3,
    "details": [
      {
        "name": "mahadevaswamy",
        "age": 25
      }
    ],
    "marks": [86, 79, 70]
  },
  {
    "_id": 4,
    "details": [
      {
        "name": "manjunath",
        "age": 22
      }
    ],
    "marks": [88, 81, 78]
  }
]

```

---

### 2. Find Documents Where "marks" Array Contains Values Between 80 and 85 Inclusive

**Query:**

```javascript
db.details.find({ marks: { $elemMatch: { $gte: 80, $lte: 85 } } });
```

### Output:

```json
[]
```

---

