import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Links = new Mongo.Collection('links');

Links.schema = new SimpleSchema({
  from: { type: String },
  to: { type: [String] },
  url: { type: String },
  tags: { type: [String] },
});

Links.attachSchema(Links.schema);
