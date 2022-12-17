const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //files khi upload xong sẽ nằm trong thư mục "uploads" này 
      cb(null, 'src/public/img/products/images');
    },
    filename: function (req, file, cb) {
      // tạo tên file = tạo file name bang thu vien uuid
      // lay kieu file anh vua dc upload
      req.body.id = req.body.id ? req.body.id : uuidv4();
        const oldFileName = file.originalname.toString();
        console.log("Old file: " + oldFileName);
        const indexTypeFile = oldFileName.lastIndexOf(".");
        const typeOfFile = oldFileName.substring(indexTypeFile, oldFileName.length);
        console.log("File "+typeOfFile);
        file.filename = req.body.id;
      cb(null, file.filename+typeOfFile );
    }
})

module.exports = storage;
