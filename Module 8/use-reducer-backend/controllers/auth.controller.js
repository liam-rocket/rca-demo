import HttpException from '../exceptions/HttpException.js';

/* eslint-disable class-methods-use-this */
class AuthController {
  signIn = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (email !== 'liam@liam.co') {
        throw new HttpException(500, 30001, 'Email not found');
      }

      res.cookie('isLoggedIn', true);
      res.status(200).json({
        success: true,
        data: { firstName: 'Liam', lastName: 'Leung' },
      });
    } catch (err) {
      next(err);
    }
  };

  reAuth = async (req, res, next) => {
    try {
      console.log('reauth ran');
      res.cookie('isLoggedIn', true);
      res.status(200).json({
        success: true,
        data: { firstName: 'Liam', lastName: 'Leung' },
      });
    } catch (err) {
      next(err);
    }
  };

  verifySignIn = async (req, res, next) => {
    try {
      res.status(200).json('You are logged in !');
    } catch (err) {
      next(err);
    }
  };

  signOut = async (req, res) => {
    try {
      res.clearCookie('isLoggedIn');
      res.status(200).json({
        success: true,
        message: 'Logout',
      });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthController;
