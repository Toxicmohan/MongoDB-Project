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
    "name": "Lakshmi",
    "marks": [
      75,
      80,
      90
    ]
  },
  {
    "_id": 2,
    "name": "Shifa Banu",
    "marks": [
      95,
      80
    ]
  },
  {
    "_id": 4,
    "name": "Akash",
    "marks": [
      70,
      80,
      90
    ]
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
[
  {
    "_id": 1,
    "name": "Lakshmi",
    "marks": [
      75,
      80,
      90
    ]
  },
  {
    "_id": 2,
    "name": "Shifa Banu",
    "marks": [
      95,
      80
    ]
  },
  {
    "_id": 4,
    "name": "Akash",
    "marks": [
      70,
      80,
      90
    ]
  }
]
```

---

