import twilio from "twilio"
import dotenv from "dotenv"

dotenv.config()
const sendSMS = async () => {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

    return client.messages
    .create({body:'', from :'+13237759598', to : '+919789467241'})
    .then(message => {
        console.log(message, "Message Sent")
    })
    .catch(err => {
        console.log(err, "Message NOT Sent")
    })
}

sendSMS()