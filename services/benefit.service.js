const Benefit = require('../models/benefit.model');

const createBenefit = async (benefitData) => {
    return await Benefit.create(benefitData);
};

const getBenefitById = async (id) => {
    return await Benefit.findById(id);
};

const getAllBenefits = async () => {
    return await Benefit.findAll();
};

const updateBenefit = async (id, benefitData) => {
    return await Benefit.update(id, benefitData);
};

const deleteBenefit = async (id) => {
    return await Benefit.delete(id);
};

module.exports = {
    createBenefit,
    getBenefitById,
    getAllBenefits,
    updateBenefit,
    deleteBenefit
};
