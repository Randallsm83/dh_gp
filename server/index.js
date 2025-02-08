import express, { json } from 'express'
import cors from 'cors'

import sqlite3 from 'sqlite3'

import { auth } from 'express-oauth2-jwt-bearer'
import { requiredScopes } from 'express-oauth2-jwt-bearer'

import { Character } from '@xivapi/nodestone'

const app = express()

const checkJwt = auth({
    audience: 'YOUR_API_IDENTIFIER', // Must match your Auth0 API identifier
    issuerBaseURL: 'https://YOUR_AUTH0_DOMAIN/', // e.g., https://dev-xyz.us.auth0.com/
  })

  app.get('/api/protected', checkJwt, (req, res) => {
    res.json({ message: 'This is a protected route!' })
  })

app.use(cors())
app.use(json())

// Initialize DB
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error(err.message)
    }
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
    )`)
})

const characterParser = new Character()

// Get character by ID
app.get('/character/:id', async (req, res) => {
  try {
    const character = await characterParser.parse({ params: { characterId: req.params.id } })
    res.json(character)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST - Create User
app.post('/users', (req, res) => {
    const { name, email } = req.body
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        res.status(201).json({ message: 'User created', id: this.lastID })
    })
})

// GET - Get All Users
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        res.status(200).json(rows)
    })
})

// GET - Get Single User
app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params
    db.get('SELECT * FROM users WHERE id = ?', [user_id], (err, row) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        if (row) {
            res.status(200).json(row)
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    })
})

// PUT - Update User
app.put('/users/:user_id', (req, res) => {
    const { user_id } = req.params
    const { name, email } = req.body
    db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, user_id], function(err) {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        if (this.changes) {
            res.status(200).json({ message: 'User updated' })
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    })
})

// DELETE - Delete User
app.delete('/users/:user_id', (req, res) => {
    const { user_id } = req.params
    db.run('DELETE FROM users WHERE id = ?', [user_id], function(err) {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        if (this.changes) {
            res.status(200).json({ message: 'User deleted' })
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    })
})

// Start Server
app.listen(8080, () => {
    console.log('Server running on port 8080')
})
