let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
const excelWorker = require('../controllers/excel.controller.js');

let path = __basedir + '/views/';

router.get('/', (req,res) => {
    console.log("__basedir" + __basedir);
    res.sendFile(path + "index.html");
});

//Upload Single Excel file
router.post('/api/file/upload', upload.single("file"), excelWorker.uploadFile);

//Upload Multiple Excel files
router.post('/api/file/multiple/upload', upload.array('files', 4), excelWorker.uploadMultipleFiles);

//Download Excel file
router.get('/api/file', excelWorker.downloadFile);

module.exports = router;