const FollowToggle = require("./follow_toggle");


$(() => {
  console.log("hello");
  $(".follow-toggle").each((i, el) => {
    console.log(el);
    console.log($(el));
    new FollowToggle($(el));

    console.log(el);
  });
});

