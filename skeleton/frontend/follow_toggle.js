class FollowToggle {
  constructor (el) {
    this.$el = el;
    this.userId = el.data("user-id");
    this.followState = el.data("inital-follow-state");

    this.render();
    this.handleClick();
  };

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow");
    } else {
      this.$el.text("Unfollow");
    }
  }

  handleClick() {
      this.$el.addEventListener("click", function (event) {
      event.preventDefault();


        if (this.followState === "unfollowed") {
          return $.ajax({
            method: 'POST',
            url: `users/${this.userId}/follow`,
            dataType: "JSON"
          });
        } else {
          return $.ajax({
            method: 'DELETE',
            url: `users/${this.userId}/follow`,
            dataType: "JSON"
        });
      }
    }
  );}
}

module.exports = FollowToggle;

