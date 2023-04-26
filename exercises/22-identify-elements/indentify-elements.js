(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here

  //target all plans buttons
  const pricingButtons = document.querySelectorAll(".pricing-plan button");

  //target notification
  const notification = document.querySelector("#notification");
  const notificationMessage = document.querySelector("#notificationMessage");

  //loops through the pricing buttons
  pricingButtons.forEach((plan) => {
    plan.addEventListener("click", () => {
      notificationMessage.textContent = `Thank you for purchaising the ${plan.id} plan!`;

      // Show the hidden message
      notification.style.display = "block";
    });
  });

  //hide the notification
  const deleteButton = document.querySelector(".delete")

  deleteButton.addEventListener("click", () => {
    notification.style.display = "none"
  })
})();
