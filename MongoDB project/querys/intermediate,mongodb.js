db.details.find({marks:{$elemMatch: { $gte:80 }}});
db.details.find({marks:{$elemMatch: { $gte:80,$lte:85 }}}); 