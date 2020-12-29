<template>
  <div class="indentedContent">
    <div class="paragraph_Main">
      <h1 class="h1">Contact Information</h1>

      <p><strong>Our Opening Hours:</strong></p>
      <!-- <ul>
        <li><strong>Monday to Thursday: </strong>8.00 AM to 5.30 PM</li>
        <li><strong>Friday: </strong>8.00 AM to 4.30 PM</li>
      </ul> -->
      <div><strong>Monday to Thursday: </strong>8.00 AM to 5.30 PM</div>
      <div><strong>Friday: </strong>8.00 AM to 4.30 PM</div>
      <div class="divider"></div>
      <p><strong>Contact:</strong></p>
      <div>
        <div class="bulletLess"><i class="fa fa-phone" aria-hidden="true"></i><a class="contactIcon" href="tel:+353879554650">087 955 4650</a></div>
        <div class="bulletLess">
          <i class="fa fa-envelope" aria-hidden="true"></i><a id="email" class="contactIcon" :href="'mailto:' + mailAddress">{{ mailAddress }}</a>
          <!-- <input
            type="image"
            class="clickable"
            title="Click to Copy Email"
            @click="copyMailToClipboard"
            width="24"
            height="24"
          /> -->
        </div>
      </div>
      <div style="margin-top: 20px;" class="divider"></div>
      <div>
        <p><strong>Address:</strong></p>
        <span>Drumcaurin</span>
        <br />
        <span>Ennis</span>
        <br />
        <span>Co. Clare</span>
        <br />
        <span>V95 XN3P</span>
        <br />
        <br />
        <a class="googleMapsAnchor" href="https://maps.app.goo.gl/YeKn7usWHGaX4GuF6">
          View on Google Maps
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Contact extends Vue {
    private mailAddress = "tombrooksengineering@gmail.com";

    private copyMailToClipboard() {
      const copyText = document.getElementById("email");
      if (copyText == null) return;
      let spanText = copyText.textContent;
      if (spanText == null) return;
      spanText = spanText.trim();

      const dummyTempTextArea = document.createElement("textarea");
      dummyTempTextArea.value = spanText;
      document.body.appendChild(dummyTempTextArea);
      dummyTempTextArea.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");
      dummyTempTextArea.remove();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/demo.css";
</style>
