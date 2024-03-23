// asset.js

const connection = require('./database');

function getAllAssets(callback) {
  const query = 'SELECT * FROM asset-tracker';

  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, results);
  });
}

module.exports = {
  getAllAssets,
};
