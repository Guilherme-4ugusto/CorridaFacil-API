const express = require("express")
const path = require("path")
const morgan = require("morgan");
const helmet = require("helmet");
import { routes } from "./routes/routes";
const cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())
app.use(routes)

export { app };