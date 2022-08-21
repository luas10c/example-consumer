import { loadPackageDefinition, Client, credentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import * as path from 'path'

const USER_PROTO = path.resolve(__dirname, 'pb', 'user.proto')

const packageDefinition = loadSync(USER_PROTO, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})

const proto = loadPackageDefinition(packageDefinition)

export const client = new proto.UserService(
  '0.0.0.0:4434',
  credentials.createInsecure()
)
