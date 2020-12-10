const functions = require('firebase-functions');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  skipper = require('skipper'),
  port = 3000;

var Schema = mongoose.Schema;
const ObjectId = require('mongoose').Types.ObjectId;
// Database Setup

var userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  work: {
    type: String
  },
  education: {
    type: String
  },
  image: {
    type: String
  },
  imageCount: {
    type: Number
  },
  interested: {
    type: String
  },
  about: {
    type: String
  },
  dob: {
    type: Date
  },
  show: {
    type: Boolean,
    default: true
  },
  gender: {
    type: String
  },
  loc: {
    type: { type: String },
    coordinates: []
  }
}, {
  timestamps: true
});
var User = mongoose.model('User', userSchema);

const ActivitySchema = new Schema({
  uid: {
    type: String
  },
  liked: {
    type: Array,
    default: []
  },
  disliked: {
    type: Array,
    default: []
  },
  blocked: {
    type: Array,
    default: []
  },
  hisent: {
    type: Array,
    default: []
  },
  markedme: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

var Activity = mongoose.model('Activity', ActivitySchema);



const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
//mongodb://AmoreAdmin:AmoreAdmin12345@104.248.51.212/amore
// mongoose.connect('mongodb://amoreadmin:Dante12345,.@cluster0-shard-00-00-pmywm.mongodb.net:27017,cluster0-shard-00-01-pmywm.mongodb.net:27017,cluster0-shard-00-02-pmywm.mongodb.net:27017/amore?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', options).then(
mongoose.connect('mongodb+srv://amoreadmin:Dante12345,.@cluster0-pmywm.mongodb.net/amore?retryWrites=true&w=majority', options).then(
  () => { console.log("mongodb connection successful") },
  err => { console.log("err connection ", err) }
);


app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(cors());

// Start the server
let server = app.listen(port);

app.get('/', function(req, res) {
  User.find({}).then(function(resp) {
    res.send(resp)
  });
})

app.post('/updateuser', function(req, res) {
  var data = req.body.user;
  if (data.hasOwnProperty('uid')) {
    User.findOneAndUpdate({ uid: data.uid }, data, { upsert: true }, function(err, doc) {
      if (err) return res.json(err);
      res.send("succesfully saved");
    });
  }
})

app.post('/search', function(req, res) {


  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  var coords = [];
  coords[0] = req.body.longitude;
  coords[1] = req.body.latitude;

  var ageLower = req.body.age.lower;
  var ageUpper = req.body.age.upper;

  var lDate = new Date();
  var lowerDate = lDate.setDate(lDate.getDate() - ageLower * 365)

  var uDate = new Date();
  var upperDate = uDate.setDate(uDate.getDate() - ageUpper * 365)

  console.log('lowerDate ', lowerDate)
  console.log('upperDate ', upperDate)

  Activity.findOne({ uid: req.body.uid }).then(function(data) {

    // console.log("---------------------------------------- ",data);

    var nArray = [];
    nArray.push(req.body.uid);
    if (data != null) {
      console.log("hasOwnProperty");
      nArray = nArray.concat(data.blocked, data.liked, data.disliked, data.hisent)

    }

    var searchObj;
    console.log("--------------------nArray-------------------- ", nArray);
    // $maxDistance: req.body.distance,

    if (req.body.gender == 'Both') {
      searchObj = {
        uid: { $nin: nArray },
        createdAt: { $lt: req.body.lastDate },
        show: true,
        dob: { $gt: new Date(upperDate), $lt: new Date(lowerDate) },
        loc: {
          $near: {
            $maxDistance: 21000000,
            $minDistance: 0,
            $geometry: {
              type: "Point",
              coordinates: coords
            }
          }
        }
      }

      console.log("--------------------searchObj-------------------- ", searchObj);
    } else {
      // $maxDistance: req.body.distance,
      searchObj = {
        uid: { $nin: nArray },
        createdAt: { $lt: req.body.lastDate },
        show: true,
        dob: { $gt: new Date(upperDate), $lt: new Date(lowerDate) },
        gender: req.body.gender,
        loc: {
          $near: {
            $maxDistance: 21000000,
            $minDistance: 0,
            $geometry: {
              type: "Point",
              coordinates: coords
            }
          }
        }
      }
    }

    User.find(searchObj).limit(req.body.limit).sort('-createdAt').select('name imageCount gender dob loc uid image -_id createdAt').exec(function(err, locations) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(locations);
      res.json(locations);
    });
  })
})

const api = functions.https.onRequest(app)

module.exports = {
  api
}

module.exports.createUser = functions.firestore
  .document('/users/{uid}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    let newObj = Object.assign(newValue);
    newObj.image = newObj.photos[0];
    newObj.imageCount = newObj.photos.length;
    // newObj.loc = {
    //        type: "Point",
    //        coordinates: [newObj.point.geopoint.longitude,newObj.point.geopoint.latitude]
    // }
    var user = new User(newObj);
    user.save(function(err) {});
  });

module.exports.updateUser = functions.firestore
  .document('users/{uid}')
  .onUpdate((change, context) => {
    const uid = context.params.uid;
    const newValue = change.after.data();
    let newObj = Object.assign(newValue);
    newObj.image = newObj.photos[0];
    newObj.imageCount = newObj.photos.length;
    newObj.loc = {
      type: "Point",
      coordinates: [newObj.point.geopoint.longitude, newObj.point.geopoint.latitude]
    }
    User.findOneAndUpdate({ uid: uid }, newObj, { upsert: true }, function(err, doc) {
      return true;
    });
  });

module.exports.updateBlockedUser = functions.firestore
  .document('blocked/{uid}')
  .onUpdate((change, context) => {
    const uid = context.params.uid;
    const newValue = change.after.data();

    let newObj = Object.assign(newValue);
    newObj.uid = uid;

    Activity.findOneAndUpdate({ uid: uid }, newObj, { upsert: true }, function(err, doc) {
      return true;
    });
  });
