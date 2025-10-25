---
title: "Calendar"
permalink: /calendar/
excerpt: ""
author_profile: true
---
<script>

function copyCode(button) {
  const codeBlock = button.previousElementSibling.querySelector('code');
  const codeToCopy = codeBlock.innerText;

  navigator.clipboard.writeText(codeToCopy)
    .then(() => {
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1500); // Revert button text after 1.5 seconds
    })
    .catch(err => {
      console.error("Failed to copy code: ", err);
      alert("Failed to copy code.");
    });
}

</script>

<style>
    .code-container {
  position: relative;

    }

.copy-button {
  position: absolute;
  top: 5px;
  right: 5px;
  /* Other styling for the button */
}

</style>

<p>To add the calendar to your google calendar click this <a href="https://calendar.google.com/calendar/embed?src=e1ea9c46509928520cf0ac36372f4cfc39b2f3a66983463c1cea1d65930d33c1%40group.calendar.google.com&amp;ctz=America%2FChicago">link</a>.</p>



<p>To add the calendar to a different calendar use the link and instructions below:</p>



<a class="wp-block-button__link wp-element-button" href="https://support.apple.com/en-us/102301">Apple Instructions</a>



<a href = "https://support.microsoft.com/en-us/office/import-or-subscribe-to-a-calendar-in-outlook-com-or-outlook-on-the-web-cff1429c-5af6-41ec-a5b4-74f2c278e98c">Outlook</a>




Use this link to add the calendar:

<div class="code-container">
  <pre><code>
    https://calendar.google.com/calendar/ical/e1ea9c46509928520cf0ac36372f4cfc39b2f3a66983463c1cea1d65930d33c1%40group.calendar.google.com/public/basic.ics
  </code></pre>
  <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>







<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showTitle=0&mode=AGENDA&showNav=0&showDate=0&showTabs=0&showCalendars=0&src=ZTFlYTljNDY1MDk5Mjg1MjBjZjBhYzM2MzcyZjRjZmMzOWIyZjNhNjY5ODM0NjNjMWNlYTFkNjU5MzBkMzNjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f4511e" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>