const express = require('express');
const smtp = require('./service/smtp');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Work');
});

app.post('/message', async (req, res) => {
	try {
		console.log(req.body);
		const { username, email, message } = req.body;
		if (!username || !email || !message) {
			return res.status(400).json({
				message: 'All fields are required',
			});
		}

		await smtp.sendMail(username, email, message);
		return res.status(200).json({
			message: 'Message sended successfuly',
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server has been started on PORT: ${PORT}`);
});
