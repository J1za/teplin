import { transporter } from "../../utils/mail-service";
import nextConnect from "next-connect";
import middleware from 'middleware/fileMiddleware'
import path from 'path'
import fs from 'fs'
import mv from 'mv'
import bodyParser from 'body-parser'

const handler = nextConnect()
handler.use(middleware)
handler.use(bodyParser.urlencoded({extended: true}))
handler.post(async (req, res) => {
  const {file} = req.files

  let oldpath = file[0].path;
  let newpath = path.resolve(process.cwd(), 'public', file[0].originalFilename)
  fs.rename(oldpath, newpath, function (err) {
    if (err) throw err;
    res.write('File uploaded and moved!');
    res.end();
  });
  try {
    const {name, email, budget} = req.body
    const interested = req.body['interested[]']
    const emailTest = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'workinvs@gmail.com',
      subject: `Contact form submission from ${email}`,
      html: `<p style="font-size: 25px; color: black; text-align: center">You have a new <strong style="color: cornflowerblue">Contact Page</strong> form submission</p>
             <p style="font-size: 20px; color: black"><strong style="color: interested in">Interested:</strong> ${interested != "" ? interested : ''}</p>
             <p style="font-size: 20px; color: black"><strong style="color: interested in">Name:</strong>${name != "" ? name : ''}</p>
             <p style="font-size: 20px; color: black"><strong style="color: interested in">Email:</strong>${email != "" ? email : ''}</p>
             <p style="font-size: 20px; color: black"><strong style="color: interested in">Project budget:  </strong>${budget != "" ? budget : ''}  </p>`,
      attachments: [
        {
          filename: file[0].originalFilename,
          path: path.resolve(process.cwd(), 'public', file[0].originalFilename)
        }
      ]
    })
    res.status(200).json(req.body)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler

