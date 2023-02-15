const delay = require("delay");
const fs = require("fs");
const puppeteer = require("puppeteer");
const axios = require("axios");
var timeout = 200000;

async function getIp(type) {
  // Check condition to get new proxy
  var checkProxy = 0;
  let curType = type;
  while (!checkProxy) {
    var callProxy = await axios.post(
      `https://tmproxy.com/api/proxy/get-${curType}-proxy`,
      {
        api_key: "1b0ff1b292c001d4834d0197c5e74b77",
        // api_key: "b4555691c9359b5a65d4a68689492e33",
      }
    );
    // console.log("callProxy: ", callProxy);

    if (!callProxy.data.data.https) {
      console.log(`Error get ${curType} proxy`);
      await delay(1000 * 10);
      if (curType === "current") {
        curType = "new";
      }
    } else {
      checkProxy = 1;
      var proxy = callProxy.data.data.https;
      console.log("proxy is", proxy);
    }
  }

  return proxy;
}

(async () => {
  let count = 0;
  var proxy;
  while (true) {
    console.log("count: ", count);
    // if (count % 100 === 0) {
    //   proxy = await getIp("new");
    // } else {
    //   proxy = await getIp("current");
    // }
    count++;
    const pathToExtension =
      "C:\\Users\\HP\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\opcgpfmipidbgpenhmajoajpbobppdil\\22.11.15.0_0";

    const browser = await puppeteer.launch({
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        // `--proxy-server=${proxy}`,
      ],
    });
    try {
      await delay(2000);
      const page = await browser.newPage();

      await page.goto(
        "chrome-extension://opcgpfmipidbgpenhmajoajpbobppdil/ui.html#/welcome"
      );
      await page.waitForSelector(
        `#root > div > div > div > div > div.gqohqd2bltSLlw5EJqrg > a`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("a.uDUBihzsBafACO5RMGr7")[0].click();
      });
      await page.waitForSelector(`#root > div > div > div:nth-child(1) > a`, {
        timeout: timeout,
      });
      await page.evaluate(() => {
        document.querySelectorAll("a.MuTCPVF5Yv8Jw2J3JDL1")[0].click();
      });
      await page.waitForSelector(
        `#root > div > div > form > div > fieldset > label:nth-child(1) > input`,
        {
          timeout: timeout,
        }
      );
      await page.type("input[name=password]", "tmkITC98*", { delay: 20 });
      await page.type("input[name=confirmPassword]", "tmkITC98*", {
        delay: 20,
      });
      await page.evaluate(() => {
        document.querySelectorAll("span.MmDbA0GzFptVTURsV5YU")[0].click();
      });
      await page.evaluate(() => {
        document.querySelectorAll("button.qvmPyb8NdzsMrFWoHAEN")[0].click();
      });
      await page.waitForSelector(`#root > div > div > button`, {
        timeout: timeout,
      });
      const phrase = await page.evaluate(() => {
        return document
          .querySelectorAll("div.FcQQKvA6jyUfX4nnitAd")[0]
          .innerText.split("\n")[0];
      });
      console.log("phrase: ", phrase);

      await page.evaluate(() => {
        document.querySelectorAll("button.qvmPyb8NdzsMrFWoHAEN")[0].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.JzshaOGFEyrQvF4fhC_9 > a.Pxyoz1jJ8wYGMCqDOEMG.R0arsswJgfnkyaXeHjjT`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("a.Pxyoz1jJ8wYGMCqDOEMG")[0].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > div > div.vMETfYIViofF8rN3O6tj > div > a:nth-child(2) > div.uDrmvw51YzhVWMCoyqXR`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("div.uDrmvw51YzhVWMCoyqXR")[1].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > div > div.vMETfYIViofF8rN3O6tj.NJY6PzttimuQiGaoZJka > div > div.mhynLrNvhTgpyMllV1nZ > ul > li:nth-child(4) > button`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("button.Pv8fwERrhBr0Ukp6kAss")[3].click();
      });
      await page.evaluate(() => {
        document.querySelectorAll("a.Pxyoz1jJ8wYGMCqDOEMG")[0].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > main > div > div.SchqtIgrPDnXKwBHBFsA > button`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("button.qvmPyb8NdzsMrFWoHAEN")[0].click();
      });
      await delay(3000);
      await page.evaluate(() => {
        document.querySelectorAll("button.qvmPyb8NdzsMrFWoHAEN")[0].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > main > div > div.a3XedABEHyslj_OAYV3i > div > i`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("i.EZfRSvUsNZKZt6HN5F2H")[2].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > main > div > div > section > div > div.n5UFsNe4ZFkflbH1j1yX > button`,
        {
          timeout: timeout,
        }
      );
      await page.evaluate(() => {
        document.querySelectorAll("button.qvmPyb8NdzsMrFWoHAEN ")[0].click();
      });
      await page.evaluate(() => {
        document.querySelectorAll("span.F4UdN8PPv4YT5YKf7uHm")[1].click();
      });
      await page.waitForSelector(
        `#root > div > div > div.wOjQeIStBhElmmumhY7o > main > div > div.t8kuL9DVMLwb5YxvJV_P > section > section > a > div > img`,
        {
          timeout: timeout,
        }
      );
      browser.close();
      fs.appendFileSync("phrases.txt", `${phrase}\n`);
    } catch (error) {
      console.log("error: ", error);
      browser.close();
      continue;
    }
  }
})();
