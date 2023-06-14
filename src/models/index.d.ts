import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly attendedEvents?: (EventAttendance | null)[] | null;
  readonly posts?: (Post | null)[] | null;
  readonly interactions?: (Interaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly attendedEvents: AsyncCollection<EventAttendance>;
  readonly posts: AsyncCollection<Post>;
  readonly interactions: AsyncCollection<Interaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostUser?: User | null;
  readonly eventName: string;
  readonly eventDescription?: string | null;
  readonly eventDate: string;
  readonly eventS3Bucket: string;
  readonly Public?: boolean | null;
  readonly attendees?: (EventAttendance | null)[] | null;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventHostUserId?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostUser: AsyncItem<User | undefined>;
  readonly eventName: string;
  readonly eventDescription?: string | null;
  readonly eventDate: string;
  readonly eventS3Bucket: string;
  readonly Public?: boolean | null;
  readonly attendees: AsyncCollection<EventAttendance>;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventHostUserId?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: string;
  readonly user: string;
  readonly videoURL: string;
  readonly videoS3Key: string;
  readonly postDate: string;
  readonly interactions?: (Interaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: string;
  readonly user: string;
  readonly videoURL: string;
  readonly videoS3Key: string;
  readonly postDate: string;
  readonly interactions: AsyncCollection<Interaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerInteraction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly interactionType: string;
  readonly interactionDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInteraction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly interactionType: string;
  readonly interactionDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interaction = LazyLoading extends LazyLoadingDisabled ? EagerInteraction : LazyInteraction

export declare const Interaction: (new (init: ModelInit<Interaction>) => Interaction) & {
  copyOf(source: Interaction, mutator: (draft: MutableModel<Interaction>) => MutableModel<Interaction> | void): Interaction;
}

type EagerEventAttendance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventAttendance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventAttendance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventAttendance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventAttendance = LazyLoading extends LazyLoadingDisabled ? EagerEventAttendance : LazyEventAttendance

export declare const EventAttendance: (new (init: ModelInit<EventAttendance>) => EventAttendance) & {
  copyOf(source: EventAttendance, mutator: (draft: MutableModel<EventAttendance>) => MutableModel<EventAttendance> | void): EventAttendance;
}