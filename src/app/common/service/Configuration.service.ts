import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private ApiUrl = 'api/heroes';

  constructor() { }

  getApiUrl() {
    return this.ApiUrl;
  }
}
