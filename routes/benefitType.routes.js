const express = require('express');
const router = express.Router();
const benefitTypeController = require('../controllers/benefitType.controller');

router.post('/', benefitTypeController.createBenefitType);
router.get('/:id', benefitTypeController.getBenefitTypeById);
router.get('/', benefitTypeController.getAllBenefitTypes);
router.put('/:id', benefitTypeController.updateBenefitType);
router.delete('/:id', benefitTypeController.deleteBenefitType);

module.exports = router;