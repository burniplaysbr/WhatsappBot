import express, { Request, Response } from "express"
import Sender from "./senders";


const sender = new Sender()

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded( { extended: false }))

app.get('/status', (req: Request, res: Response) => {
  
})

app.post('/send', async (req: Request, res: Response) => {
  const { job, number, body, buttons, Description } = req.body
  const renderButtons = buttons !== undefined ? buttons.map( (i: string) => ({"buttonText": {"displayText": i}})) : buttons
  const information = job === 'sendButtons' ? [`${number}@c.us`, body, renderButtons, Description]
                    : job === 'sendText' ? [`${number}@c.us`, body] : [`${number}@c.us`, body]

  try {
    sender[job](...information )    
    return res.status(200).json()

  } catch (error) {
    console.error(error)
    res.status(500).json({ status: "error", message: error})

  }
  
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))