const Koa = require("koa");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
import router from "koa-router"
const app = new Koa();

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(app.env === "production");
let db = require("../server/db.js");
app.keys = ["some"];
app.use(bodyParser());
const CONFIG = {
  key: "SESSION" /** (string) cookie key (default is koa:sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};
app.use(session(CONFIG, app));



async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);
  consola.log(nuxt.options.server);
  let user = db.db();
  let a = await user.find({}, { _id: 0 });
  console.log(a);
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.req.session = ctx.session;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
