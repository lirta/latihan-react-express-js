const router = require("express").Router();
const adminController = require("../controller/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", adminController.viewSingnin);
router.post("/signin", adminController.actionSignin);
//session
router.use(auth);
//logout
router.get("/logout", adminController.actionLogout);
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
router.get("/item/show-image/:id", adminController.showImageItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

//datail item feature
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", upload, adminController.addFeature);
router.put("/item/update/feature", upload, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);
//datail item activity

router.post("/item/add/activity", upload, adminController.addActivity);
router.put("/item/update/activity", upload, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);
//crut boking
router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.showDetailBooking);
router.put("/booking/:id/confirmation", adminController.actionComfirmation);
router.put("/booking/:id/reject", adminController.actionReject);

module.exports = router;
