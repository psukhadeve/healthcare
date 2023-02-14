export const fbcall=require('./auth/fb/fb_login.routes')
export const fbcallback=require('./auth/fb/fb_login_callback.routes')
export const gmailregister=require('./auth/gmail/gmail_register.routes')
export const gmaillogin=require('./auth/gmail/gmail_login.routes')
export const googlecall=require('./auth/google/google_login.routes')
export const googlecallback=require('./auth/google/google_login_callback.routes')
export const extrainfocheck=require('./auth/extraInfoToRegiser.routes')
export const extraInfoCheckForGoogle=require('./auth/google/extraInfoToRegiserGoole.routes')
export const sellerUploadProducts=require('./seller/products/uploadProducts.routes')
export const ratingProducts=require('./buyer/raings/ratings.routes')
export const ratingSingleProducts=require('./buyer/raings/ratingsofsingleproduct.routes')
export const soldProducts=require('./seller/soldproducts/soldProducts.routes')
export const createPaymentIntent=require('./payment/stripe/intentPayment.routes')
export const findSingleProductById=require('./seller/products/findSingleProductById.routes')
export const findSingleProductByIdAndUpdate=require('./seller/products/findSingleProductByIdAndUpdate.routes')
export const notification=require('./notification/notification.routes')

