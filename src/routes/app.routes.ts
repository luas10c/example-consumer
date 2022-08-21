import { Router } from 'express'
import { client } from '../proto'

const router = Router()

router.get('/user/:id', async (request, response) => {
  const { id } = request.params
  const user = await new Promise((resolve, reject) => {
    client.getUserById({ id }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })

  return response.json({
    data: user
  })
})

export default router
