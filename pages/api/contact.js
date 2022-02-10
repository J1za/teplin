import { transporter } from "../../utils/mail-service";

export default async (req, res) => {
  const { email, topic } = req.body
  try {
    const emailTest = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'workinvs@gmail.com',
      subject: `Contact form submission from ${email}`,
      html: `<p style="font-size: 25px; color: black; text-align: center">You have a new <strong style="color: cornflowerblue">Contact</strong> form submission</p>
             <p style="font-size: 20px; color: black"><strong style="color: cornflowerblue">Topic:</strong> ${topic}</p>`
    })
    res.status(200).json(req.body)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}


