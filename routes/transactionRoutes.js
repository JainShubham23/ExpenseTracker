const express = require('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')


//router object
const router = express.Router()


//routes

//add tranaction POST
router.post('/add-transaction', addTransaction )
//edit tranaction POST
router.post('/edit-transaction', editTransaction )

//delete tranaction POST
router.post('/delete-transaction', deleteTransaction )


//get transaction
router.post('/get-transaction', getAllTransaction)



module.exports = router