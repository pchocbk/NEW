// Create web server

const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
