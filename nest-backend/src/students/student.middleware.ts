import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class StudentMiddleware implements NestMiddleware{
  use(req: any, res: any, next: (error?: any) => void) {
    const regexPatterns = {
      name: /^[A-Za-z ]{5,20}$/,
      address: /^[0-9A-Za-z. ,]{5,}$/,
      mobile: /^[0-9]+$/,
      gender: /^[A-Za-z ]{3,20}$/,
    };
    const errors: string[] = [];
  
    try{
      if (!regexPatterns.name.test(req.body.name)) {
        errors.push('Invalid Name');
      }
      if (!regexPatterns.address.test(req.body.address)) {
        errors.push('Invalid Address');
      }
      if (!regexPatterns.mobile.test(req.body.mobile)) {
        errors.push('Invalid Mobile');
      }
      if (!req.body.dob) {
        errors.push('Invalid Date of Birth');
      }
      if (!regexPatterns.gender.test(req.body.gender)) {
        errors.push('Invalid Gender');
      }
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      next();
    }catch(error){
      throw new Error(error.message);
    }
  }
}