import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class LowerCaseUrlSerializer implements UrlSerializer {
  private _defaultUrlSerializer: DefaultUrlSerializer = new DefaultUrlSerializer();

  parse(url: string): UrlTree {
    // Use the default UrlSerializer to parse the URL
    return this._defaultUrlSerializer.parse(url.toLowerCase());
  }

  serialize(tree: UrlTree): string {
    // Use the default UrlSerializer to serialize the URL
    return this._defaultUrlSerializer.serialize(tree);
  }
}
