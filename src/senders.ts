import { create, Whatsapp } from 'venom-bot'


class Sender {
  private client: Whatsapp
  
  constructor() {
    this.initialize()
  }

  async sendButtons(to: string, body: string, buttons: { buttonText: { displayText: string; }; }[], Description: string) {
    await this.client.sendButtons(to, body, buttons, Description)
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body)
  }

  private initialize() {
    const qr = (base64Qrimg: string) => { }
    const status = (statusSession: string, session: string) => {
      return statusSession
    }
    const start = (client: Whatsapp) => {
      this.client = client
    }
    create('ws-senders-dev', qr)
      .then((client) => start(client))
      .catch((error) => console.error(error))
  }
}
// ca-certificatesfonts-liberationlibappindicator3-1libasound2libatk-bridge2.0-0libatk1.0-0libc6libcairo2libcups2libdbus-1-3libexpat1libfontconfig1libgbm1libgcc1libglib2.0-0libgtk-3-0libnspr4libnss3libpango-1.0-0libpangocairo-1.0-0libstdc++6libx11-6libx11-xcb1libxcb1libxcomposite1libxcursor1libxdamage1libxext6libxfixes3libxi6libxrandr2libxrender1libxss1libxtst6lsb-releasewgetxdg-utils
export default Sender
