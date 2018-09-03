import { Injectable } from "@angular/core";

// model
import { Service } from "../models/services-data.interface";

@Injectable()
export class DataStorageService {
  private service: Service = {
    path: null,
    title: null,
    description: null,
    imageUrl: null,
    crimes: []
  };

  setService(
    urlPath: string,
    title: string,
    description: string,
    imageUrl: string,
    crimes: string[]
  ) {
    this.service = {
      path: urlPath,
      title: title,
      description: description,
      imageUrl: imageUrl,
      crimes: crimes
    };
  }

  getService() {
    return this.service;
  }
}
