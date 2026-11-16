import type {CollectionEntry} from 'astro:content';
export const groupSlug=(entry:{id:string})=>entry.id.split('/')[0];
export const eventOwner=(entry:{id:string})=>entry.id.startsWith('shared/')?'ISEL NewSpace':entry.id.split('/')[1];
export const sortEvents=(a:CollectionEntry<'events'>,b:CollectionEntry<'events'>)=>a.data.date.getTime()-b.data.date.getTime();
export const sortNews=(a:CollectionEntry<'news'>,b:CollectionEntry<'news'>)=>b.data.date.getTime()-a.data.date.getTime();
export const projectForArea=(p:CollectionEntry<'projects'>,areaId:string)=>p.data.areas.includes(areaId);
export const projectForTeam=(p:CollectionEntry<'projects'>,teamId:string)=>p.data.teams.includes(teamId);
