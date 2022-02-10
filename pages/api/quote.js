import { transporter } from "../../utils/mail-service";

export default async (req, res) => {
  const { email, topic, budget } = req.body;
  try {
    const emailTest = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'workinvs@gmail.com',
      subject: `Quote form submission from ${email}`,
      html: `<div>
             <p style="font-size: 25px; color: black; text-align: center">You have a new <strong style="color: cornflowerblue">Quote</strong> form submission</p>
             <p style="font-size: 20px"><strong style="color: cornflowerblue"">Topic:</strong> ${topic}</p>
             <p style="font-size: 20px"><strong style="color: cornflowerblue"">Budget:</strong> ${budget}</p>
             </div>`,
    });
    res.status(200).json(req.body);
  } catch (e) {
    console.log(e);
    res.status(500).json({message: e})
  }
}
