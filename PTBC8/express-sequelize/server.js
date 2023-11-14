require('./environment');
const express = require('express');
const cors = require('cors');

const loggerMiddleware = require('./src/middlewares/logger.middleware');
const StudentRouter = require('./src/routers/students.route');
const NamesRouter = require('./src/routers/names.route');
const ClassesRouter = require('./src/routers/classes.route');

const app = express();
app.use(loggerMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routers = [new StudentRouter(), new NamesRouter(), new ClassesRouter()];
routers.forEach((router) => app.use('/', router.router));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
