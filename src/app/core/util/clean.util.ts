export class CleanUtil {
  static removeEmpty(payload: any) {
    return Object.fromEntries(Object.entries(payload).filter(([_, v]) => (v != null && v != undefined)));
  }
}
