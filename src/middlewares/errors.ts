import type { Request, Response, NextFunction } from 'express'

type Handler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => void

const handler: Handler = (error, request, response, next) => {
  if (error instanceof Error) {
    return response.json({
      message: error.message
    })
  }

  return next()
}

export default handler
