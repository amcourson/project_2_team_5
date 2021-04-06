PROJECT TITLE: Event Planning 

PROJECT DESCRIPTION:
This app is an event planning app 

USER STORY: <br>
Login As A Host: <br>
GIVEN a site <br>
WHEN I visit the site for the first time <br>
THEN I am presented with the login/sign-up page  <br>
WHEN I click on Login/Sign-up page <br>
THEN ASK for username , password , submit button <br>
WHEN I click on Submit button <br>
THEN we can view events in which invited along with Create New Event button <br>
When I click on any event in 'View Event' <br>
THEN Event page is open with Event Title, Date, Description, RSVP , comments <br>
WHEN I click on 'New Event' <br>
THEN New Event page is open ask for Event Title, Date, Description, invite people  link, potluck, gift, registry, Event type, Event address
WHEN i click on Potluck,<br>
THEN I can add Food items with head count <br>
WHEN i click on Gift registry, <br>
I can add gift items, <br>
WHEN I save event,  <br>
THEN gets Saved in 'My Events' and people get invited <br>
WHEN Guest, RSVP with potluck items, <br>
THEN items get updated accordingly <br>
WHEN Guest, RSVP with gift registry, <br>
THEN gift items get updated accordingly <br>
WHEN I click on any PAST Event, <br>
I can send 'Thank You' Note to all Guests. <br>

Login As a Guest User: <br>
WHEN login as a guest user,  <br>
THEN My Profile shows - invitation list  <br>
WHEN clicked on any event, <br>
THEN
1. Guest can add comments, RSVP with YES/No/May Be
2. Guest can update Gift registry, potluck items and list gets updated accordingly
<br>
WHEN clicked on My Profile,  <br>
Calendar shows Event scheduled with RSVP response <br>
WHEN i clicked on PAST Events,  <br>
I can upload Photo, Add comments <br>








We want users to create a login/ signup 
We want the be able to create an event and add people to the event
We want the user to be able to RSVP for the event and choose an item from the menu
We want the user to be able to choose what gift they are bringing that is on the registery
As a host I want to be able to add comments
As a user I want to be able to add a picture for the event

WIREFRAME SKETCH: - Brandon

APIS: -Arti & Angelica
For this project we will be utilizing attendify api
npm libraries: 


NPM PACKAGES: - Brodie & Arti
1. Calendar API: https://www.npmjs.com/package/calendar-link
2. Upload image: https://www.npmjs.com/package/file-upload-with-preview
3. Date format: https://www.npmjs.com/package/date-format 

ROUGH BREAKDOWN OF TASKS:


Table Structure: 
1. USER <br>
userID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT <br>
userName: STRING, NOT NULL  <br>
FirstName: STRING, NOT NULL <br> 
LastName: STRING, NOT NULL <br>
Address: STRING, NOT NULL <br>
PhoneNo: STRING, NOT NULL <br>
ProfileImage: STRING, ALLOW NULL <br>

2. EVENT <br>
EventID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
EventTitle: STRING, NOT NULL <br>
EventDescription: STRING, NOT NULL <br>
EventImage: STRING, ALLOW NULL <br>
EventDate: DATE, NOT NULL <br>
TypeID: (Table: TYPE, KEY: TypeID)<br>
CategoryID: (Table: CATEGORY, KEY: CategoryID)<br>

3. TYPE:<br>
TypeID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
TypeName:  STRING, NOT NULL<br> 

4. CATEGORY:<br>
CategoryID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
CategoryName: STRING, NOT NULL <br>

5. COMMENT<br>
CommentID:  Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
CommentDescription: STRING, NOT NULL <br>
CommentDate: DATE, NOT NULL <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID )<br>
UserID: FOREIGN KEY (Table: USER, KEY: USERID)<br>

6. GUEST<br>
GuestID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
GuestName: STRING, NOT NULL <br> 
UserId: FOREIGN KEY (Table: USER, KEY: USERID) <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID) <br>
RSVP:  STRING, ALLOW NULL <br>

7. PHOTOS <br>
PhotoID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID) <br>
PhotoURL:  STRING, NOT NULL  <br>
PhotoDescription: STRING, ALLOW NULL <br>

8. POTLUCK <br>
PotluckID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT <br>
PotluckName: STRING, NOT NULL  <br>
PotluckDescription: STRING, NOT NULL  <br>
headCount: INT, NOT NULL  <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID) <br>
UserID: FOREIGN KEY (Table: USER, KEY: USERID) <br>

9. GIFTREGISTRY <br>
GiftID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT <br>
GiftName: STRING, NOT NULL  <br>
GiftDescription: STRING, NOT NULL  <br>
GiftURL: STRING, NOT NULL  <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID) <br>
UserID: FOREIGN KEY (Table: USER, KEY: USERID) <br>



