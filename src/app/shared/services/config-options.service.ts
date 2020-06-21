import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions = {
    id: '',
    login: '',
    email: ''
  };

  getConfigOptionsCopy(): object {
    return JSON.parse(JSON.stringify(this.configOptions));
  }

  setConfigOptions(newValues: object) {
    for (const newValueKey in newValues) {
      if (this.configOptions.hasOwnProperty(newValueKey)) {
        this.configOptions[newValueKey] = newValues[newValueKey];
      }
    }
  }
}
