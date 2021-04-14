DROP DATABASE IF EXISTS EventPlanner_db;
CREATE DATABASE EventPlanner_db;
use eventplanner_db;

/* SELECT INVITATION LIST FOR LOGGED IN USER */
select guest.email , event.title from event, guest  where guest.email = 'arti@gmail.com' AND guest.event_id = event.id LIMIT 0, 1000


