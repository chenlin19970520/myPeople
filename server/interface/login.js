import Router from "koa-router";

let router = new Router({
  prefix: "/api"
});
router.post("/login", async ctx => {
  let token = ctx.request.body.token;
  console.log(token);
  if (token) {
    ctx.session.token = token;
    return (ctx.response.body = { success: true });
  }
  return (ctx.response.status = 401);
});
export default router;
