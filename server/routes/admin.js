const router = require("express").Router();
const adminController = require("../controller/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboar);
//crut categori
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);
//crut categori
router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);
//crut item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
//crut boking
router.get("/booking", adminController.viewBooking);

module.exports = router;
