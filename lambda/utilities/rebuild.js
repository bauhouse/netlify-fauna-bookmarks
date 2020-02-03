const rp = require('request-promise');

const rebuildSite = async function() {
    var options = {
        method: 'POST',
        uri: 'https://api.netlify.com/build_hooks/5e37c44beda9b156bca2f0d4',
        body: {},
        json: true
      };

      console.log('Rebuilding the site ... ');

      const returned = await rp(options).then(function(res) {
        console.log('Successfully hit webhook', res);
      }).catch(function(err) {
        console.log('Error:', err);
      });

      return returned
}

export { rebuildSite }
