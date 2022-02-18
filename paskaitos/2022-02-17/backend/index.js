//const express = require('express')
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use( 
  express.urlencoded({
      extended: false
  })
)

app.use(express.json())   //automatinis stringo konvertavimas i objekta

app.post('/post-request', (req, res) => {
 // let data = JSON.parse(req.body)  //uzkomentuota, nes apsirasem 'app.use(express.json())'
  console.log(req.body)
  res.json(req.body)
})

app.listen(3001)