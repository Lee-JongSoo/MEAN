/* Get homepage */
const about = function(req, res){
    res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.<br /><br /> \ Loerm ipsum dolor sit amet, consectetur adipiscing elit. \
    Loerm ipsum dolor sit amet, consectetur adipiscing elit. \ Nunc sed lorem ac nisi difnissim accumsan.'
    });
 };

  module.exports = { 
      about
  };