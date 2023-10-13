export const _qrData = {
  "question_1": {
    "title": "What type of customer are you?",
    "subtitle": "",
    "options": [
      {
        "answer": "I'm an existing customer",
        "icon": "/app/uploads/2023/07/Im-an-existing-customer.svg",
        "redirect": "question_2",
        "subtitle": "",
        "value": "existing_customer"
      },
      {
        "answer": "I'm a new customer",
        "icon": "/app/uploads/2023/07/Im-a-new-customer.svg",
        "redirect": "question_2",
        "subtitle": "",
        "value": "new_customer"
      }
    ]
  },
  "question_2": {
    "title": "How can we help?",
    "subtitle": "",
    "existing_customer": [
      {
        "answer": "I have a payment issue",
        "icon": "/app/uploads/2023/07/I-have-a-payment-issue.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "payment_issue",
        "email_send_to": "accounts@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "I'm moving and would like a charger installed at my new home",
        "icon": "/app/uploads/2023/07/Im-moving-and-would-like-a-charger-installed-at-my-new-home.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "moving",
        "email_send_to": "sales@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "There's a problem with my charger",
        "icon": "/app/uploads/2023/07/Were-here-to-help.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "charger_issue",
        "email_send_to": "customerservices@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "I'd like help with something else",
        "icon": "/app/uploads/2023/07/Id-like-help-with-something-else.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "other",
        "email_send_to": "customerservices@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "My app isn't working",
        "icon": "/app/uploads/2023/07/My-app-isnt-working.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "app_issue",
        "email_send_to": "customerservices@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "I want to cancel my subscription",
        "icon": "/app/uploads/2023/07/I-want-to-cancel-my-subscription.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "cancel_subscription",
        "email_send_to": "sales@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "I want to make a complaint",
        "icon": "/app/uploads/2023/07/Id-like-to-relocate-the-charger-within-my-current-property.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "relocate_charger",
        "email_send_to": "customerservices@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n<p>For more information, read our <a href=\"https://sms-metis.staged.cc/complaints\" target=\"_blank\" rel=\"noopener\">complaints policy</a></p>\n<p>&nbsp;</p>\n"
        }
      }
    ],
    "new_customer": [
      {
        "answer": "I've moved into a house with a charger and want to sign up for a subscription",
        "icon": "/app/uploads/2023/07/Ive-moved-into-a-house-with-a-charger-and-want-to-sign-up-for-a-subscription.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "moved_in",
        "email_send_to": "sales@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      },
      {
        "answer": "I'd like help with something else",
        "icon": "/app/uploads/2023/07/Id-like-help-with-something-else.svg",
        "redirect": "contact-from",
        "subtitle": "",
        "value": "other",
        "email_send_to": "customerservices@metis.co.uk",
        "outcome": {
          "icon": "/app/uploads/2023/08/help-icon.svg",
          "title": "We’re here to help.",
          "subtitle": "",
          "description": "<h5>Talk to one of our team on the number below, or simply leave your details with us and we’ll contact you back.</h5>\n<h4><a href=\"tel:0330 135 9977\">0330 135 9977</a></h4>\n"
        }
      }
    ]
  }
}