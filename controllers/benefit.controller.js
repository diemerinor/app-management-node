const benefitService = require('../services/benefit.service');

const createBenefit = async (req, res) => {
    try {
        const newBenefit = await benefitService.createBenefit(req.body);
        res.status(201).json(newBenefit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBenefitById = async (req, res) => {
    try {
        const benefit = await benefitService.getBenefitById(req.params.id);
        if (benefit) {
            res.status(200).json(benefit);
        } else {
            res.status(404).json({ message: 'Benefit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllBenefits = async (req, res) => {
    try {
        const benefits = await benefitService.getAllBenefits();
        res.status(200).json(benefits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBenefit = async (req, res) => {
    try {
        const updatedBenefit = await benefitService.updateBenefit(req.params.id, req.body);
        res.status(200).json(updatedBenefit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBenefit = async (req, res) => {
    try {
        await benefitService.deleteBenefit(req.params.id);
        res.status(204).json({ message: 'Benefit deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBenefit,
    getBenefitById,
    getAllBenefits,
    updateBenefit,
    deleteBenefit
};
