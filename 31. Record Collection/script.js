const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

function updateRecords(records, id, prop, value) {
    // Case 1: If value is empty, delete the property
    if (value === "") {
        delete records[id][prop];
    }

    // Case 2: If prop is NOT "tracks" and value is not empty
    else if (prop !== "tracks") {
        records[id][prop] = value;
    }

    // Case 3 & 4: If prop is "tracks" and value is not empty
    else {
        // If tracks doesn't exist, create it
        if (!records[id].hasOwnProperty("tracks")) {
            records[id].tracks = [];
        }
        // Add the value to tracks
        records[id].tracks.push(value);
    }

    // Must always return the entire records object
    return records;
}
