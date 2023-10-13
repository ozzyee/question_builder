import {Question, QuestionObj} from "@/types/question";

export const _questionsData: QuestionObj = {
  "question_1": {
    "title": "What type of customer are you?",
    "subtitle": "",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/Home.svg",
        "answer": "Home",
        "description": "",
        "value": "home_customer",
        "redirect": "question_2"
      },
      {
        "icon": "/app/uploads/2023/07/Business.svg",
        "answer": "Business",
        "subtitle": "",
        "value": "business_customer",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, our EV charger subscription service is currently for home customers only. But the good news is we can help your business with EV charging in some other ways…",
          "subtitle": "",
          "description": "<p>Our parent company, SMS plc, works directly with organisations to develop fit-for-purpose EV charging solutions, including fully funded options. To find out more visit the <a href=\"https://www.sms-plc.com\" target=\"_blank\" rel=\"noopener\">SMS website</a>.</p>\n<p>Here at Metis, we can also partner with your business to deliver home EV charging services to your own customers. <a href=\"https://sms-metis.staged.cc/commercial-partnerships\">Discover our Commerical Partnerships</a></p>\n<p><a class=\"btn btn-primary mt-3\" href=\"/public\">Back to homepage</a></p>\n"
        }
      }
    ],
    "footnote": ""
  },
  "question_2": {
    "title": "Do you have access to off-street parking at your home?",
    "subtitle": "We currently only install EV chargers for homes with access to a private, off-street parking space which is located directly next to the property and doesn't cross a public footpath.",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/Yes-I-have-access-to-off-street-parking- at-my-home-i.e.-driveway-or-garage.svg",
        "answer": "Yes, I have access to off-street parking at my home (i.e. driveway or garage)",
        "subtitle": "",
        "value": "yes",
        "redirect": "question_3"
      },
      {
        "icon": "/app/uploads/2023/07/No-I-dont-have-access-to-off-street-parking-at-my-home.svg",
        "answer": "No, I don't have access to off-street parking at my home",
        "subtitle": "",
        "value": "No",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, you're currently not eligible for our home EV charger subscription service",
          "subtitle": "",
          "description": "<p>We’re unfortunately unable to install a charger for your type of home right now for the following reasons:</p>\n<ul class=\"list-cross\">\n<li>You don’t have access to off-street parking at your home</li>\n</ul>\n<p>If you’re happy to leave your email, we’ll make sure to contact you when our EV charger service, or other metis products, become available to your home.</p>\n"
        }
      }
    ],
    "footnote": ""
  },
  "question_3": {
    "title": "Do you own your home or have consent from the property owner to install an EV charger?",
    "subtitle": "For us to be able to install the charger, you’ll need to own the property yourself or have consent from the property owner.",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/I-own-my-home-or-I-rent-and-have-consent-from-the-property-owner.svg",
        "answer": "I own my home, or I rent and have consent from the property owner",
        "subtitle": "",
        "value": "yes",
        "redirect": "question_4"
      },
      {
        "icon": "/app/uploads/2023/07/I-dont-own-my-own-home-and-dont-have-consent-from-the-property-owner.svg",
        "answer": "No, I don’t own my home (or have consent from the property owner)",
        "subtitle": "",
        "value": "no",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, you're currently not eligible for our home EV charger subscription service",
          "subtitle": "",
          "description": "<p>We’re unfortunately unable to install a charger for your type of home right now for the following reasons:</p>\n<ul class=\"list-cross\">\n<li>You don’t own your home and you don’t have consent from the property owner</li>\n</ul>\n<p>If you’re happy to leave your email, we’ll make sure to contact you when our EV charger service, or other metis products, become available to your home.</p>\n"
        }
      }
    ],
    "footnote": ""
  },
  "question_4": {
    "title": "Does your home have an active internet connection?",
    "subtitle": "Our EV chargers can connect to either your home wifi or the cellular network (i.e. 4G or 5G). Your answer here will help us choose the best option for you.",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/Yes-my-home-is-connected-to-the-internet.svg",
        "answer": "Yes, my home is connected to the internet.",
        "subtitle": "",
        "value": "yes",
        "redirect": "question_5"
      },
      {
        "icon": "/app/uploads/2023/07/No-my-home-is-not-connected-to-the-internet.svg",
        "answer": "No, my home is not connected to the internet.",
        "subtitle": "",
        "value": "no",
        "redirect": "question_5"
      }
    ],
    "footnote": ""
  },
  "question_5": {
    "title": "How is the mobile phone signal where you typically park your car at home? (either on your driveway or inside your garage)",
    "subtitle": "Our EV chargers can connect to either your home wifi or the cellular network (i.e. 4G or 5G). Your answer here will help us choose the best option for you.",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/Great-More-than-4-bars-of-signal.svg",
        "answer": "Great",
        "subtitle": "More than 4 bars of signal",
        "value": "great",
        "redirect": "question_6"
      },
      {
        "icon": "/app/uploads/2023/07/Good-More-than-2-bars-of-signal.svg",
        "answer": "Good",
        "subtitle": "More than 2 bars of signal",
        "value": "good",
        "redirect": "question_6"
      },
      {
        "icon": "/app/uploads/2023/07/Poor-Less-than-2-bars-of-signal-1.svg",
        "answer": "Poor",
        "subtitle": "Less than 2 bars of signal",
        "value": "poor",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, you're currently not eligible for our home EV charger subscription service",
          "subtitle": "",
          "description": "<p>We’re unfortunately unable to install a charger for your type of home right now for the following reasons:</p>\n<ul class=\"list-cross\">\n<li>Your home is not connected to the internet and there is not sufficient mobile signal where you typically park your car (i.e. driveway/garage).</li>\n</ul>\n<p>If you’re happy to leave your email, we’ll make sure to contact you when our EV charger service, or other metis products, become available to your home.</p>\n"
        }
      },
      {
        "icon": "/app/uploads/2023/07/No-signal-Zero-coverage-available.svg",
        "answer": "No signal",
        "subtitle": "Zero coverage available",
        "value": "no_signal",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, you're currently not eligible for our home EV charger subscription service",
          "subtitle": "",
          "description": "<p>We’re unfortunately unable to install a charger for your type of home right now for the following reasons:</p>\n<ul class=\"list-cross\">\n<li>Your home is not connected to the internet and there is not sufficient mobile signal where you typically park your car (i.e. driveway/garage).</li>\n</ul>\n<p>If you’re happy to leave your email, we’ll make sure to contact you when our EV charger service, or other metis products, become available to your home.</p>\n"
        }
      }
    ],
    "footnote": ""
  },
  "question_6": {
    "title": "How far will your EV charger be from your electricity meter?",
    "subtitle": "Bear in mind that a home EV charger is typically installed outside your house on the front or side exterior wall as close as possible to your driveway. Alternatively, it can be fitted on the inside wall of your garage.",
    "option_type": "single_option",
    "options": [
      {
        "icon": "/app/uploads/2023/07/Distance-Less-than-15m-away.svg",
        "answer": "Less than 15m away",
        "subtitle": "",
        "value": "less-than-15-metres",
        "redirect": "question_7"
      },
      {
        "icon": "/app/uploads/2023/07/Distance-More-than-15m-away.svg",
        "answer": "More than 15m away",
        "subtitle": "",
        "value": "more-than-15-metres",
        "redirect": "non-eligible",
        "outcome": {
          "icon": "/app/uploads/2023/07/Sorry.svg",
          "title": "Sorry, you're currently not eligible for our home EV charger subscription service",
          "subtitle": "",
          "description": "<p>We’re unfortunately unable to install a charger for your type of home right now for the following reasons:</p>\n<ul class=\"list-cross\">\n<li>\n<p _data-renderer-start-pos=\"1521\">Your electricity meter is located more than 15m away from where the EV charger would likely be installed.</p>\n</li>\n</ul>\n<p>If you’re happy to leave your email, we’ll make sure to contact you when our EV charger service, or other metis products, become available to your home.</p>\n"
        }
      }
    ],
    "footnote": ""
  },
  "question_7": {
    "title": "And finally…",
    "subtitle": "Just a few more questions about you so we can help ensure your customer journey is  as smooth as possible. Please complete all fields before submitting.",
    "option_type": "multiple_option",
    "options": [
      {
        "title": "What is your age range?*",
        "sub_options": [
          {
            "answer": "18-25",
            "value": "18-25",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "25-40",
            "value": "25-40",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "40-60",
            "value": "40-60",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "60+",
            "value": "60+",
            "additional_option": false,
            "footnote": ""
          }
        ]
      },
      {
        "title": "What is your household income?*",
        "sub_options": [
          {
            "answer": "£0-30k",
            "value": "£0-30k",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "£31k-60k",
            "value": "£31k-60k",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "£61k-100k",
            "value": "£61k-100k",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "£100k+",
            "value": "£100k+",
            "additional_option": false,
            "footnote": ""
          }
        ]
      },
      {
        "title": "What is your employment status?*",
        "sub_options": [
          {
            "answer": "Employed",
            "value": "employed",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "Self-employed",
            "value": "self-employed",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "Unemployed",
            "value": "unemployed",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "Retired",
            "value": "retired",
            "additional_option": false,
            "footnote": ""
          }
        ]
      },
      {
        "title": "Do you require any special assistance to complete your application or participate in this service?*",
        "sub_options": [
          {
            "answer": "No",
            "value": "no",
            "additional_option": false,
            "footnote": ""
          },
          {
            "answer": "Yes",
            "value": "yes",
            "additional_option": true,
            "additional_option_label": "text",
            "footnote": "<p>Note: The above request for ‘additional information’ is optional, and your response will not affect your eligibility or participation. If you have indicated that you require assistance, we will be in touch at the next stage of your application to discuss this with you. We value your privacy, and any information provided will be kept confidential and used solely for the purpose of accommodating your needs if necessary.</p>\n"
          }
        ]
      }
    ],
    "multiple_option_props": {
      "redirect": "eligible",
      "outcome": {
        "icon": "/app/uploads/2023/07/Congratulations.svg",
        "title": "Great news! ",
        "subtitle": "",
        "description": "<h5>Based on the information you’ve provided, your home is eligible for our EV charger subscription service.</h5>\n<h5>What happens next?</h5>\n<ol>\n<li>We just need to collect some additional information from you. This will allow us to send you a link to a quick self-survey, which we can then use to plan the best installation arrangements for your specific home.</li>\n<li>We’ll also use the personal information you provide to perform a soft credit check (via Experian), as well as to perform a verification of your ID.</li>\n<li>Once you’ve filled out the form below with your details and pressed ‘Submit’, you will shortly receive two text (SMS) messages from us to your mobile phone:\n<ul>\n<li>The first message will ask you to upload a ‘selfie’ and a scan of your ID documentation (driving licence or passport) via a secure link.</li>\n<li>The second message will ask you to complete the quick self-survey of your home. It takes around 10 minutes.</li>\n</ul>\n</li>\n<li>In the meantime, we will complete a ‘soft’ credit check. This will not leave any footprint on your credit record. If you proceed to sign a contract, your agreement with us will leave a ‘hard’ footprint on your credit report. To learn more about soft and hard credit checks, visit Experian’s <a href=\"https://www.experian.co.uk/consumer/guides/searches-and-credit-checks.html\">advice page</a>.</li>\n</ol>\n"
      },
    },
    "footnote": "<p>For further information regarding how we use your personal _data, please see our <a href=\"https://sms-metis.staged.cc/privacy-policy\" target=\"_blank\" rel=\"noopener\">Privacy Notice.</a></p>\n"
  }
}