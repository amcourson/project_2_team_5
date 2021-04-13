DROP DATABASE IF EXISTS EventPlanner_db;
CREATE DATABASE EventPlanner_db;
use eventplanner_db;

/* SELECT INVITATION LIST FOR LOGGED IN USER */
SELECT * FROM EVENT WHERE ID IN (
(select EVENT_ID from guest where user_id = 3 AND  event_id  in 
(select id from event where status = 'active')));

