import { app } from './app.js'
import { connectDB } from './db/index.js'
import 'dotenv/config.js'

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() =>
        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))
    )
    .catch(err => console.error('Database connection error:', err));