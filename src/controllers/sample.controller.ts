import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import { SampleService } from '../services/sample.service';

export class SampleController {
  private sampleService = new SampleService();

  async getSampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, code } = req.body;

      const findSample = await this.sampleService.findSample({
        name,
        code,
      });

      /*
         📒Docs:
         Using `AppError Class` for Error Handle Exception
      */
      if (!findSample) throw new AppError('Sample data is not found', 404);

      res.status(200).json({
        success: true,
        message: 'Get sample successfull',
        samples: findSample,
      });
    } catch (error) {
      next(error);
    }
  }
}
