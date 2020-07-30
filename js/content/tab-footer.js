document.write(`
      <!-- Modal Links Section -->
      <div class="tab-bottomsection-buttons">
        <button class="footer-modal_btn" id="footer-first_btn" onclick="document.getElementById('footer-first_modal').style.display='block'">
          <img class="footer-modal_btn-img" src="images/help-us-w.png">
          <img class="footer-modal_btn-img-active" src="images/help-us-bold-w.png">
        </button>

        <button class="footer-modal_btn" id="footer-second_btn" onclick="document.getElementById('footer-second_modal').style.display='block'">
          <img class="footer-modal_btn-img" src="images/listen-m3u.png">
          <img class="footer-modal_btn-img-active" src="images/listen-m3u-bold.png">
        </button>
      </div>

      <div class="tab-bottomsection-info">
        <p>[ Здесь может быть техническая инфа про разное ]</p>
        <p>[ Техническая инфа (про что?) ]</p>
      </div>`);