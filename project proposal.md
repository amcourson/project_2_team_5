<strong>PROJECT TITLE:</strong> Event Planning 

<strong> PROJECT DESCRIPTION:</strong> <br>
This app is an event planning app. <br>
We want users to login/ signup for creating an event <br>
We want the be able to create an event and add people to the event, add event type (either Potluck or Gift ) <br>
We want the user to be able to RSVP for the event and choose an item from the menu (if Event type is selected as Potluck) <br>
We want the user to be able to RSVP for the event and choose an gift from the list (if Event type is selected as Gift) <br>
We want the user to be able to RSVP for the event and user can decline to Gift or Portluck item <br>
As a host I want to be able to add comments <br>
As a user I want to be able to add a picture for the event <br>


USER STORY: <br>
<strong>Login As A Host: </strong><br>
GIVEN a site <br>
WHEN I visit the site for the first time <br>
THEN I am presented with the login/sign-up page  <br>
WHEN I click on Login/Sign-up page <br>
THEN ASK for username , password , submit button <br>
WHEN entered usernamem, password and click on Submit button <br>
THEN user is logged in and can view events for which user is invited along with Create New Event button <br>
When I click on any event in 'View Event' <br>
THEN Event page is open with Event Title, Date, Description, RSVP , Event type, Event Category, comments <br>
WHEN I click on 'New Event' <br>
THEN New Event page is open , it asks for Event Title, Date, Description, invite people (add guest email),add potluck items, add gift items, Event type, Event type, Event Category, Event address <br>
IF I choose Event Type As POTLUCK
THEN I can see 'Add Potluck item' button 
WHEN i click on 'Add Potluck' <br>
THEN I can add Food items, with needed quantitiy ie head count <br>
IF I choose Event Type As GIFT
THEN I can see 'Add Gift item' button 
WHEN i click on 'Add Gift' <br>
THEN I can save gift items in Gift registry with url <br>
WHEN I click on 'Save event' <br>
THEN gets Saved in 'My Events' and people get invited <br>
WHEN Guest, reply with potluck item, <br>
THEN potluck items get updated accordingly <br>
WHEN Guest, reply with gift registry, <br>
THEN gift items get updated accordingly <br>
WHEN I click on any PAST Event, <br>
I can send 'Thank You' Note to all Guests. <br>
WHEN I click on any Future Event, <br>
THEN I can see Guest response, items they will bring and their head-count along with days remaining <br>

<strong> Login As a Guest User:</strong> <br>
WHEN login as a guest user,  <br>
THEN My Profile shows - invitation list  <br>
WHEN clicked on any event, <br>
THEN
1. Guest can add comments, RSVP with YES/No/May Be (adult + kids count) <br>
2. If RSVP is YES then I can select Adult and Kids count. <br>
3. If Event type is Potluck : Guest can update Potluck item  or decline to Potluck item. Potluck items gets updated accordingly <br>
4. If Event type is Gift : Guest can update Gift registry or decline to gift registry. Gift items list gets updated accordingly  <br>
<br>

WHEN clicked on My Profile,  <br>
Calendar shows Event scheduled with RSVP response, item choosen <br>
WHEN i clicked on PAST Events,  <br>
I can upload Photo, Add comments <br>


<strong> WIREFRAME SKETCH: </strong> Project 2 Wireframe.pdf (Brandon)

<strong> APIS: <i>(Arti & Angelica)</i> </strong><br>
For this project we will be utilizing following apis <br>
1. Attendify
https://developers.attendify.com/

2. Four Square API: (to get venue details)
https://developer.foursquare.com/

<strong> NPM PACKAGES: <i>(Brodie & Arti)</i>  </strong><br>
1. Calendar API: https://www.npmjs.com/package/calendar-link
2. Upload image: https://www.npmjs.com/package/file-upload-with-preview
3. Date format: https://www.npmjs.com/package/date-format 

<strong> ROUGH BREAKDOWN OF TASKS: </strong>
1. Front- End UI: <i>(Brandon / Angelica / Arti)</i> <br>
HTML , CSS, javascript, Bootstrap: <i>(Brandon / Angelica) </i><br>
Handlerbars:  <i>(Angelica / Arti)</i> <br>
Session, cookies:<i> (Arti) </i> <br>

2. Back-END <br>
create database: <i>(Brodie)</i>  <br> 
creating routes: <i>(Arti)</i> <br> 
SEED database - <i>(Angelica / Arti)</i> <br>
Creating API - CRUD routes (GET, POST, PUT, DELETE) - <i>(Arti)</i> <br>
connect db - env, sequilize, mysql, protect env - <i>(Angelica)</i> <br>

3. Package: <i>(Angelica)</i>  <br>
Install Express, Node, handlebars, npm packages (date, calendar, photo) <br>

4. ESLINT - checking for errors -<i> (Brodie)</i> <br>

5. Tests ?? - If needed <br>

6. Upload Heroku: check for live version -<i> (Arti) </i><br>

7. Unit Testing - ALL <br>

7. ReadME - <br>

<strong> Database Structure:</strong>  <br>
1. USER <br>
userID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT <br>
userName: STRING, NOT NULL  <br>
FirstName: STRING, NOT NULL <br> 
LastName: STRING, NOT NULL <br>
Address: STRING, NOT NULL <br>
PhoneNo: STRING, NOT NULL <br>
Email: STRING, NOT NULL <br>
ProfileImage: STRING, ALLOW NULL <br>

2. EVENT <br>
EventID: Primary Key, INTEGER, NOT NULL, AUTO-INCREMENT<br>
EventTitle: STRING, NOT NULL <br>
EventDescription: STRING, NOT NULL <br>
EventAddress: STRING, NOT NULL <br>
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
RSVP:  STRING, ALLOW NULL <br>
adultCount:  INT, ALLOW NULL <br>
kidsCount:  INT, ALLOW NULL <br>
PotluckID: FOREIGN KEY (Table: POTLUCK, KEY: PotluckID) ALLOW NULL <br> 
GiftID: FOREIGN KEY (Table: GIFTREGISTRY, KEY: GiftID) ALLOW NULL <br> 
UserId: FOREIGN KEY (Table: USER, KEY: USERID) <br>
EventID: FOREIGN KEY (Table: EVENT, KEY: EVENTID) <br>

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

ASSOCIATION: <br>
 `EVENT` belongs to `USER`, and `USER` has many `EVENT` models, 
 as a USER can have multiple EVENTS but a EVENT can only belong to one USER. <br>
`TYPE` belongs to `EVENT` as Event can have only one type. <br>
`CATEGORY` belongs to `EVENT` as Event can have only one category. <br>
`EVENT` has many `PHOTO` models as Event can have many photos. <br>
`EVENT` has many `COMMENT` models as Event can have many comments. <br>
`EVENT` has many `GIFT` models as Event can have many gift items. <br>
`EVENT` has many `POTLUCK` models as Event can have many POTLUCK items. <br>
`POTLUCK` belongs to `USER` as USER can have only one POTLUCK ITEM. <br>
`GIFT` belongs to `USER` as USER can have only one GIFT ITEM. <br>



Update: 
Using **multer** npm library for Photo uploading. <br>
https://www.npmjs.com/package/multer

using npm library, Photo will be saved to local directory and its url would be saved in mysql database. To avoid high volume of images , will restrict user to 
upload upto 2 photo per user per event.

Sample code base for uploading photo: https://github.com/arti-karnik/imageUploadWithNodeJS






