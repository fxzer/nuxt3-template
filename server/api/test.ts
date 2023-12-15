import process from 'node:process'

export default defineEventHandler(async () => {
  return process.env
})
