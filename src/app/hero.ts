export interface Hero {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      Comics;
  series:      Comics;
  events:      Comics;
  urls:        URL[];
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Thumbnail {
  path:      string;
  extension: string;
}
