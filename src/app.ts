import { Hono } from 'hono'

//const app = new Hono()
export const app = new Hono();

app.get('/', (c) => {
  return c.json({
    success: true,
    message: "World Cup Ticketing API"
  })
})

app.get('/health', (c) => {
  return c.json({
    success: true,
    message: "World Cup Ticketing API",
    uptime: true,
    environment: true
  })
})

//export default app

