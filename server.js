const express = require(express);

const app = express();

//load routes
const userRoutes = require('/routes/userRoutes');
const productRoutes = require('/routes/productRoutes');
const categoryRoutes = require('/routes/categoryRoutes');
const cartRoutes = require('/routes/cartRoutes');

//