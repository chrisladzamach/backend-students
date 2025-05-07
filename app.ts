import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/student.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(studentRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;