const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
    console.log('Data Coming is ', artistProps);
        // const user = new Artist({
        //     name: artistProps.name,
        //     age: artistProps.age,
        //     yearsActive: artistProps.yearsActive,
        //     genre: artistProps.genre
        // });
        const user = new Artist(artistProps);
        return user.save();
};
