const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis error: ' + err);
});

const cacheTranslation = (key, value) => {
  client.setex(key, 3600, JSON.stringify(value)); // Cache for 1 hour
};

const getCachedTranslation = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      resolve(data ? JSON.parse(data) : null);
    });
  });
};

module.exports = { cacheTranslation, getCachedTranslation };