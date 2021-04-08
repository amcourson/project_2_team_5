# project_2_team_5

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