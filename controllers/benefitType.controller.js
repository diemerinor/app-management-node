const benefitTypeService = require('../services/benefitType.service');

const createBenefitType = async (req, res) => {
    try {
        const newBenefitType = await benefitTypeService.createBenefitType(req.body);
        res.status(201).json(newBenefitType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBenefitTypeById = async (req, res) => {
    try {
        const benefitType = await benefitTypeService.getBenefitTypeById(req.params.id);
        if (benefitType) {
            res.status(200).json(benefitType);
        } else {
            res.status(404).json({ message: 'Benefit type not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllBenefitTypes = async (req, res) => {
    try {
        const benefitTypes = await benefitTypeService.getAllBenefitTypes();
        res.status(200).json(benefitTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBenefitType = async (req, res) => {
    try {
        const updatedBenefitType = await benefitTypeService.updateBenefitType(req.params.id, req.body);
        res.status(200).json(updatedBenefitType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBenefitType = async (req, res) => {
    try {
        await benefitTypeService.deleteBenefitType(req.params.id);
        res.status(204).json({ message: 'Benefit type deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBenefitType,
    getBenefitTypeById,
    getAllBenefitTypes,
    updateBenefitType,
    deleteBenefitType
};