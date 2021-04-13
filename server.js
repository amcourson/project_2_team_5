const express = require("express");
const routes = require("./controller");
const app = express();
const path = require("path");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const sequelize = require("./config/connection");
const session = require("express-session");
const { google, outlook, office365, yahoo, ics } = require("calendar-link");


const PORT = process.env.PORT|| 3017 ;
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);


app.listen(PORT, () => {
    console.log(
  `Server listening on ${PORT}`);
});

/*sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3010 , function(){
        console.log(`Express server listening on port ${this.address().port} in ${app.settings.env} mode`);
      }); 
});*/

