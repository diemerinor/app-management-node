const BenefitType = require('../models/benefitType.model');

const createBenefitType = async (benefitTypeData) => {
    return await BenefitType.create(benefitTypeData);
};

const getBenefitTypeById = async (id) => {
    return await BenefitType.findById(id);
};

const getAllBenefitTypes = async () => {
    return await BenefitType.findAll();
};

const updateBenefitType = async (id, benefitTypeData) => {
    return await BenefitType.update(id, benefitTypeData);
};

const deleteBenefitType = async (id) => {
    return await BenefitType.delete(id);
};

module.exports = {
    createBenefitType,
    getBenefitTypeById,
    getAllBenefitTypes,
    updateBenefitType,
    deleteBenefitType
};
