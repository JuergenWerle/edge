#!/usr/bin/env node

import request from "request"
import path from "path"
import fs from "fs"

const files = {
  "pgts.yaml":
    "https://raw.githubusercontent.com/ua-parser/uap-core/master/test_resources/pgts_browser_list.yaml",
  "firefoxes.yaml":
    "https://raw.githubusercontent.com/ua-parser/uap-core/master/test_resources/firefox_user_agent_strings.yaml"
}

/**
 * Update the fixtures
 */
/* eslint-disable no-magic-numbers, consistent-return  */
Object.keys(files).forEach(key => {
  request(files[key], function response(err, res, data) {
    if (err || res.statusCode !== 200) return console.error("failed to update")

    console.log("downloaded", files[key])

    // eslint-disable-next-line no-undef 
    fs.writeFileSync(path.join(__dirname, "..", "test", "fixtures", key), data)
  })
})
