const transactionModel = require('../models/transactionModel')
const moment = require('moment');
const { async } = require('rxjs');


const editTransaction = async (req,res) => {
try {
    await transactionModel.findOneAndUpdate({_id: req.body.transactionId}, req.body.payload)
    res.status(200).send('Edited Successfully')
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
}

const deleteTransaction = async(req,res) =>{
    try {
        await transactionModel.findOneAndDelete({_id: req.body.transactionId});
        res.status(200).send('Deleted Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const addTransaction = async (req,res) => {
    try {
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send('Transaction created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = {getAllTransaction, addTransaction, editTransaction, deleteTransaction};