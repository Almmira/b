import express from 'express';
import { index_quiz_topic } from '../controllers/controller.js'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({"hello" : "fjdkls"});
});

router.get('/test', index_quiz_topic)

export default router
