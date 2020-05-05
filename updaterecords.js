 Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
//This function updates a record based on what you pass throuh it. The id is the 4 digit code, which acts as a key. The propery is something like "album", "tracks", release_year". The value is what is connected to the property


function updateRecords(id, prop, value) {
if (value===""){
  delete collection[id][prop]
}else if (prop ==="tracks"){
  collection [id][prop]= collection[id][prop] || [],
  collection [id][prop].push;
}else {
  collection[id][prop]=value;
}

  return collection;
}

updateRecords(5439, "artist", "ABBA");
