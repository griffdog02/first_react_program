// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Event, Post, Interaction, EventAttendance } = initSchema(schema);

export {
  User,
  Event,
  Post,
  Interaction,
  EventAttendance
};