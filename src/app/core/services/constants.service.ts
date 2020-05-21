import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  getAllData() {
    return { App: 'TaskManager', Ver: '1.0' };
  }
}

export const csInstance = new ConstantsService();
