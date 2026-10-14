// Run with: mongosh --file contact-crud.js
const contactDb = db.getSiblingDB("contact");
const collectionName = "contactlist";

if (!contactDb.getCollectionNames().includes(collectionName)) {
  contactDb.createCollection(collectionName);
}

const contactlist = contactDb.getCollection(collectionName);

const contacts = [
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 },
];

const insertResult = contactlist.insertMany(contacts);
const benId = insertResult.insertedIds[0];

print("All contacts:");
printjson(contactlist.find({}).toArray());

print("One contact by ID:");
printjson(contactlist.findOne({ _id: benId }));

print("Contacts older than 18:");
printjson(contactlist.find({ age: { $gt: 18 } }).toArray());

print('Contacts older than 18 with a name containing "ah":');
printjson(

    
   
);

contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } },
);

contactlist.deleteMany({ age: { $lt: 5 } });

print("Contacts after update and deleting contacts under 5:");
printjson(contactlist.find({}).toArray());
