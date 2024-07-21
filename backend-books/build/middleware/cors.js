"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = void 0;
const ACCEPTED_ORIGINS = [
    'http://localhost:4200',
    'http://localhost:9876'
];
const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => ({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin) || !origin)
            return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
});
exports.corsMiddleware = corsMiddleware;
