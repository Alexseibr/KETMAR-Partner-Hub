export const defaultMongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/ketmar_partner_hub';
export const partnerApiPort = Number(process.env.PORT || 3001);
export const apiPrefix = '/api/partner';
