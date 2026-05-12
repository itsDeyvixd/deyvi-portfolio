const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))

app.use('/api/contact', require('./routes/contact'))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' })
})

app.listen(PORT, () => console.log(`Server en puerto ${PORT}`))