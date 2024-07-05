const express = require('express');
const router = express.Router();
const benefitController = require('../controllers/benefit.controller');

router.post('/', benefitController.createBenefit);
router.get('/:id', benefitController.getBenefitById);
router.get('/', benefitController.getAllBenefits);
router.put('/:id', benefitController.updateBenefit);
router.delete('/:id', benefitController.deleteBenefit);

module.exports = router;