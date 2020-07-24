import * as data from "./json/hello.json"
import * as schema from "./json/schema.json"
import * as fs from "fs"

var Validator = require("jsonschema").Validator
var v = new Validator()

// Functions for building HTML DOM.
function setHTML(HTML: string, head: string, body: string) {
  return HTML.concat(HTML, `<html>${head}${body}</html>`)
}
// Head functions.
function setHead(head: string) {
  return `<head>${head}</head>`
}

function setTitle(head: string, title: string) {
  return head.concat(head, `<title>${title}</title>`)
}

// Body functions.
function setBody(body: string) {
  return `<body>${body}</body>`
}

function setLabel(body: string, label: string) {
  return body.concat(body, `<label>${label}</label>`)
}

// If JSON is valid, create HTML DOM.
if (v.validate(data.$jason, schema).errors.length > 0) {
  // Invalid JSON.
  console.log("JSON is invalid!")
  console.log(v.validate(data.$jason, schema))
} else {
  // Valid JSON.
  let HTML = ""
  let head = ""
  let body = ""

  for (const component in data.$jason) {
    switch (component) {
      case "head": {
        for (const headComponent in data.$jason.head) {
          switch (headComponent) {
            case "title": {
              head = setTitle(head, headComponent)
              break
            }
          }
        }
        head = setHead(head)
        break
      }
      case "body": {
        body = setLabel(body, "Hi there!")
        for (const bodyComponent in data.$jason.body) {
          switch (bodyComponent) {
            case "sections": {
              for (let i = 0; i < data.$jason.body.sections.length; i++) {
                let section = data.$jason.body.sections[i]
                for (const sectionItem in section) {
                  switch (sectionItem) {
                    case "items":
                      break
                  }
                }
              }
              break
            }
          }
        }
        body = setBody(body)
        break
      }
    }
  }

  // Create HTML element and write it to new 'index.html' file.
  HTML = setHTML(HTML, head, body)
  fs.writeFileSync("src/index.html", HTML)
}
