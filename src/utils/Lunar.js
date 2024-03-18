import lunr from 'lunr';

import { Documents } from '../data/PageDocuments';

export const idx = lunr(function () {
  this.ref('url');
  this.field('header');
  this.field('text');

  Documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});
