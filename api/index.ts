import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import app from '../src/app.js'

export const config = { runtime: 'nodejs' }

const vercelApp = new Hono().route('/api', app)

export default handle(vercelApp)
