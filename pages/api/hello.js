// req = HTTP incoming message, res = HTTP server response
// Learn more about the request handler above in https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
