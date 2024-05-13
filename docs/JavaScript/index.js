
<script>
      // Modal Image Gallery
      function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
      }

      // Change style of navbar on scroll
      window.onscroll = function() {
        myFunction();
      };
      function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          navbar.className =
            "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        } else {
          navbar.className = navbar.className.replace(
            " w3-card w3-animate-top w3-white",
            ""
          );
        }
      }

// Used to toggle the menu on small screens when clicking on the menu button
      function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else {
          x.className = x.className.replace(" w3-show", "");
        }
      }
    </script>

  <!-- BS4 JQUERY AND POPPER.js CDN's -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>

    <!-- local script file  -->
          <script>
        baguetteBox.run('.compact-gallery', { animation: 'slideIn' });

    </script>

<script>
   document.addEventListener('DOMContentLoaded', function () {
        const galleryFrame = document.getElementById('gallery-frame');
        const images = galleryFrame.querySelectorAll('img');

        images.forEach(img => {
            img.addEventListener('click', function () {
                images.forEach(img => {
                    img.classList.remove('active');
                    img.style.transform = 'rotate(45deg) scale(1)';
                });
                this.classList.add('active');
                this.style.transform = 'rotate(0) scale(1.2)';
            });
        });
    });
</script>
<script>
  const imss = document.querySelectorAll('.ims');
  const scratchOverlay = document.querySelector('.scratch-overlay');

  imss.forEach(ims => {
    ims.addEventListener('mouseenter', () => {
      ims.style.filter = 'blur(0)';
    });

    ims.addEventListener('mouseleave', () => {
      ims.style.filter = 'blur(20px)';
    });
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var searchField = document.getElementById("searchField");
    var searchDropdown = document.getElementById("searchDropdown");

    // Toggle dropdown when search field is clicked
    searchField.addEventListener("click", function() {
        if (searchDropdown.style.display === "block") {
            searchDropdown.style.display = "none";
        } else {
            searchDropdown.style.display = "block";
        }
    });
// Hide dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target !== searchField && event.target !== searchDropdown && !searchDropdown.contains(event.target)) {
            searchDropdown.style.display = "none";
        }
    });
});

</script>
<script>document.addEventListener("DOMContentLoaded", function() {
    var iconTriggerBtn = document.querySelector('.custom-icon-btn[data-icon-trigger]');
    var mobileMenu = document.querySelector('.custom-mobile-menu[data-menu]');
    var closeMenuBtn = document.querySelector('.custom-menu-close-btn[data-close-trigger]');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
    }

    iconTriggerBtn.addEventListener("click", openMobileMenu);

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", closeMobileMenu);
    }
  document.addEventListener("click", function(event) {
        if (!event.target.closest('.custom-mobile-menu') && !event.target.matches('.custom-icon-btn[data-icon-trigger]')) {
            closeMobileMenu();
        }
    });
});
</script>
<script>// Fetch FAQ data from backend or predefined dataset
function fetchFAQ() {
  // Simulated example FAQ data
  const faqData = [
    { question: "What is your return policy?", answer: "Our return policy allows customers to return items within 30 days of purchase for a full refund. Items must be unused and in their original packaging." },
    { question: "How do I track my order?", answer: "To track your order, log in to your account and navigate to the 'Order History' section. There, you will find tracking information for your recent orders." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, including Visa and Mastercard. Additionally, we offer payment through PayPal, Apple Pay and Mobile Money." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination. Please refer to our shipping policy for more information." },
    { question: "Can I cancel my order after it's been placed?", answer: "Unfortunately, we are unable to cancel orders once they have been placed. However, you may be able to return the items for a refund once they are received." },
    { question: "How can I contact customer support?", answer: "You can contact our customer support team via email at phillipaaidoo12345@gmail.com or by phone at 233-596-430-557. Our team is available to assist you Monday through Friday, from 9 am to 5 pm GMT." },
  ];

  // Generate HTML for FAQ items
  const faqHTML = faqData.map(item => `
    <div class="faq-item">
      <h4>${item.question}</h4>
      <p>${item.answer}</p>
    </div>
  `).join('');

  // Display FAQ items in the popup
  document.querySelector('.faq-body').innerHTML = faqHTML;
}

// Show FAQ popup
document.getElementById('faq-button').addEventListener('click', function() {
  document.getElementById('faq-popup').style.display = 'block';
  fetchFAQ(); // Fetch and display FAQ data
});

// Close FAQ popup
document.getElementById('close-faq-popup').addEventListener('click', function() {
  document.getElementById('faq-popup').style.display = 'none';
});
