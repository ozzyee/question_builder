import {_qrData} from "./qr-data";
import {convertObjToArr} from "../../_helper/convertObjToArr";
import {QuestionObj} from "../../types/question";

const redirects = []
let obj = {}

convertObjToArr(_qrData).map((qr, index) => {
  if (!qr.options) {
    Object.keys(qr).map((key) => {
      if (redirects.includes(key)) {
        obj[key] = {
          title: qr.title,
          options: qr[key]
        }
      }
    })
    return;
  }

  qr?.options?.map((option) => {
    redirects.push(option.value)
    option.redirect = option.value
  })

  obj["question_" + (index + 1)] = qr
});

export const qrData = obj as QuestionObj