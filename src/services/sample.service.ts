import { Sample } from '../generated/prisma';

export class SampleService {
  async findSample({ name, code }: Pick<Sample, 'name' | 'code'>) {
    return false;
  }
}
