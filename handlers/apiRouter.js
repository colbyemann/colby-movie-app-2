const express = require('express');
const MovieModel = require('../models/Movie.js');
const UserModel = require('../models/User.js');
const BriefModel = require('../models/Brief.js');
const helper = require('./helpers.js');

const router = express.Router();


router.get('/users/:id', helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({id: req.params.id}, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         resp.json(data);
      }
   });   
 
 });

 router.get('/movies/', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find({}, (err, data) => {
      if (err) {
         resp.json({ message: 'Movies not found' });
      } else {
         resp.json(data);
      }
   });   

});

router.get('/brief/', helper.ensureAuthenticated, (req, resp) => {
   BriefModel.find({}, (err, data) => {
      if (err) {
         resp.json({ message: 'Movies not found' });
      } else {
         resp.json(data);
      }
   });   

});

router.get('/movies/:id', helper.ensureAuthenticated, ( req, resp) => {
   MovieModel.find({id: req.params.id}, (err, data) => {
      if (err) {
         resp.json({ message: 'Movie not found' });
      } else {
         resp.json(data);
      }
   });   
 
 });

 router.get('/find/title/:id', helper.ensureAuthenticated, (req, resp) => {
   var id = req.params.id;
   MovieModel.find({ $text: { $search: id } }, (err, data) => {
      if (err) {
         resp.json({ message: 'Title not found' });
      } else {
         resp.json(data);
      }
   });   
 
 });

 router.get('/find/year/:y1/:y2', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find().where('release_date')
   .gt(req.params.y1)
   .lt(req.params.y2)
   .sort({ title: 1})
   .exec( function(err, data) {
   if (err) {
   resp.json({ message: 'movies not found' });
   } else {
   resp.json(data);
   }
   });
   });  

   router.get('/find/rating/:r1/:r2', helper.ensureAuthenticated, (req, resp) => {
      MovieModel.find().where('ratings.average')
      .gt(req.params.r1)
      .lt(req.params.r2)
      .sort({ title: 1})
      .exec( function(err, data) {
      if (err) {
      resp.json({ message: 'movies not found' });
      } else {
      resp.json(data);
      }
      });
      });  

      router.get('/favorites', helper.ensureAuthenticated, ( req, resp) => {
         UserModel.find({_id: req.user._id}, 'favorites -_id', (err, data) => {
            if (err) {
               resp.json({ message: 'Movie not found' });
            } else {
               resp.json(data);
            }
         });   
       
       });

       router.post('/favorites/:add', helper.ensureAuthenticated, ( req, resp) => {
         UserModel.findOneAndUpdate({ _id: req.user._id },
            {
              $push: {
                favorites: req.params.add
              },
              new: true
            }
          )
            .then(doc => {
              res.send(doc);
            })
            .catch(err => {
              console.error(err);
            });
           
       
       });

module.exports = router;