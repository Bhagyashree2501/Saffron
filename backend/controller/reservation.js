import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


const send_reservation = async (req, res, next) => {
  const { Fname, Lname, email, date, time, number } = req.body;
  if (!Fname || !Lname || !email || !date || !time || !number) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ Fname, Lname, email, date, time, number});
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;