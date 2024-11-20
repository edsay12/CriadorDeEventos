import { randomUUID } from "crypto";

export default class Id {
  static novo(): string {
    return randomUUID();
  }
}



console.log(Id.novo())