const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.json({ success: true, message: 'Mensaje enviado' })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

module.exports = router